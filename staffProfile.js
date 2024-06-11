import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import {styles} from './styles';
import {StaffData}  from './StaffListScreen'

 const StaffProfile = ({ route }) => {
  const { staffId } = route.params; // Retrieve staff ID from navigation parameters

  // Replace with other logic to find staff details based on ID
  // (potentially fetching from CSV or another source)
  const selectedStaff = StaffData.find(staff => staff.id === staffId);

  if (!selectedStaff) {
    return (
      <View style={styles.container}>
        <Text>Staff member not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>   
         
      <Text style={styles.staffName}>Name:    {selectedStaff.name}</Text>
      <Text style={styles.staffName}>Phone:    {selectedStaff.Phone}</Text>
      <Text style={styles.staffName}>Department:    {selectedStaff.department}</Text>
      <Text style={styles.staffName}>Address:    {selectedStaff.Address}</Text>
     
    </View>
  );
};
 export default StaffProfile;
