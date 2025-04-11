import { View } from 'react-native';

export default function LoadingSkeleton() {
  return (
    <View className="px-4 mt-4 space-y-4">
      {[...Array(4)].map((_, i) => (
        <View key={i} className="h-16 bg-gray-200 rounded-2xl" />
      ))}
    </View>
  );
}