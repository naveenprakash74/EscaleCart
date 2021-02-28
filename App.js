/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text> textInComponent </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
