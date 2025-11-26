# Deploying to Vercel - Environment Variables Guide

## Required Environment Variables

When deploying to Vercel, you need to add the following environment variables in your Vercel project settings:

### Go to: Project Settings → Environment Variables

Add these variables:

1. **MONGODB_URI**
   - Your MongoDB connection string
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/neurosync`

2. **JWT_SECRET**
   - Your JWT secret key for authentication
   - Generate a secure random string

3. **GROQ_API_KEY**
   - Your Groq API key for AI responses
   - Get it from: https://console.groq.com

4. **NEXT_PUBLIC_VAPI_PUBLIC_KEY**
   - Your Vapi public key for voice widget
   - Get it from: https://vapi.ai

5. **NEXT_PUBLIC_VAPI_ASSISTANT_ID**
   - Your Vapi assistant ID
   - Get it from: https://vapi.ai

## Important Notes:

- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Never commit `.env.local` file to git
- After adding environment variables in Vercel, redeploy your app
- The Vapi widget will only work once environment variables are set in Vercel

## Steps to Deploy:

1. Push your code to GitHub (without .env.local)
2. Connect your GitHub repo to Vercel
3. Add all environment variables in Vercel project settings
4. Deploy
5. Widget should now appear on your deployed site

## Troubleshooting Widget Not Showing:

If the Vapi widget is not showing on deployment:
1. ✅ Check that environment variables are set in Vercel
2. ✅ Verify variable names match exactly (case-sensitive)
3. ✅ Redeploy after adding environment variables
4. ✅ Check browser console for any errors
5. ✅ Make sure the Vapi script is loading (check Network tab)
