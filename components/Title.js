import { Text, StyleSheet } from 'react-native';

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
    color: '#4e0329',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#4e0329',
    padding: 12,
  },
});
