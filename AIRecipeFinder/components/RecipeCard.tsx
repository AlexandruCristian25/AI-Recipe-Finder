import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Recipe } from '../types/Recipe';
import { Heart } from 'lucide-react-native';

interface Props {
  recipe: Recipe;
  onToggleFavorite: () => void;
  isFavorite: boolean;
}

export default function RecipeCard({ recipe, onToggleFavorite, isFavorite }: Props) {
  return (
    <View className="flex-row items-center justify-between p-3 m-2 bg-white rounded-2xl shadow">
      <View className="flex-row items-center gap-3">
        <Image
          source={recipe.image ? { uri: recipe.image } : require('../assets/placeholder.png')}
          className="w-12 h-12 rounded-xl"
        />
        <View>
          <Text className="font-bold">{recipe.title}</Text>
          <Text className="text-gray-600 text-sm">{recipe.cookingTime}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onToggleFavorite}>
        <Heart color={isFavorite ? 'purple' : 'gray'} fill={isFavorite ? 'purple' : 'none'} />
      </TouchableOpacity>
    </View>
  );
}