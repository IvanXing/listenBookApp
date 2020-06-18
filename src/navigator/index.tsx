import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
// import Home from '@/pages/Home';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';

export type RootStackParamList = {
  BottomTabs: undefined;
  Detail: {id: Number};
};

let Stack = createStackNavigator<RootStackParamList>();
// Stack {Navigator, Screen}  createStackNavigator返回一个对象  外层包裹对象

// 路由传递参数
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float" //刷新标题栏位置 none float screen
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, //卡片滑动效果
            gestureEnabled: true, // 手势效果
            gestureDirection: 'horizontal', // 手势水平方向
          }}>
          <Stack.Screen
            options={{headerTitleAlign: 'center', headerTitle: '首页'}}
            name="BottomTabs"
            component={BottomTabs}
          />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
