import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#f9f9f9',
  },
  darkContainer: {
    backgroundColor: '#1e1e1e',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'between',
    width: '100%',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  lightRow: {
    backgroundColor: '#ffffff',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  darkRow: {
    backgroundColor: '#303030',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    flex: 1, 
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#ffffff',
  },
});


export default styles;