import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreens() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength="2"
        keyboardType="number-pad"
        autoCapitalize="none"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#4e0329',
    elevation: 4 /* for android */,
    /* for ios */
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
