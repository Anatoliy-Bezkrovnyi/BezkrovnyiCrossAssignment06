import { StyleSheet } from 'react-native';


const createStyles = (width, height) => {
  return StyleSheet.create({
      card: {
        flexDirection: 'column',        
        justifyContent: 'space-between',
        backgroundColor: '#303030',
        borderRadius: 14,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: width * 0.9,
        height: height * 0.65,
        alignSelf: 'center',
      },
      
      summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
      },
      
      agencySummary: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '48%',
      },
      
      agencyTitle: {
        flexDirection: 'row',
        gap: 10,
    },      
  });
};

export default createStyles;