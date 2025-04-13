import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeGenerator = ({ setRecipes, toggleFavorite, favorites }) => {
  const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "Generate a unique recipe with title, ingredients and steps in JSON format.",
            },
          ],
        }),
      });

      const data = await response.json();
      const match = data.choices[0].message.content.match(/\{[\s\S]*\}/);
      const recipeJson = JSON.parse(match[0]);
      setRecipes([recipeJson]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={generateRecipe}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow"
      >
        {loading ? "Generating..." : "Generate Recipe"}
      </button>
    </div>
  );
};

export default RecipeGenerator;