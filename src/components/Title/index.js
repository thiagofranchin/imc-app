import { Text, View } from 'react-native';
import styles from './style';

export default function Title() {
  return (
    <View style={styles.titleWrapper} >
      <Text  style={styles.textTitle}>Calcule o IMC</Text>      
    </View>
  );
}