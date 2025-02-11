import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

export default function StartGameScreens() {
  const [eneteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(input) {
    setEnteredNumber(input);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(eneteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'desctructive', onPress: resetInputHandler }]
      );
      return;
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength="2"
        keyboardType="number-pad"
        autoCapitalize="none"
        onChangeText={numberInputHandler}
        value={eneteredNumber}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>

        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 26,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 26,
    marginTop: 6,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    gap: 5,
  },
  button: {
    flex: 1,
  },
});
