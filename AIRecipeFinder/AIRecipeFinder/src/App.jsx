import React, { useState, useEffect } from 'react';
import RecipeGenerator from './components/RecipeGenerator';
import Favorites from './components/Favorites';
import FilterBar from './components/FilterBar';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = (recipe) => {
    const exists = favorites.some(fav => fav.title === recipe.title);
    const updated = exists
      ? favorites.filter(fav => fav.title !== recipe.title)
      : [...favorites, recipe];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-4xl font-bold text-center">AI Recipe Finder 🍽️</h1>
      <RecipeGenerator setRecipes={setRecipes} toggleFavorite={toggleFavorite} favorites={favorites} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <Favorites recipes={filteredRecipes} toggleFavorite={toggleFavorite} favorites={favorites} />
    </div>
  );
};

export default App;