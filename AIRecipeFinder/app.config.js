import 'dotenv/config';

export default {
  expo: {
    name: "AIRecipeFinder",
    slug: "AIRecipeFinder",
    version: "1.0.0",
    extra: {
      openaiApiKey: process.env.OPENAI_API_KEY,
    },
  },
};