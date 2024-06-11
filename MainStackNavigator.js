import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import StaffDirectory from './StaffListScreen';
import AddStaff from './AddStaff';
import StaffProfile from './staffProfile';
import { styles } from './styles';
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
   
    <NavigationContainer style={styles.navigationBar}>       
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: { backgroundColor: 'red' }}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ROI Staff Contact Directory" component={StaffDirectory} />
        <Stack.Screen name= "AddStaff" component={AddStaff}/>
        <Stack.Screen name="Staff Profile" component={StaffProfile}/>
      </Stack.Navigator>     
    </NavigationContainer>
    
  );
};

export default MainStackNavigator;