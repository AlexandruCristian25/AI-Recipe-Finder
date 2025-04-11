import { Recipe } from '../types/Recipe';
import Constants from 'expo-constants';

export async function fetchRecipesFromAI(prompt: string): Promise<Recipe[]> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Constants.manifest?.extra?.openaiApiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: `Give me 3 recipes in JSON format with fields: id, title, image, cookingTime, ingredients (array), instructions (string). Based on: ${prompt}` }],
    }),
  });

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || '';
  return parseRecipes(text);
}

function parseRecipes(text: string): Recipe[] {
  try {
    const recipes = JSON.parse(text);
    if (Array.isArray(recipes)) return recipes;
    return [recipes];
  } catch (err) {
    console.error("Failed to parse recipes from AI:", err);
    return [];
  }
}