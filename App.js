import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreens from './screens/StartGameScreens';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreens onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[colors.primary500, colors.accent500]}
      style={styles.container}
    >
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroungImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
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
