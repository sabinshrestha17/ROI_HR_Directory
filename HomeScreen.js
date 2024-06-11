import React from 'react';
import { View, Button } from 'react-native';
import {styles} from './styles';

const HomeScreen = ({ navigation }) => {  
  return (
    <View style={styles.container}>
    
      <View style={styles.innerBox2}>
        <Button 
          title="STAFF DIRECTORY"
          onPress={() => navigation.navigate('ROI Staff Contact Directory')}
        />
      </View>

      <View style={styles.innerBox2}>   
        <Button
          title="ADD STAFF"
          onPress ={()=>navigation.navigate('AddStaff')}
        />
      </View>
      
    </View>
  );
};

export default HomeScreen;
