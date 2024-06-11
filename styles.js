import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,  
      alignContent: 'center',
      backgroundColor: 'orange',      
      paddingTop: 140
    },
    navigationBar:{
      backgroundColor: 'red',
    },
      
    innerBox2:{
      width: '50%', // 80% of the parent container's width
      height: 90,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems:'center',
      marginBottom: 20, 
      marginLeft:'25%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    staffItem: {
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 10,
    },
    staffName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    staffDept:{
      fontSize:12,
      fontStyle:'italic',
      fontWeight:'normal',
    },
    input:{
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
    }
  });
module.exports = {styles};