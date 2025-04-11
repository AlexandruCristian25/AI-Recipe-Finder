import Header from '../components/Header';
import { useState } from 'react';
import Header from '../components/Header';
import { ScrollView, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import { fetchRecipesFromAI } from '../services/recipeService';
import Header from '../components/Header';
import { getFavorites, saveFavorites } from '../services/storageService';
import Header from '../components/Header';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../components/Header';
import { Recipe } from '../types/Recipe';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  async function loadFavorites() {
    const favs = await getFavorites();
    setFavorites(favs);
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  const isFavorite = (recipe: Recipe) =>
    favorites.some((fav) => fav.title === recipe.title);

  const toggleFavorite = async (recipe: Recipe) => {
    let newFavorites = [];
    if (isFavorite(recipe)) {
      newFavorites = favorites.filter((r) => r.title !== recipe.title);
    } else {
      newFavorites = [...favorites, recipe];
    }
    setFavorites(newFavorites);
    await saveFavorites(newFavorites);
  };

  return (
    <View className="flex-1 bg-white">
      <SearchBar value={query} onChange={setQuery} onSearch={async () => {
        const result = await fetchRecipesFromAI(query);
        setRecipes(result);
      }} />
      <Header />
      <ScrollView>
        <Text className="text-xl font-bold px-4 pt-4">Favorites</Text>
        {favorites.map((r) => (
          <RecipeCard
            key={r.title}
            recipe={r}
            isFavorite={true}
            onToggleFavorite={() => toggleFavorite(r)}
          />
        ))}
        <Text className="text-xl font-bold px-4 pt-4">Suggestions</Text>
        {recipes.map((r) => (
          <RecipeCard
            key={r.title}
            recipe={r}
            isFavorite={isFavorite(r)}
            onToggleFavorite={() => toggleFavorite(r)}
          />
        ))}
      </ScrollView>
    </View>
  );
}