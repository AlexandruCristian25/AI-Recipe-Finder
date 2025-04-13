import React from 'react';

const RecipeCard = ({ recipe, toggleFavorite, isFavorite }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{recipe.title}</h2>
        <button
          onClick={() => toggleFavorite(recipe)}
          className={`text-xl ${isFavorite ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          ★
        </button>
      </div>
      <div>
        <h3 className="font-medium">Ingredients:</h3>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-medium">Steps:</h3>
        <ol className="list-decimal list-inside">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeCard;