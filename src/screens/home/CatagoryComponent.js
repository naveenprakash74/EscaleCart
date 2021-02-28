import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  menuIcon,
  profileIcon,
  searchIcon,
  rightArrowIcon,
  cartIcon,
} from '../../images/index';
import {colors} from '../../theme/colors';
import {catagoryData} from '../../dummyData';
import {shadow_5, shadow_8} from '../../theme/shadows';
const {blueColor, whiteBg} = colors;
export class CatagoryComponent extends Component {
    renderItem = ({item, index}) => {
      const {_id, name, icon} = item;
      return (
        <TouchableOpacity
          key={`${index}_${_id}`}
          style={{
            minHeight: 110,
            minWidth: 150,
            backgroundColor: whiteBg,
            margin: 8,
            marginLeft: index === 0 ? 0 : 8,
            padding: 12,
            borderRadius: 8,
            ...shadow_8,
          }}>
          <View style={{flex: 1}}>
            <Image
              source={icon}
              style={{height: 32, width: 32, resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>{name}</Text>
            <Image
              source={rightArrowIcon}
              style={{height: 16, width: 16, resizeMode: 'contain'}}
            />
          </View>
        </TouchableOpacity>
      );
    };
    render() {
      return (
        <View>
          <View style={{paddingBottom: 20, }}>
            <Text style={{}}>Category</Text>
          </View>
          <FlatList
            data={catagoryData}
            renderItem={this.renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    }
  }