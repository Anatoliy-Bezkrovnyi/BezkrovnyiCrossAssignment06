import { View, Text, Switch } from 'react-native';
import useTheme from '../../../context/themeContext/useTheme';
import styles from './ProfileScreen.styles';

export default function ProfileScreen() {

  const { theme, toggleTheme } = useTheme();
  
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, isDark ? styles.darkContainer : styles.lightContainer]}>
      
      <Text style={[styles.title, isDark ? styles.darkText : styles.lightText]}>
        Профіль користувача
      </Text>
      <View style={[styles.row, isDark ? styles.darkRow : styles.lightRow]}>
        <Text style={[styles.label, isDark ? styles.darkText : styles.lightText]}>
          {isDark ? 'Темна тема 🌙' : 'Світла тема ☀️'}
        </Text>       
        <Switch
          value={isDark}               
          onValueChange={toggleTheme}  
          trackColor={{ false: '#767577', true: '#b5cf82' }} 
          thumbColor={isDark ? '#ffffff' : '#f4f3f4'}       
        />
      </View>

    </View>
  );
}

