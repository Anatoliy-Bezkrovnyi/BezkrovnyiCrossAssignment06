import axios from 'axios';

export const fetchTasks = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');   
    return response.data.slice(0, 20); 
  } catch (error) {
    console.error('Помилка при виконанні запиту на сервер:', error);
    throw error; 
  }
};