import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {styles} from './styles';
import { StaffData } from "./StaffListScreen";

const AddStaff=({navigation})=>{
  const [id, setId] = useState('');
  const [name, setName]=useState('');
  const [Phone, setPhone]=useState('');
  const [department, setDepartment]=useState('');
  const [Address, setAddress]=useState('');

  const handleSaveStaff = () => {
      const newStaff = {
      id,
      name,
      Phone,
      department,
      Address,
      };

  StaffData.push(newStaff); // Update StaffData  
  //Clear the form after saving
  setId('');
  setName('');
  setPhone('');
  setDepartment('');
  setAddress('');
  navigation.goBack(); // Go back to StaffListScreen after saving
  };
  return (
      <View style={styles.container}>
      
      <TextInput        
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={Phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        value={department}
        onChangeText={setDepartment}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={Address}
        onChangeText={setAddress}
      />
     <Text style={{margin:10}}><Button title="Save Changes" onPress={handleSaveStaff}/> <Button title="Cancel Changes" onPress={()=>navigation.goBack()}/></Text> 
      
    </View>
    );  
};  
  
export default AddStaff;

