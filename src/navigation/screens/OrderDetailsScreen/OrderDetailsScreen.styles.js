import { StyleSheet } from 'react-native';

const createStyles = (width, height) => StyleSheet.create({
  container: { 
    flexDirection: 'column',
    gap: 50,
    flex: 1,
    backgroundColor: '#1e1e1e',
    width: width * 0.9,
    height: height * 0.65,
    paddingVertical: 20,
    paddingHorizontal: 20, 
    alignSelf: 'center',
  },

  summary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '30%',
  }, 

  image: {         
        resizeMode: 'stretch',
        width: '49%',
        height: '100%',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },

  dummy: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',   
  },
});

export default createStyles;