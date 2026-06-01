import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, deleteMessage } from '../../../context/redux/messagesSlice';
import useTheme from '../../../context/themeContext/useTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './MessagesScreen.styles';

export default function MessagesScreen() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  
  const messages = useSelector((state) => state.messages.list);
  const dispatch = useDispatch();

  
  const templates = [
    "Нове сповіщення від агенції! 🔔",
    "Замовлення успішно прийнято в роботу. 📝",
    "Менеджер відповів на ваш запит. ✉️",
    "Тема застосунку успішно оновлена! 🎨"
  ];

  const handleAddMessage = () => {
    const randomText = templates[Math.floor(Math.random() * templates.length)];
    dispatch(addMessage(randomText));
  };

  return (
    <View style={[styles.container, isDark ? styles.darkBg : styles.lightBg]}>
      
      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={[styles.messageCard, isDark ? styles.darkCard : styles.lightCard]}>
            
            
            <View style={styles.messageContent}>
              <Text style={[styles.messageText, isDark ? styles.darkText : styles.lightText]}>
                {item.text}
              </Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>

            
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => dispatch(deleteMessage(item.id))}
            >
              <Ionicons name="trash-outline" size={18} color="#ff6b6b" />
            </TouchableOpacity>

          </View>
        )}
      />

      
      <TouchableOpacity 
        style={styles.fab} 
        onPress={handleAddMessage}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={30} color="#ffffff" />
      </TouchableOpacity>

    </View>
  );
}