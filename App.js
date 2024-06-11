import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

import MainStackNavigator from './MainStackNavigator';


export default function App() {
  return (
    <View style={styles.container}>
    <MainStackNavigator/>
      
    </View>
  );
}

