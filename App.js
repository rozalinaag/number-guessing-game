import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartGameScreens from './screens/StartGameScreens';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreens />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
});
