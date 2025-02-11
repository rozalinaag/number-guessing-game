import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 26,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.primary800,
    elevation: 4 /* for android */,
    /* for ios */
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
