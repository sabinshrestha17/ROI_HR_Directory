import React from 'react';
import { FlatList, View, Text, Button} from 'react-native';
import {styles} from './styles';


export const StaffData = [
  { id: 1, name: 'John Smith', Phone: '02 9988 2211 ', department: 'ICT', Address: '1 Code Lane, Javaville, NSW, 0100, Australia' },
  { id: 2, name: 'Sue White', Phone: '03 8899 2255', department: 'Finance', Address: '16 Bit Way, Byte Cove, 1101, QLD, Australia' },
  { id: 3, name: 'Suasan Smith', Phone: '02 8899 2255', department: 'Finance', Address: '16 Shine Way, Lane Cove, 1101, VIC, Australia' },
  { id: 4, name: 'Bob O Bits', Phone: '05 7788 2255', department: 'Marketing', Address: '8 Silicon Road, Cloud Hills, VIC 1001, Australia' },
  { id: 5, name: 'Mary Blue', Phone: '06 4455 9988', department: 'Finance', Address: '4 Processor Boulevard, Appleston, NT, 1010, Australia' },
  { id: 6, name: 'Mick Green', Phone: '02 9988 1122', department: 'Marketing', Address: '700 Bandwidth Street, Bufferland, NSW, 0110, Australia' },
  { id: 7, name: 'Luke Diff', Phone: '02 0422 1122', department: 'Marketing', Address: '100 Carpenter Street, Colyton, NSW, 1110, Australia' }
];


const StaffDirectory = ({navigation}) => {
    const renderItem = ({item }) => (
      <View style={styles.staffItem}>
        <Text style={styles.staffName}s>{item.name}: <Text style={styles.staffDept}>({item.department})</Text></Text>
        <Button title="View Profile" onPress={() => handleViewProfile(item.id)} />        
      </View>
    );

    const handleViewProfile = (staffId) => {
      navigation.navigate('Staff Profile', { staffId }); // Pass staff ID as a parameter
    };
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

