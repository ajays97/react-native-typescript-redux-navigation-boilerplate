import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './src/navigators';

import { NavigationTheme } from './src/theme';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer theme={NavigationTheme}>
          <HomeNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;
