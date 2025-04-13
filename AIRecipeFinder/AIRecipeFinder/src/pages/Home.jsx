import React from 'react';
import RecipeGenerator from '../components/RecipeGenerator';
import Favorites from '../components/Favorites';
import FilterBar from '../components/FilterBar';

const Home = ({ recipes, setRecipes, favorites, toggleFavorite, filter, setFilter }) => {
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <RecipeGenerator setRecipes={setRecipes} toggleFavorite={toggleFavorite} favorites={favorites} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <Favorites recipes={filteredRecipes} toggleFavorite={toggleFavorite} favorites={favorites} />
    </div>
  );
};

export default Home;