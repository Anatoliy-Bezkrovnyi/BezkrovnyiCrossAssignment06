
import agenciesData from '../../../data/agencyProvider'; 
import { useWindowDimensions } from 'react-native';
import { Image, View, Text } from 'react-native';
import createStyles from "./OrderDetailsScreen.styles";

const OrderDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;  
  const { width, height } = useWindowDimensions();  
  const styles = createStyles(width, height);

  const currentAgency = agenciesData.find(agency => agency.agencyID === id);

  if (!currentAgency) {
    return <View><Text>Агенцію не знайдено</Text></View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Image source={currentAgency.image} style={styles.image} />
        <Text style={styles.title}>{currentAgency.title}</Text>  
      </View>       
      <Text style={styles.dummy}>Тут у нас обов'язково буде список сервісів, які пропонує агенство</Text>
    </View>
    
  );
}
export default OrderDetailsScreen;
