/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/themeContext/themeContext'; 
import useTheme from './src/context/themeContext/useTheme';
import TabMenu from './src/navigation/TabMenu';
import { Provider } from 'react-redux';
import { store } from './src/context/redux/store';
function AppContent() {
  const { theme } = useTheme();
  
  const insets = useSafeAreaInsets(); 
  
  const isDark = theme === 'dark';

  return (
    <View 
      style={[
        styles.container, 
        isDark ? styles.darkBg : styles.lightBg,        
        { 
          paddingTop: insets.top, 
          paddingBottom: insets.bottom 
        }
      ]}
    >     
      <TabMenu />
    </View>
  );
}

export default function App() { 
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>      
      </SafeAreaProvider>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightBg: {
    backgroundColor: '#ffffff',
  },
  darkBg: {
    backgroundColor: '#121212',
  },
});