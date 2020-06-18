import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';

interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

class Detail extends React.Component<IProps> {
  render() {
    const {route} = this.props;
    return (
      <View>
        <Text>Home</Text>
        <Text>{route.params.id}</Text>
      </View>
    );
  }
}

export default Detail;
