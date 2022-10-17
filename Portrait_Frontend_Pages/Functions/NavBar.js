import React, { Component, Fragment, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);

import { useNavigation } from '@react-navigation/native';

const NavBar =(props) => {
  const styles = StyleSheet.create({
    OnPage: {
      width: 50, 
      height: 50, 
      alignItems: 'center', 
      zIndex: 2,
      elevation:2
    },
    OffPage: {
      width: 50, 
      height: 50, 
      alignItems: 'center', 
      opacity: .60,
      zIndex: 2,
      elevation: 2
    },
    HomeDot:{
      width: 12.5, 
      height: 3, 
      backgroundColor: '#57d9a3', 
      top: 2.5, 
      right: '29.6%',
      elevation: 0,
      borderRadius: 10
    },
    ExploreDot:{
      width: 12.5, 
      height: 3, 
      backgroundColor: '#ffe380', 
      top: 2.5, 
      elevation: 0,
      borderRadius: 10
    },
    ProfileDot:{
      width: 12.5, 
      height: 3, 
      backgroundColor: '#bb86fc', 
      top: 2.5, 
      left: '29.6%', 
      elevation: 0,
      borderRadius: 10
    },
  })
    const navigation = useNavigation();;
    return (
      <View style={{height: 42.5, alignItems: 'center', backgroundColor: '#000000'}}>
      <View style={{width: '100%', height: 35, top: 2.5, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={[props.Home ? styles.OnPage : styles.OffPage]} onPress={()=>navigation.navigate('Home')}>
      <Image style={{width: 72.5, height: 72.5, tintColor: '#57d9a3', bottom: 15, right: 7.5}}source={require('../../assets/HomeIcon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={[props.Explore ? styles.OnPage : styles.OffPage]} onPress={()=>navigation.navigate('Explore')}>
      <Image style={{width: 55, height: 55, tintColor: '#ffe380', bottom: 4}}source={require('../../assets/ExploreIcon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={[props.Profile ? styles.OnPage : styles.OffPage]} onPress={()=> navigation.navigate('Profile')}>
      <Image style={{width: 37, height: 37, top: 4, tintColor: '#bb86fc', left: 7.5}}source={require('../../assets/ProfileIcon3.png')}/>
      </TouchableOpacity>
      </View>
      <View style={[props.Home ? styles.HomeDot : [props.Explore ? styles.ExploreDot : [ props.Profile ? styles.ProfileDot : null]]]}/>
      </View>
    )
  }

  export default NavBar; 