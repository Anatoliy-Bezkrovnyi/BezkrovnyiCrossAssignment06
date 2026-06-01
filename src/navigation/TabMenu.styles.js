import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1e1e1e', 
    borderTopWidth: 0,          
    height: 65,                 
    paddingBottom: 8,           
    paddingTop: 8,              
  },
  tabBarLabel: {
    fontSize: 12,               
    fontWeight: '500',
  },
  header: {
    backgroundColor: '#303030', 
    shadowColor: 'transparent', 
    elevation: 0,               
  },
});

export default styles;