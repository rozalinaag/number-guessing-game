import { View, TextInput, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreens() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
