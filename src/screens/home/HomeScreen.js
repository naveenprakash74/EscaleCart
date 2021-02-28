import React, {Component} from 'react';
import {View} from 'react-native';
import {catagoryData} from '../../dummyData';
import {CatagoryComponent} from './CatagoryComponent';
import {Header} from './HeaderComponent';
import HoteList from './HoteList';

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header {...this.props} />
        <View style={{padding: 20, flex: 1}}>
          <CatagoryComponent {...this.props} />
          <HoteList {...this.props} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
