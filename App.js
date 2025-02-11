import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreens from './screens/StartGameScreens';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroungImage}
      >
        <StartGameScreens />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroungImage: {
    opacity: 0.3,
  },
});
