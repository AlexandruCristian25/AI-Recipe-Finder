import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ value, onChange, onSearch }: Props) {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-2 mx-4 mt-4">
      <TextInput
        placeholder="What do you feel like eating?"
        className="flex-1 text-sm"
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSearch}
      />
      <Search onPress={onSearch} />
    </View>
  );
}