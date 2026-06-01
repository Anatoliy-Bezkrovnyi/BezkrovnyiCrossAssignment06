import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightBg: { backgroundColor: '#f9f9f9' },
  darkBg: { backgroundColor: '#121212' },
  
  listContent: {
    padding: 16,
    paddingBottom: 90, 
  },
  separator: {
    height: 12,
  },
  
  messageCard: {
    padding: 16,
    borderRadius: 12,
    position: 'relative', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  lightCard: {
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  darkCard: {
    backgroundColor: '#303030',
  },
  
  messageContent: {
    flex: 1,
    paddingRight: 30, 
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  lightText: { color: '#333333' },
  darkText: { color: '#ffffff' },
  
  timeText: {
    fontSize: 11,
    color: '#8e8e93',
    marginTop: 6,
  },
  
  
  deleteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
  },
  
  
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#b5cf82', // Твій фірмовий зелений колір
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Тінь для Android
    shadowColor: '#000', // Тінь для iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default styles;