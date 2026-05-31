import { View, Text } from 'react-native';
import styles from './Task.style';

export const Task = ({ task }) => {
  return (
    <View style={[styles.card, task.completed && styles.completedCard]}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>
          {task.completed ? 'Виконано  ' : 'В процесі ⏳'}
        </Text>
      </View>
    </View>
  );
};