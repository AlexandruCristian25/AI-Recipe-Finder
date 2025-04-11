import React from 'react';
import { Pressable, Text } from 'react-native';
import { useColorScheme } from 'nativewind';

const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Pressable
      onPress={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      <Text className="text-black dark:text-white">
        {colorScheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </Text>
    </Pressable>
  );
};

export default ThemeToggle;