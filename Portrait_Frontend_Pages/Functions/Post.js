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
import { Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

  const Post =(props) => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    var picWidth = 0;
    var picHeight = 0;
    const {width, height} = Image.resolveAssetSource(props.file ? props.PostFilePath : require('../../assets/me2.jpg'));

    const getImageDimensionsHeight = () => {
        picWidth = (screenWidth * 1);
        picHeight = ((height * picWidth) / (width));
        if(picHeight > 500){picHeight = 500};
        return(picHeight);
      }
    const styles = StyleSheet.create({
      AnonymousImage: {
        width: 22.5,
        height: 22.5, 
        borderRadius:5.5,
        bottom: 0,  
        borderWidth: 1.75, 
        borderColor: props.userColor,
        tintColor: props.userColor,
      },
      NormalImage: {
          width: 22.5,
          height: 22.5, 
          borderRadius:5.5, 
          borderWidth: 1.75, 
          bottom: 0, 
          borderColor: props.userColor
      },
      WithFile:{
        width: '100%', 
        height: getImageDimensionsHeight(),
        borderRadius: 10, 
        top: 10, 
        right: 2.5,
        resizeMode: 'cover',
        maxheight: 500,
      },
      WithFileNoText:{
        width: '100%', 
        height: getImageDimensionsHeight(),
        borderRadius: 10, 
        top: 10, 
        right: 2.5,
        resizeMode: 'cover',
        maxheight: 500,
      },
      WithoutFile:{
        width: 0, 
        height: 0,
      },
      WithText:{
        width: '92.5%', 
        left: 4,
        top: 3.5,
        fontSize: 15,
        fontWeight: '500',
        opacity: .825,
        color: '#ffffff',
        backgroundColor: 'transparent'
      },
      WithoutText:{
        height: 0,
        width: 0,
      },
      Margin:{ 
        height: 1,
      },
      Sep:{ 
        height: 14,
      },
      MarginNoText:{ 
        height: 10,
      },
      WithoutMargin:{
        height: 0,
      }
    })
    const navigation = useNavigation();;

    return(
      <View style={{alignItems: 'center', width: '100%', left: 0}}>

      <View style= {{flexDirection: 'row', top: 7.5, justifyContent: 'space-between', right:7.5, width: '95%'}}>
      <View style = {{ flexDirection : 'row', left: 1}}>

      <TouchableOpacity onPress={()=>navigation.navigate('Portrait')} style={{
      left: 6.5, flexDirection: 'row', backgroundColor: '#000000', width: '42.5%'}}>
      
      <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
      <Image style={[props.Anonymous ? styles.AnonymousImage : styles.NormalImage]} source={props.userImagePath}/>
      <View style={{bottom: 3, right: 1.5}}>
      <Text style={{color: props.userColor, fontSize: 14, left: 10,fontWeight: 'bold', overflow: 'hidden', height: 22.5, top: 4.5}}>{props.userName}</Text>
      </View>
      </View>
      </TouchableOpacity>
      <View style={{width: 7.5}}/>

      <View style={{width: 17.5, height: 2.75, borderRadius: 10, left: 8, top: 11.25, backgroundColor: props.userColor}}/>
      <View style={{width: 7.5, height: 2.75, borderRadius: 10, left: 13, top: 11.25, backgroundColor: props.portraitColor}}/>

      <TouchableOpacity onPress={()=>navigation.navigate('Portrait')} style={{
       flexDirection: 'row', backgroundColor:'#000000', left: 32.5, width: '52.5%', top: 1}}>
      <View style={{flexDirection: 'row', width: '100%', top: 1}}>
      <Image style={{width: 22.5, height: 22.5, borderRadius:5.5, bottom: 1, borderWidth: 1.75, borderColor: props.portraitColor}} source={props.portraitImagePath}/>
      <View style={{ width: '72%', bottom: 4, backgroundColor: 'transparent', right: 1.5}}>
      <Text style={{color: props.portraitColor, fontSize: 14, left: 10,fontWeight: 'bold', width: '100%', overflow: 'hidden', height: 22.5, top: 4}}>{props.portraitName}</Text>
      </View>
      <View style={{width: 10}}/>
      </View>
      </TouchableOpacity>
      
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image style={{width: 5, height: 22.5, right: 12.5, top: .5, tintColor: '#ffffff', opacity: .4}} source={require('../../assets/OptionsIcon.png')}/>
      </View>

      </View>
      <View style={{height: 10}}/>


      <TouchableOpacity activeOpacity={.7}  style={{width: '98%', bottom: 2.5, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0)'}} onPress={()=>navigation.navigate('PostPage')}>

      <View style={{width: '100%', right: 2, bottom: 14}}>
      <View style={{height: 0}}/>
      <View style={{width: '99%', left: 5, borderLeftColor: props.userColor, flexDirection: 'row'}}>
      <View style={{width: '100%'}}>
      <View style={{height: 18}}/>
      <TouchableOpacity activeOpacity={.7}  style={{width: '100%', bottom: 2.5, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0)'}} onPress={()=>navigation.navigate('MediaPage')}>
      <Image style={[props.file ? [props.hasText? styles.WithFile : styles.WithFileNoText] : styles.WithoutFile]} source={props.PostFilePath}/>
      </TouchableOpacity>
      <View style={[props.hasText ? props.file ?  styles.Sep : styles.WithoutMargin : styles.WithoutMargin]}/>
      <Text style={[props.hasText ? styles.WithText : styles.WithoutText]}>
      {props.postTextContent}
      </Text>
      <View style={[props.file ? [props.hasText? styles.Margin : styles.MarginNoText] : styles.WithoutMargin]}/>


      </View> 
      </View>


      <View style={{height: 5}}/>

      <View style={{flexDirection: 'row', bottom: 0, left: 9, height: 16, width: '90%', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', width: '55.5%', right: 0}}>

      <View style={{width: '45%', flexDirection: 'row', left: 0, opacity: .45}}>
      <Image style={{width: 21, height: 21, right: 0, top: 6.5, tintColor: '#ffffff'}}source={require('../../assets/HeartIconNew.png')}/>
      <Text style={{top: 8, left: 10, fontSize: 12,color: '#ffffff', fontWeight: 'bold'}}>{props.likes} Likes</Text>
      </View>

      <View style={{width: '10%', flexDirection: 'row'}}>
      
      </View>

      <View style={{width: '40%', flexDirection: 'row', right: 0, opacity: .45}}>
      <Image style={{width: 18.5, height: 18.5, right: 0, top: 7.5, tintColor: '#ffffff'}}source={require('../../assets/CommentIconNew.png')}/>
      <Text style={{top: 8, left: 10, fontSize: 12,color: '#ffffff', fontWeight: 'bold'}}>{props.comments} Comments</Text>
      </View>
      </View>

      <View style={{width: '51%', flexDirection: 'row', justifyContent: 'flex-end', opacity: .45}}>
      <Text style={{fontSize: 12, color: '#ffffff', left: 0, top: 8, fontWeight: 'bold'}}>{props.timeSince}</Text>
      </View>
      </View>

      </View>
      </TouchableOpacity>
      <View style={{height: 2, backgroundColor: 'transparent'}}/>
      <View style={{height: .75, backgroundColor: '#ffffff', width: '100%', opacity: .2, top: 1.5, right: 0, borderRadius: 0}}/>
      <View style={{height: 3.5, backgroundColor: 'transparent'}}/>

      </View>

        
    )
  }


  export default Post;