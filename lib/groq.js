import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Helper function to clean AI response from unwanted tags and thinking content
function cleanAIResponse(response) {
  if (!response) return response;
  
  let cleaned = response;
  
  // Remove various thinking tag formats (case insensitive, multiline)
  const thinkingPatterns = [
    /<think>.*?<\/think>/gis,
    /<thinking>.*?<\/thinking>/gis,
    /\*thinks?\*.*?\*\/thinks?\*/gis,
    /\[thinking\].*?\[\/thinking\]/gis,
    /\[think\].*?\[\/think\]/gis,
    /\(thinking\).*?\(\/thinking\)/gis,
    /\(think\).*?\(\/think\)/gis,
    /<!-- thinking -->.*?<!-- \/thinking -->/gis,
    /<!-- think -->.*?<!-- \/think -->/gis,
    /\*\*thinking\*\*.*?\*\*\/thinking\*\*/gis,
    /\*\*think\*\*.*?\*\*\/think\*\*/gis,
    /__thinking__.*?__\/thinking__/gis,
    /__think__.*?__\/think__/gis
  ];
  
  // Apply all patterns to remove thinking content
  thinkingPatterns.forEach(pattern => {
    cleaned = cleaned.replace(pattern, '');
  });
  
  // Remove lines that start with common thinking indicators
  cleaned = cleaned.replace(/^(Let me think|I think|Thinking:|Think:|Internal thought:|Reasoning:).*$/gm, '');
  
  // Remove excessive whitespace and newlines
  cleaned = cleaned
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Replace 3+ newlines with 2
    .replace(/^\s+|\s+$/g, '') // Trim start and end
    .replace(/\s+$/, ''); // Remove trailing spaces
  
  return cleaned || 'I apologize, but I encountered an issue generating a response. Please try again.';
}

// Function to analyze sentiment and detect crisis keywords
export async function analyzeSentiment(message) {
  try {
    const crisisKeywords = [
      'suicide', 'kill myself', 'end my life', 'want to die', 'death wish',
      'self-harm', 'hurt myself', 'cut myself', 'no reason to live',
      'better off dead', 'ending it all', 'can\'t go on', 'want to disappear',
      'hopeless', 'worthless', 'no point', 'give up'
    ];

    const messageLower = message.toLowerCase();
    
    // Check for crisis keywords
    const hasCrisisKeywords = crisisKeywords.some(keyword => 
      messageLower.includes(keyword)
    );

    // Use AI to analyze sentiment
    const sentimentPrompt = {
      role: 'system',
      content: `You are a sentiment analysis expert. Analyze the following message and respond with ONLY ONE WORD: "positive", "negative", or "neutral". Consider the emotional tone, context, and mental health indicators.`
    };

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        sentimentPrompt,
        {
          role: 'user',
          content: message
        }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      max_tokens: 10,
      stream: false,
    });

    const sentimentResponse = chatCompletion.choices[0]?.message?.content.trim().toLowerCase() || 'neutral';
    let sentiment = 'neutral';
    
    if (sentimentResponse.includes('positive')) {
      sentiment = 'positive';
    } else if (sentimentResponse.includes('negative')) {
      sentiment = 'negative';
    }

    // Determine if crisis intervention is needed
    const isCrisis = hasCrisisKeywords || (sentiment === 'negative' && (
      messageLower.includes('depressed') || 
      messageLower.includes('anxiety') ||
      messageLower.includes('can\'t handle') ||
      messageLower.includes('overwhelming')
    ));

    return {
      sentiment,
      isCrisis,
      crisisDetected: hasCrisisKeywords
    };
  } catch (error) {
    console.error('Sentiment analysis error:', error);
    return {
      sentiment: 'neutral',
      isCrisis: false,
      crisisDetected: false
    };
  }
}

export async function generateAIResponse(userMessage, conversationHistory = []) {
  try {
    // Prepare the conversation context
    const messages = [
      {
        role: 'system',
        content: `You are NeuroSync AI, a compassionate and professional mental health companion. Your role is to:

1. Provide empathetic, supportive, and non-judgmental responses
2. Offer evidence-based mental health guidance and coping strategies
3. Help users understand their emotions and thoughts
4. Suggest practical techniques like breathing exercises, mindfulness, or grounding techniques when appropriate
5. Encourage professional help when necessary
6. Never provide medical diagnoses or replace professional treatment
7. Always maintain a caring, understanding tone
8. Keep responses concise but meaningful (2-4 sentences typically)
9. Ask follow-up questions to better understand the user's situation

Remember: You are a supportive companion, not a replacement for professional therapy or medical treatment. If someone expresses thoughts of self-harm or suicide, encourage them to seek immediate professional help or contact crisis hotlines.

IMPORTANT: Provide only your direct response to the user. Do not include any thinking process, reasoning steps, or content within <think>, <thinking>, [thinking], or similar tags. Give only the final response that should be shown to the user.`
      },
      ...conversationHistory,
      {
        role: 'user',
        content: userMessage
      }
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      stream: false,
    });

    const rawResponse = chatCompletion.choices[0]?.message?.content || 'I apologize, but I encountered an issue generating a response. Please try again.';
    
    // Clean the response to remove thinking tags and unwanted content
    return cleanAIResponse(rawResponse);
  } catch (error) {
    console.error('Groq API error:', error);
    
    // Handle different types of errors
    if (error.status === 401) {
      throw new Error('Invalid Groq API key. Please check your configuration.');
    } else if (error.status === 429) {
      throw new Error('Rate limit exceeded. Please try again in a moment.');
    } else if (error.status >= 500) {
      throw new Error('Groq service is temporarily unavailable. Please try again later.');
    } else {
      throw new Error('Failed to generate AI response. Please try again.');
    }
  }
}

export default groq;