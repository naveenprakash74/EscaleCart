import React, {Component} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {yellowStarIcon} from '../../images/index';
import {colors} from '../../theme/colors';
import {ItemsData} from '../../dummyData';
import {shadow_5, shadow_8} from '../../theme/shadows';
const {blueColor, whiteBg} = colors;
export class HoteList extends Component {
  renderItem = ({item, index, ...rest}) => {
    const {name, icon, desc} = item;
    return (
      <View
        key={index}
        style={{
          backgroundColor: 'yellow',
          width: '47%',
          height: 258,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          overflow: 'hidden',
          marginBottom: 8,
        }}>
        <Image
          source={{uri: icon, resizeMode: 'contain'}}
          style={{
            borderRadius: 12,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            position: 'absolute',
          }}
        />
        <View
          style={{
            alignSelf: 'flex-end',
            maxHeight: 100,
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.31)',
            padding: 12,
          }}>
          <Text style={{color: whiteBg, fontSize: 18}}>{name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: whiteBg}}>{desc}</Text>
            <Image source={yellowStarIcon} style={{height: 12, width: 12}} />
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View>
        <View style={{paddingTop: 8, paddingBottom: 20}}>
          <Text style={{}}>Hot List</Text>
        </View>
        <FlatList
          data={ItemsData}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 200}}
          columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
        />
      </View>
    );
  }
}

export default HoteList;
