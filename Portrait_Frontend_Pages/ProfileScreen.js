import React, { Component, Fragment, useState, useEffect, memo, useRef } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import Swiper from 'react-native-swiper';
import Post from './Functions/Post';
import NavBar from './Functions/NavBar';
import { useNavigation } from '@react-navigation/native';
import { getProfile } from './SignInSignUp/Client';


const portraitColor = "#79e2f2";
const name = "Charles Cahill";
const username = "Uzi_Vert420";
const bio = "We began the experiment by setting up our research area. We started by setting up the track and putting one of the masses onto the spring-powered cart.";
const likes = 20;
const dislikes = 0;
const views = 100;
const posts = 6;
const followers = 50; 
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const DATA = [
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor: portraitColor,
    Anonymous:false,
    userName:"Lil Uzi",
    userImagePath: require('../assets/uzivert.jpg'),
    timeSince:"1 day ago",
    hasText: false,
    file: true,
    PostFilePath: require('../assets/me1.jpg'),
    likes:"1",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:"#FF7597",
    Anonymous:false,
    userName:"Jay Shetter",
    userImagePath: require('../assets/10.jpg'),
    timeSince:"1 day ago",
    postTextContent:"We began the experiment by setting up our research area. We started by setting up the track and putting one of the masses onto the spring-powered cart.",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"1 day ago",
    postTextContent:"We began the experiment by setting up our area and added are",
    hasText: true,
    file: true,
    PostFilePath: require('../assets/uzivert.jpg'),
    likes:"20",
    dislikes:"2",
    comments:"5",
  },

];

const getData = async() =>{
  var mydata;
     await getProfile()
    .then((response) => response)
    .then((response) => {
      mydata = response;
      console.log("profile function data test: " + mydata._id);
    })
    return mydata;
}




const ProfileScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);


  var stickyFunction;
  var opacity1 = 1;
  var opacity2 = .60;
  var opacity3 = .60;
  var opacity4 = .60;
  var barWidth = 47.5;
  const swiperRef = useRef(null);

  const StickyHead = memo(({func}) => {
    const [position, setPosition] = useState(0);
    var barLeftValue = screenWidth * .36;
    var barColor = "#57d9a3";
    useEffect(() => {
      func(setPosition);
    }, [])
    console.log(position);
    if(position == 0){
      barLeftValue = screenWidth * .045;
      opacity1 = 1; opacity2 = .40; opacity3 = .40; opacity4 = .40;
      barWidth = 47.5; barColor = "#57d9a3";
    }else if(position == 1){
      barLeftValue = screenWidth * .4525;
      opacity1 = .40; opacity2 = 1; opacity3 = .40; opacity4 = .40;
      barWidth = 47.5; barColor = "#79e2f2";
    }else if(position == 2){
      barLeftValue = screenWidth * .625;
      opacity1 = .40; opacity2 = .40; opacity3 = 1; opacity4 = .40;
      barWidth = 40; barColor = "#f686fc";
    }else{ 
      barLeftValue = screenWidth * .7825
      opacity1 = .40; opacity2 = .40; opacity3 = .40; opacity4 = 1;
      barWidth = 75; barColor= "#bb86fc";
    };
    const setScrollByFunction = (buttonNum) => {
      var scrollByNum = 0;
      console.log('b' + buttonNum);
      console.log('p' + position);
      scrollByNum = buttonNum - position;
      console.log('r' + scrollByNum);
      swiperRef.current.scrollBy(scrollByNum, true)
    }
    return <View style={{height: 35, bottom: 0, width: screenWidth, backgroundColor: '#000000'}}>
    <View style={{top: 20, backgroundColor: '#000000'}}>
    <View style={{flexDirection: 'row', left: 5 , top: 0}}>
    <View style={{flexDirection: 'row', left: '2.5%' , top: 0, justifyContent: 'space-between', width: '90%'}}>
    <TouchableOpacity onPress={() => {setScrollByFunction(0)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity1}}>Popular</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {setScrollByFunction(1)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity2}}>Newest</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {setScrollByFunction(2)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity3}}>Media</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {setScrollByFunction(3)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity4}}>On Portraits</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{width: barWidth, height: 3, bottom: 0, borderRadius: 10, backgroundColor: barColor, 
    left: barLeftValue}}/>
    <View style={{height: 1, backgroundColor: '#ffffff', width: '98%', opacity: .15, top: 0, right: 0, borderRadius: 5}}/>
    </View>
    </View>
  });

  const StickyParentFunc = (func) => {
    if(stickyFunction == null){
    stickyFunction = func;
    }
  }

  const RenderItem = ({item}) => {
    if(item == ' '){
      return <StickyHead func={StickyParentFunc}/>;
    }else{
      return <Post portraitColor= {item.portraitColor} portraitColorRGBA={item.portraitColorRGBA} portraitName={item.portraitName} portraitImagePath= {item.portraitImagePath} 
        userColor={item.userColor} Anonymous={item.Anonymous} hasText={item.hasText} userName={item.userName} userImagePath= {item.userImagePath} timeSince={item.timeSince} 
        postTextContent={item.postTextContent} file={item.file} PostFilePath={item.PostFilePath} likes={item.likes} dislikes={item.dislikes} comments={item.comments}/>
    }
  };


  const Header = (data) => {
    const navigation = useNavigation();;
    return(
        <View>
        <View style={{height: 45}}/>
  
      <Swiper showsPagination={true} horizontal={true} index={0} loop={false} style={{top: 10, height: 315}} 
      paginationStyle={{top: 337.5}} dotStyle={{backgroundColor: '#ffffff', opacity: .50}} activeDotColor={'#ffffff'}>
        <TouchableOpacity activeOpacity={.7}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <Image style={{width: 300, height: 300, borderRadius:30, borderWidth: 7.5, borderColor: data.ColorP}} source={require('../assets/uzivert.jpg')}/>
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity={.7}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <Image style={{width: 300, height: 300, borderRadius:30, borderWidth: 7.5, borderColor: data.ColorP}} source={require('../assets/uzivert.jpg')}/>
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity={.7}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <Image style={{width: 300, height: 300, borderRadius:30, borderWidth: 7.5, borderColor: data.ColorP}} source={require('../assets/uzivert.jpg')}/>
        </TouchableOpacity>
  
      </Swiper>
  
        <View style={{height: 35}}/>
      <View style={{backgroundColor: '#000000', flexDirection: 'row', alignSelf: 'center',top: 32.5}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ffffff', bottom: 10,}}>{data.FullNameP}</Text>
      </View>
      <Text style={{width: '98.5%',  borderRadius: 15, left: 0, top: 27.5, fontSize: 14,color: '#ffffff', opacity: .60, alignSelf: 'center', textAlign: 'center'}}>
      {bio}
      </Text>
      <View style={{height: 5}}/>
        <View style={{flexDirection: 'row', width: '96%', justifyContent: 'space-evenly', right: 0, top: 20, height: 40}}>
        
        <View style={{flexDirection: 'row', width: '20%'}}>
        <Image style={{width: 90.25, height: 90.25, right: 30, bottom: 1, tintColor: '#57d9a3'}}source={require('../assets/ThumbsUp.png')}/>
        <View style={{right: 55, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>{likes}</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Likes</Text>
        </View>
        </View>
  
        <View style={{flexDirection: 'row', width: '20%'}}>
        <Image style={{width: 90.25, height: 90.25, right: 30, bottom: 1, tintColor: '#ff7597'}}source={require('../assets/ThumbsDown.png')}/>
        <View style={{right: 55, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>{dislikes}</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Dislikes</Text>
        </View>
        </View>
  
        <View style={{flexDirection: 'row', width: '22%'}}>
        <Image style={{width: 55, height: 80, right: 10, top: 3, tintColor: '#bb86fc'}}source={require('../assets/ViewsIcon.png')}/>
        <View style={{right: 15, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>{views}</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Views</Text>
        </View>
        </View>
  
        <View style={{flexDirection: 'row', width: '20%'}}>
        <Image style={{width: 57.5, height: 57.5, right: 10, top: 14, tintColor: '#79e2f2'}}source={require('../assets/Comment.png')}/>
        <View style={{right: 15, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>{posts}</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Posts</Text>
        </View>
        </View>
  
        <TouchableOpacity onPress={()=>navigation.navigate('Chats')} style={{flexDirection: 'row', width: '20%'}}>
        <Image style={{width: 37.5, height:37.5, right: 0, top: 24, tintColor: '#ffe380'}}source={require('../assets/ProfileIcon3.png')}/>
        <View style={{left: 5, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>{followers}</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Followers</Text>
        </View>
        </TouchableOpacity>
        
        </View>
  
        <View style={{height: 35}}/>
        <View style={{flexDirection: 'row', left: 2.5, width: '98.5%', justifyContent: 'space-between', top: 0}}>
        <TouchableOpacity style={{height: 24, width: '27.5%', borderWidth: 2.5, borderColor: '#57d9a3', borderRadius: 7.5, alignItems: 'center', top: 27.5}}
        onPress={() => {navigation.navigate('SelectUserToPost')}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#57d9a3', bottom: 2.5}}>Add Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 24, width: '40%', borderWidth: 2.5, borderColor: '#bb86fc', borderRadius: 7.5, alignItems: 'center', top: 27.5}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#bb86fc', bottom: 2.5}}>Edit Portrait</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 24, width: '27.5%', borderWidth: 2.5, borderColor: '#ffe380', borderRadius: 7.5, alignItems: 'center', top: 27.5}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffe380', bottom: 2.5}}>Send To</Text>
        </TouchableOpacity>
        </View>
        <View style={{height: 30}}/>
  
        <View style={{height: 0}}/>
        </View>
    )
  }
  
  
  const Footer = () => {
    return(
      <View style={{height: 25}}/>
    )
  }


  
  // useEffect with an empty dependency array works the same way as componentDidMount
  useEffect(() => {

    const awaitData = async() =>{
     try {
       // set loading to true before calling API
       setLoading(true);
       await getData()
       .then((response) => response)
       .then((response) => {
       setData(response);
      console.log("profile data test name: " + data.FullNameP);
      })
       // switch loading to false after fetch is complete
       setLoading(false);
     } catch (error) {
       // add error handling here
       setLoading(false);
       console.log(error);
     }
    }
    awaitData()
  }, []);

  if(loading) return(<View style={{flex: 1, backgroundColor: '#000000'}}/>);

  return  <View style={{backgroundColor: '#000000', height: 10000, flex:1, alignContent: 'center'}}>

  <View style={{width: 50, height: 50, right: 15, top: '89%', alignItems: 'center', position: 'absolute', zIndex: 3}}>
   <TouchableOpacity style={{width: 55.5, height: 55.5, bottom: 10, alignItems: 'center', position: 'absolute', overflow: 'hidden', backgroundColor: '#000000', borderRadius: 13, zIndex: 3, elevation: 4}} onPress={() => setModalVisible(true)}>
    <Image style={{width: 166.25, height: 166.25, right: .4, bottom: 55.5, backgroundColor: 'transparent', zIndex: 3, elevation:3, tintColor: '#bb86fc', position: 'relative'}} source={require('../assets/AddIcon.png')}/>
    </TouchableOpacity>
  </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}>
      <Pressable style={{height: 1000, width: '100%', backgroundColor: '#000000', opacity: .80}} onPress={() => setModalVisible(false)}/>
      <View style={{height: 140, width: 170, bottom: 382, left: 246, backgroundColor: 'transparent'}}>
      <TouchableOpacity style={{flexDirection: 'row', top: 5, right: 2.5}} onPress={() => {navigation.navigate('SelectUserToPost');  setModalVisible(false);}}>
      <Text style={{color: '#ffffff', fontSize: 17, left: 45, top: 2.5}}>Add Post</Text>
      <Image style={{width: 75, height: 75, left: 35, bottom: 23, tintColor: '#bb86fc'}}source={require('../assets/ArrowIcon2.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', bottom: 35, right: 2.5}}>
      <Text style={{color: '#ffffff', fontSize: 17, left: 7, top: 5}}>Create Portrait</Text>
      <Image style={{width: 75, height: 75, right: 5, bottom: 20, tintColor: '#79e2f2'}}source={require('../assets/ArrowIcon2.png')}/>
      </TouchableOpacity>

      <View style={{width: 50, height: 50, right: 8, top: 90, alignItems: 'center', position: 'absolute'}}>
      <TouchableOpacity style={{width: 60, height: 60, alignItems: 'center', position: 'absolute', backgroundColor: '#000000', borderRadius: 0}} onPress={() => setModalVisible(false)}>
      <Image style={{width: 125, height: 125, right: 0, bottom: 32, tintColor: '#bb86fc', position: 'relative'}} source={require('../assets/ExitIcon2.png')}/>
      </TouchableOpacity>
      </View>

      </View>
      </Modal>


      <View style={{backgroundColor: '#000000', height: 40, flexDirection: 'row',alignSelf: 'center', alignItems: 'center', width: '95%', zIndex: 4, top: 35}}>
      <View style={{flexDirection: 'row', width: '100%', left: '0%', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between'}}>
     <Image style={{width: 30, height: 60, bottom: 2.5, left: 5, tintColor: '#ffffff', opacity: .75}}source={require('../assets/SettingsIcon.png')}/>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', bottom: 1, right: 0, width: 200, textAlign: 'center', opacity: .75}}>{data.UserNameP}</Text>
    <Image style={{width: 25, height: 25, bottom: 5, tintColor: '#ffffff', opacity: .75}}source={require('../assets/OptionsIcon.png')}/>
    </View>
    </View>

    <FlatList
        data={[' ']}
        renderItem={RenderItem}
        ListHeaderComponent={Header(data)}
        style={{top: 15}}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        windowSize={7}
        removeClippedSubviews={false}
        updateCellsBatchingPeriod={7}
        maxToRenderPerBatch={50}
        ListFooterComponent={() => {
           return<Swiper ref={swiperRef} style={{top: 15}} showsPagination={false} horizontal={true} index={0} loop={false} height='100%'
           onIndexChanged={index => {stickyFunction(index)}}>
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           ListEmptyComponent={() => <ActivityIndicator color={"blue"}/>}
           />
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           />
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           />
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           />
           </Swiper> 
        }}
      />

    <NavBar Home={false} Explore={false} Profile={true}/>

    </View>
  };

  const styles = StyleSheet.create({
    backgroundVideo: {
      height: 783,
      width: 500,
      position: "absolute",
      transform: [{ rotate: '0deg'}],
      alignItems: "center",
      left: -55,
      bottom: 17,
    },
  });
  
  
  
  export default ProfileScreen;