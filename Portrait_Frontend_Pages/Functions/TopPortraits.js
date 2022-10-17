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

import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


//function for posts with only text, no files
//props: bottom, portraitColor, portraitName, portraitImagePath, userColor, Anonymous?, userName, 
//userImagePath, timeSince, postTextContent, likes, dislikes, comments
const TopPortraits =(props, {navigation}) => {
    const styles = StyleSheet.create({
     TopThree: {
         width: '90%',
         height: 75,
         top: 5,
         flexDirection: 'row',
     },
     RunnerUp: {
        width: '97.5%',
        height: 75,
        top: 0,
        flexDirection: 'row',
     },
     TopThreeView: {
        width: '85%',
        right: 0,
        top: 2.5,
     },
     RunnerUpView: {
        width: '100%',
        right: 0,
        top: 2.5,
     }
    })
    return(
        <TouchableOpacity style={{width: '95%', height: 75, borderRadius: 0, top: 5, flexDirection: 'row', right: 5, zIndex: 2}} onPress={()=>navigation.navigate('Portrait')}>
        <Image style={{width: 75, height: 75, borderRadius: 14, top: 7.5, left: 0, borderWidth: 3.5, borderColor: props.Color}} source={props.ImageSource}/>
        <View style={[props.Position < 4 ? styles.TopThreeView : styles.RunnerUpView]}>
        <View style={{width: '90%', flexDirection: 'row', left: 9.5}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: props.Color, top: 7.5, width: 175}}>{props.Name}</Text>
        <Text style={{fontSize: 12, color: '#ffffff', top: 12.5, opacity: .60, width: 150, left: '50%'}}>@{props.UserName}</Text>
        </View>
        <Text style={{fontSize: 14, color: '#ffffff', left: 10, top: 10, width: '80%', height: 35}}>{props.Bio}</Text>
        </View>
        </TouchableOpacity>
    )
  }


  export default TopPortraits;