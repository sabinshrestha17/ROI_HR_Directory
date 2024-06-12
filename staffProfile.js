import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import {styles} from './styles';

 const StaffProfile = ({ route }) => {
  const { staff } = route.params; // Retrieve staff ID from navigation parameters

  return (
    <View style={styles.container}>         
      <Text style={styles.staffName}>Name:    {staff.name}</Text>
      <Text style={styles.staffName}>Phone:    {staff.Phone}</Text>
      <Text style={styles.staffName}>Department:   {staff.department}</Text>
      <Text style={styles.staffName}>Address:   {staff.Address}</Text>  
    </View>
  );
};
 export default StaffProfile;

 