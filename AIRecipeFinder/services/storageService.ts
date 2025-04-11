import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '../types/Recipe';

const FAVORITES_KEY = 'FAVORITE_RECIPES';

export async function getFavorites(): Promise<Recipe[]> {
  const data = await AsyncStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveFavorites(recipes: Recipe[]) {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(recipes));
}