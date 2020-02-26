import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './src/navigators';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;
