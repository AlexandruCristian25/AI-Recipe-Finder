import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, Text, View, Image } from 'react-native';
import { Recipe } from '../types/Recipe';

type RouteParams = {
  recipe: Recipe;
};

export default function RecipeDetailScreen() {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { recipe } = route.params;

  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      {recipe.image && (
        <Image source={{ uri: recipe.image }} className="w-full h-48 rounded-xl mb-4" />
      )}
      <Text className="text-2xl font-bold mb-2">{recipe.title}</Text>
      <Text className="text-gray-500 mb-4">Cooking time: {recipe.cookingTime}</Text>

      <Text className="text-lg font-semibold mb-1">Ingredients:</Text>
      {recipe.ingredients?.map((item, index) => (
        <Text key={index} className="text-gray-800">• {item}</Text>
      ))}

      <Text className="text-lg font-semibold mt-4 mb-1">Instructions:</Text>
      {recipe.instructions?.map((step, index) => (
        <Text key={index} className="text-gray-800 mb-1">{index + 1}. {step}</Text>
      ))}
    </ScrollView>
  );
}