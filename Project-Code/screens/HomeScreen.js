import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
  StreamApp,
  FlatFeed,
  Activity,
  LikeButton,
  StatusUpdateForm,
} from 'expo-activity-feed';

import MenuButton from '../components/MenuButton'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
        <MenuButton navigation={this.props.navigation} />
        <StreamApp
          apiKey="25r4jbs5s9jg"
          appId="50193"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.fFBcOETlSM0KXy3d9MYYu3Kyzuw-wNtSoIQ4V8Lyi8k"
         >
         <FlatFeed Activity={CustomActivity} notify />
         <StatusUpdateForm feedGroup="timeline" />
        </StreamApp>
      </SafeAreaView>
      
    );
  }
}

const CustomActivity = (props) => {
  return (
    <Activity
      {...props}
      Footer={
        <LikeButton {...props} />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});
