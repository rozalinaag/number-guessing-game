import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colors.primary500,
    padding: 12,
  },
});
