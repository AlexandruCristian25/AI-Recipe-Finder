import React from 'react';
import { View, Text } from 'react-native';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <View className="w-full px-4 py-3 bg-white dark:bg-black flex-row justify-between items-center">
      <Text className="text-xl font-bold text-gray-800 dark:text-white">AI Recipe Finder</Text>
      <ThemeToggle />
    </View>
  );
};

export default Header;