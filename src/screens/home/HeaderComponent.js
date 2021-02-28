import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {menuIcon, searchIcon, cartIcon} from '../../images/index';
import {colors} from '../../theme/colors';
import {shadow_5} from '../../theme/shadows';
const {blueColor, whiteBg} = colors;
export const Header = (props) => {
  const {navigation} = props;
  const imageStyle = {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: blueColor,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image source={menuIcon} style={imageStyle} />
        </TouchableOpacity>
        <View style={{flex: 1, paddingLeft: 24, paddingRight: 24}}>
          <Text style={{fontSize: 24, color: whiteBg}}>Discover</Text>
        </View>
        <TouchableOpacity>
          <Image source={cartIcon} style={imageStyle} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 12,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 4,
          backgroundColor: whiteBg,
          padding: 12,
          paddingLeft: 12,
          paddingRight: 12,
          ...shadow_5,
        }}>
        <Image
          source={searchIcon}
          style={{height: 16, width: 16, resizeMode: 'contain'}}
        />
        <TextInput
          style={{backgroundColor: 'transparent', padding: 0, paddingLeft: 12}}
          placeholder="What are you looking for ?"
        />
      </View>
    </View>
  );
};
