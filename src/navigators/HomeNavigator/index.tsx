import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StoreScreen, ProfileScreen } from '../../screens';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={'Store'}>
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
