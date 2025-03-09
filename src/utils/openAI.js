import OpenAI from 'openai';

export const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI,
  dangerouslyAllowBrowser: true
});
