import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#303030',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#f1c40f',
  },
  completedCard: {
    borderLeftColor: '#b5cf82',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  statusBadge: {
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#aaaaaa',
    fontSize: 12,
  },
});

export default styles;

