import React, {useState} from "react";
import { View, Text, TextInput, Button, Alert } from 'react-native';
import {styles} from './styles';
import axios from 'axios';

const AddStaff=({navigation})=>{
  const [staff, setStaff] = useState({
    id: '',
    name: '',
    Phone: '',
    department: '',
    Address: ''
  });

  const handleChange = (key, value) => {
    setStaff({ ...staff, [key]: value });
  };


  const handleSubmit = () => {
    if (!staff.id || !staff.name || !staff.Phone || !staff.department || !staff.Address) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    axios.post('http://192.168.1.135:3000/staff', staff)
      .then(response => {
        Alert.alert('Success', 'Staff member added successfully');        
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Something went wrong');
      });    
  
  
  //navigation.goBack(); // Go back to StaffListScreen after saving
  };
  return (
      <View style={styles.container}>      
      <TextInput        
        style={styles.input}
        placeholder="ID"
        onChangeText={text => handleChange('id', text)}
        value={staff.id}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => handleChange('name', text)}
        value={staff.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"        
        onChangeText={text => handleChange('Phone', text)}
        value={staff.Phone}
      />
      <TextInput
        style={styles.input}
        placeholder="Department"       
        onChangeText={text => handleChange('department', text)}
        value={staff.department}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={text => handleChange('Address', text)}
        value={staff.Address}
      />
     <Text style={{margin:10}}><Button title="Add Staff" onPress={handleSubmit}/> <Button title="Cancel Changes" onPress={()=>navigation.goBack()}/></Text> 
      
    </View>
    );  
};  
  
export default AddStaff;

