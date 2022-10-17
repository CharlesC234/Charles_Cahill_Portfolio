import React, { Component, Fragment, useState, memo, useReducer, useEffect, useRef } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Dimensions,
  Modal,
  FlatList
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import Post from './Functions/Post';
import Recents from './Functions/Recents';
import NavBar from './Functions/NavBar';
import TopPortraits from './Functions/TopPortraits';
import Swiper from 'react-native-swiper';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
 
const DATA = [
  {
    portraitColor:"#79e2f2",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"1 day ago",
    postTextContent:"We began the experiment by setting up our area and added are",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor:"#bb86fc",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#57d9a3",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"3 days ago",
    postTextContent: null,
    hasText: false,
    file: true,
    PostFilePath: require('../assets/me2.jpg'),
    likes:"420",
    dislikes:"0",
    comments:"69",
  },
  {
    portraitColor:"#f686fc",
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:"#57d9a3",
    Anonymous:false,
    userName:"Charles Cahill",
    userImagePath: require('../assets/me3.jpg'),
    timeSince:"1 day ago",
    postTextContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ",
    hasText: true,
    file: true,
    PostFilePath: require('../assets/me1.jpg'),
    likes:"1",
    dislikes:"2",
    comments:"5",
  },
];




const ExploreScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  var stickyFunction;
  var opacity1 = 1;
  var opacity2 = .60;
  var opacity3 = .60;
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
      barLeftValue = '3.25%';
      opacity1 = 1; opacity2 = .50; opacity3 = .50;
      barWidth = 47.5; barColor = "#57d9a3";
    }else if(position == 1){
      barLeftValue = '36.25%';
      opacity1 = .50; opacity2 = 1; opacity3 = .50;
      barWidth = 47.5; barColor = "#79e2f2"
    }else{ 
      barLeftValue = '71%'; 
      opacity1 = .50; opacity2 = .50; opacity3 = 1;
      barWidth = 62.5; barColor= "#bb86fc";
    };
    const setScrollByFunction = (buttonNum) => {
      var scrollByNum = 0;
      console.log('b' + buttonNum);
      console.log('p' + position);
      scrollByNum = buttonNum - position;
      console.log('r' + scrollByNum);
      swiperRef.current.scrollBy(scrollByNum, true)
    }
    return <View style={{height: 50, bottom: 0, width: screenWidth, backgroundColor: '#000000'}}>
    <View style={{top: 5, backgroundColor: '#000000'}}>
    <View style={{flexDirection: 'row', left: 3 , top: 5}}>
    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff', left: 2.5, bottom: 1}}>Explore</Text>
    <View style={{width: 20, height: 3, borderRadius: 10, left: 22.5, top: 10.5, backgroundColor: '#FFE380'}}/>
    <View style={{width: 7.5, height: 3, borderRadius: 10, left: 27.5, top: 10.5, backgroundColor: '#57d9a3'}}/>
    <View style={{flexDirection: 'row', left: 50 , top: 0, justifyContent: 'space-evenly', width: '65%'}}>
    <TouchableOpacity style={{width: '33.3%'}} onPress={() => {setScrollByFunction(0)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity1, width: '100%'}}>Popular</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width: '33.3%'}} onPress={() => {setScrollByFunction(1)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity2, width: '100%'}}>Newest</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width: '33.3%'}} onPress={() => {setScrollByFunction(2)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity3, width: '100%'}}>Suggested</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{width: screenWidth * .65, left: 135}}>
    <View style={{width: barWidth, height: 3, top: 2.5, borderRadius: 10, backgroundColor: barColor, 
    left: barLeftValue}}/>
    </View>
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
  
  
  const SearchBar = memo(() => {
    const [modalVisible, setModalVisible] = useState(false);
    return <View style={{flexDirection: 'row', top: 0, justifyContent: 'space-between'}}>
  
    <View style={{backgroundColor: '#000000', flexDirection: 'row', alignItems: 'center', left: 2.5, flex: 1, top: 5, width: '100%'}}>
    <View style={{top: 3, right: 10, height: 50, left: 0, backgroundColor: 'transparent', width: '100%'}}>
    <TouchableOpacity onPress={() => {setModalVisible(true)}} style={{zIndex: 7, height: 32.5, position: 'absolute', width: '87.5%'}}/>
    <TextInput style={{height: 27.5, padding: 0, width: '87.5%', left: 0, backgroundColor: '#333333', top: 2.5, borderRadius: 15,
     fontSize: 16, paddingLeft: 40,}} placeholder={'Search for portraits'} placeholderTextColor={'#787878'}>
    </TextInput>
    <Image style={{width: 42.5, height: 42.5, right: 2, bottom: 33}}source={require('../assets/ExploreIcon.png')}/>
    </View>
    <Image style={{width: 55, height: 55, right: '98%', bottom: 5.75}}source={require('../assets/OptionsIconProfile.png')}/>
    </View>
  
    <Modal
    animationType="fade"
    transparent={true}
    style={{flex: 1, backgroundColor: '#000000', color: '#000000'}}
    visible={modalVisible}>
    <View style={{flex: 1, backgroundColor: '#000000'}}>
    <View style={{flexDirection: 'row', top: 3.5, backgroundColor: '#000000'}}>
    <TouchableOpacity onPress={()=>setModalVisible(false)} style={{height: 50, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2}}>
        <Image style={{width: 65, height: 50, right: 10, bottom: 0, transform: [{rotate: '180deg'}], tintColor: '#bb86fc'}}source={require('../assets/ArrowIcon2.png')}/>
    </TouchableOpacity>
  
    <View style={{top: 8, height: 32.5, left: 2.5, backgroundColor: 'transparent', width: screenWidth * .757}}>
    <TextInput style={{height: 27.5, padding: 0, width: '100%', left: 0, backgroundColor: '#333333', top: 2.5, borderRadius: 15,
     fontSize: 16, paddingLeft: 40}} autoFocus={true} placeholder={'Search for portraits'} placeholderTextColor={'#787878'}>
    </TextInput>
    <Image style={{width: 42.5, height: 42.5, right: 2, bottom: 33}}source={require('../assets/ExploreIcon.png')}/>
    </View>
    <Image style={{width: 55, height: 55, right: '0%', bottom: 3, zIndex: 5}}source={require('../assets/OptionsIconProfile.png')}/>
    </View>
    </View>
  
    </Modal>
    </View> 
  })
  
  
  
  
  const Header =() => {
    return(
      <View>
      <SearchBar />
  
    <View style={{ flex: 1, height: 140, top: 0, resizeMode:'contain', right: 0, backgroundColor: '#000000', borderRadius: 15}}>
    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff', left: 5, bottom: 0}}>Suggested Portraits</Text>
      <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center'}} 
      style={{top: 10, paddingLeft: 0, height: 130, backgroundColor: '#000000'}} showsHorizontalScrollIndicator={false}>
      <View style={{width: 2.5}}/>
  
      <Recents left= {0} color="#79e2f2" name="Kanye East" imagePath= {require('../assets/9.jpg')}/>
      <Recents left= {5} color="#57d9a3" name="Jay Shetter" imagePath={require('../assets/10.jpg')}/>
      <Recents left= {10} color="#bb86fc" name="Lil Uzi" imagePath={require('../assets/uzivert.jpg')}/>
      <Recents left= {15} color="#ffe380" name="Kanye East" imagePath= {require('../assets/9.jpg')}/>
      <Recents left= {20} color="#ff7597" name="Lil Uzi" imagePath={require('../assets/uzivert.jpg')}/>  
      <View style={{width: 50000}}/>
      
      </ScrollView>
      
  
  </View>
    <View style={{height: 17.5}}/>
    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff', left: 5, bottom: 5}}>Top Portraits</Text>
    <ScrollView horizontal={false} contentContainerStyle={{alignItems: 'center'}} style={{backgroundColor: '#000000'}}>
  
      <TopPortraits Color= "#79e2f2" Name= "Lil Uzi" UserName= "Lil_Uzi2030" Position= '4' ImageSource={require('../assets/uzivert.jpg')} 
      Bio = "We began the experiment by setting up our to the area. We started by setting up the track and putting one of the masses onto the spring-powered cart."/> 
      <View style={{height: 12.5}}/>
  
      <TopPortraits Color= "#57d9a3" Name= "Charles Cahill" UserName= "CCahill030" Position= '4' ImageSource={require('../assets/me3.jpg')} 
      Bio = "We began the experiment by setting up our to the area. We started by setting up the track and putting one of the masses onto the spring-powered cart."/> 
      <View style={{height: 12.5}}/>
  
      <TopPortraits Color= "#f686fc" Name= "Kanye East" UserName= "K_East2030" Position= '4' ImageSource={require('../assets/9.jpg')} 
      Bio = "We began the experiment by setting up our to the area. We started by setting up the track and putting one of the masses onto the spring-powered cart."/> 
      <View style={{height: 17.5}}/>
    </ScrollView>
    <TouchableOpacity style={{width: '100%', bottom: 7.5, height:35}}>
      <Text style={{fontSize: 14, color: '#ffffff', top: 2.5, height: 35, opacity: .60, alignSelf: 'center'}}>See More</Text>
      <Image style={{height: 20, width: 70, alignSelf: 'center', bottom: 15, opacity: .60}} source={require('../assets/DropDownIcon.png')}/>
      </TouchableOpacity>
    </View>
    )
  }
  


  
  return <View style={{backgroundColor: '#000000', height: 10000, flex:1, alignContent: 'center'}}>

  <View style={{width: 50, height: 50, right: 15, top: '89%', alignItems: 'center', position: 'absolute', zIndex: 3}}>
   <TouchableOpacity style={{width: 55.5, height: 55.5, bottom: 10, alignItems: 'center', position: 'absolute', overflow: 'hidden', backgroundColor: '#000000', borderRadius: 13, zIndex: 3, elevation: 4}} onPress={() => setModalVisible(true)}>
    <Image style={{width: 166.25, height: 166.25, right: .4, bottom: 55.5, backgroundColor: 'transparent', zIndex: 3, elevation:3, tintColor: '#FFE380', position: 'relative'}} source={require('../assets/AddIcon.png')}/>
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
      <Image style={{width: 125, height: 125, right: 0, bottom: 32, tintColor: '#FFE380', position: 'relative'}} source={require('../assets/ExitIcon2.png')}/>
      </TouchableOpacity>
      </View>

      </View>
      </Modal>
      <View style={{height: 32.5}}/>


      <FlatList
        data={[' ']}
        renderItem={RenderItem}
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        windowSize={7}
        removeClippedSubviews={false}
        updateCellsBatchingPeriod={7}
        maxToRenderPerBatch={50}
        ListFooterComponent={() => {
           return<Swiper ref={swiperRef} showsPagination={false} horizontal={true} index={0} loop={false} height='100%'
           onIndexChanged={index => {stickyFunction(index)}}>
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

    <NavBar Home={false} Explore={true} Profile={false}/>

    </View>
};



export default ExploreScreen;