import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

class Account extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  render() {
    return (
      <View>
        <Text>Account</Text>
        <Button title="跳转详情" onPress={this.onPress} />
      </View>
    );
  }
}

export default Account;
