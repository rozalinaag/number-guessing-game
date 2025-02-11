import { Text, View, StyleSheet } from 'react-native';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Oppenent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* +- */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
