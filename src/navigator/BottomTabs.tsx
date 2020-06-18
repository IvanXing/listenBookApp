import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

class BottomTabs extends React.Component {
  render() {
    return (
      // <NavigationContainer>
      <Tab.Navigator tabBarOptions={{activeTintColor: '#e84e40'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: '首页'}}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{tabBarLabel: '我听'}}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{tabBarLabel: '发现'}}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{tabBarLabel: '我的'}}
        />
      </Tab.Navigator>
      // </NavigationContainer>
    );
  }
}

export default BottomTabs;
