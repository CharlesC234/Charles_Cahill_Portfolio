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


    // function for portraits displayed on recents scrollfeed
//props: left, color, imagePath, name
const Recents = (props) => {
    const navigation = useNavigation();
    return(
      <TouchableOpacity style={{width: 75, height: 95, alignItems: 'center', borderRadius: 0, top: 0, left: props.left, backgroundColor: '#000000', overflow: 'hidden'}} onPress={()=>navigation.navigate('Portrait')}>
        <Image style={{width: 70, height: 70, borderRadius: 14, top: 0, left: 0, borderWidth: 3.5, borderColor: props.color}} source={props.imagePath}/>
        <Text style={{color: '#ffffff', fontSize: 12, left: 0,fontWeight: 'bold', top: 3.5, opacity: .65, textAlign: 'center'}}>{props.name}</Text>
        </TouchableOpacity>
    )
  }

  

  export default Recents;