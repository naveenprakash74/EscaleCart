/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, View, Text} from 'react-native';

import RootNavigator from './src/RootNavigator';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
          <RootNavigator />
      </SafeAreaView>
    );
  }
}

export default App;
