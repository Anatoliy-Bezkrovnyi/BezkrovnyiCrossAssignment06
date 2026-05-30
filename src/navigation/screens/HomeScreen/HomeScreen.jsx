import { ScrollView } from 'react-native';
import AgencyCard from '../../../components/AgencyCard/AgencyCard';
import agenciesData from '../../../data/agencyProvider'; 
import styles from './HomeScreen.styles';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {agenciesData.map((item) => (
        <AgencyCard 
          key={item.agencyID} 
          agency={item}
          onPress={() => navigation.navigate('OrderDetailsScreen', { id: item.agencyID })}
          onBackPress={() => navigation.goBack()}
        />
      ))}
    </ScrollView>
  );
}