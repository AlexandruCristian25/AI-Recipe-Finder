import React from 'react';
import RecipeCard from './RecipeCard';

const Favorites = ({ recipes, toggleFavorite, favorites }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes found. Generate one!</p>
      ) : (
        recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some(fav => fav.title === recipe.title)}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;