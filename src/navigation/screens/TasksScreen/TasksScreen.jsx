import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { fetchTasks } from '../../../data/api'; 
import { Task } from '../../../components/Task/Task';
import styles from './TasksScreen.styles';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);
  
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#b5cf82" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Не вдалося завантажити завдання </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}        
        keyExtractor={(item) => item.id.toString()}        
        renderItem={({ item }) => <Task task={item} />}        
        ItemSeparatorComponent={() => <View style={styles.separator} />}        
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

export default TasksScreen;