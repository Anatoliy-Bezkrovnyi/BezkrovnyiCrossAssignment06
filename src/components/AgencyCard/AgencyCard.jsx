import { View, useWindowDimensions } from "react-native";
import createStyles from "./AgencyCard.styles";
import { AgencyRating } from "./AgencyRating/AgencyRating";
import { AgencyAddress } from "./AgencyAddress/AgencyAddress";
// import { BackButton } from "./BackButton/BackButton";
import { AgencyImage } from "./AgencyImage/AgencyImage";
import { AgencyTitle } from "./AgencyTitle/AgencyTitle";  
import { AgencyServicesList } from "./AgencyServicesList/AgencyServicesList";
import { CustomButton } from "../CustomButton/CustomButton";


export const AgencyCard = ({ agency, onPress, onBackPress }) => {
  const { width, height } = useWindowDimensions();  
  const styles = createStyles(width, height);

  if (!agency) return null;

  return (
    <View style={styles.card}>
      
      {/* <BackButton title="Назад" onPress={onBackPress} /> */}
      
      <View style={styles.summary}>
        
        <AgencyImage source={agency.image} />
        
        <View style={styles.agencySummary}>
          <View style={styles.agencyTitle}>
            
            <AgencyTitle title={agency.title} />
            <AgencyRating rating={agency.rating.toString()} />
          </View>
          
          
          <AgencyAddress 
            region={agency.address.region} 
            district={agency.address.district} 
            town={agency.address.town} 
            street={agency.address.street} 
          />
        </View>        
      </View>
      
      
      <AgencyServicesList description={agency.description} />      
      
      <CustomButton title="Зробити замовлення" onPress={onPress} />   
    </View>
  );
};

export default AgencyCard;