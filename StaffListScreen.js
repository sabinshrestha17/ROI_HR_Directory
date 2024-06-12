import React, {useEffect, useState } from 'react';
import { FlatList, View, Text, Button} from 'react-native';
import {styles} from './styles';
import axios from 'axios';


const StaffDirectory = ({navigation}) => {
    const [StaffData, setStaffData] = useState([]);
    useEffect(() => {
      axios.get('http://192.168.1.135:3000/staff')
        .then(response => {
          setStaffData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    const renderItem = ({item }) => (
      <View style={styles.staffItem}>
        <Text style={styles.staffName}s>{item.name}: <Text style={styles.staffDept}>({item.department})</Text></Text>
        <Button title="View Profile" onPress={() => navigation.navigate('Staff Profile', { staff: item })}  />              
      </View>
    );   
    return (     
      <View style={styles.container}>                   
        <FlatList
          data={StaffData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} // Extract a unique key for each item
        />        
        </View>      
    );
  };

export default StaffDirectory;
