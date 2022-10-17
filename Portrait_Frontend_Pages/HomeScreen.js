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
  Modal,
  FlatList,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import Post from './Functions/Post';
import Recents from './Functions/Recents';
import NavBar from './Functions/NavBar';
import { StatusBar } from 'expo-status-bar';


const DATA = [
  {
    portraitColor:"#79e2f2",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"A few minutes ago",
    postTextContent:"We began the experiment by setting up our area and added are",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor:'#57d9a3',
    portraitName:'Lil Uzi',
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:'#FF7597',
    Anonymous:false,
    userName:'Jay Shetter',
    userImagePath: require('../assets/10.jpg'),
    timeSince:'A few minutes ago',
    postTextContent: 'post test with text and file, Some pics of us together, see you soon :) ',
    hasText: true,
    file: true,
    PostFilePath: require('../assets/uzivert.jpg'),
    likes: '420',
    dislikes: '0',
    comments: '69',
  },
  {
    portraitColor:'#bb86fc',
    portraitName:'Lil Uzi',
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:'#79e2f2',
    Anonymous:false,
    userName:'Jay Shetter',
    userImagePath: require('../assets/10.jpg'),
    timeSince:'2 hours ago',
    postTextContent:'We began the experiment by setting up our research area. We started by setting up the track and putting one of the masses onto the spring-powered cart.',
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:'20',
    dislikes:'2',
    comments:'5',
  },
  {
    portraitColor:"#79e2f2",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"A few minutes ago",
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
    timeSince:"5 hours ago",
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
    postTextContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    hasText: true,
    file: true,
    PostFilePath: require('../assets/me1.jpg'),
    likes:"1",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor:"#79e2f2",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"A few minutes ago",
    postTextContent:"We began the experiment by setting up our area and added are",
    hasText: true,
    file: true,
    PostFilePath: require('../assets/me2.jpg'),
    likes:"420",
    dislikes:"0",
    comments:"69",
  },
  {
    portraitColor:'#57d9a3',
    portraitName:'Lil Uzi',
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:'#FF7597',
    Anonymous:false,
    userName:'Jay Shetter',
    userImagePath: require('../assets/10.jpg'),
    timeSince:'A few minutes ago',
    postTextContent: 'post test with text and file, Some pics of us together, see you soon :) ',
    hasText: true,
    file: true,
    PostFilePath: require('../assets/uzivert.jpg'),
    likes: '420',
    dislikes: '0',
    comments: '69',
  },
  {
    portraitColor:"#bb86fc",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#57d9a3",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"5 hours ago",
    postTextContent: null,
    hasText: false,
    file: true,
    PostFilePath: require('../assets/me2.jpg'),
    likes:"420",
    dislikes:"0",
    comments:"69",
  },
  
];




const RenderItem = ({item}) => {
  if(item == '1'){
    return(
    <View style={{flexDirection: 'row', top: 35 , right: 0, zIndex: 2, height: 25, flex: 1, backgroundColor: '#000000', justifyContent: 'space-between', alignSelf: 'center', width: '100%', position: 'absolute'}}>
    <TouchableOpacity style={{width: 50, height: 50, right: 2.5, bottom: 9, alignItems: 'center', zIndex: 3, elevation: 3}} onPress={()=>navigation.navigate('Notifications')}>
    <Image style={{width: 330, height: 330, right: 0, bottom: 137.5, tintColor: '#ff7597'}}source={require('../assets/NotificationIcon.png')}/>
    <View style={{height: 7, width: 7, backgroundColor: '#000000', borderRadius: 10, right: 25, bottom: 327.5}}/>
    </TouchableOpacity>
    <Image style={{width: 250, height: 80, right: 0, bottom: 23.5}}source={require('../assets/PortraitNameOutline6.png')}/>
    <TouchableOpacity style={{width: 50, height: 50, bottom: 8, left: 5, alignItems: 'center'}} onPress={()=>navigation.navigate('Chats')}>
    <Image style={{width: 220, height: 220, right: 2.5, bottom: 84, tintColor: '#79e2f2'}}source={require('../assets/ChatIcon.png')}/>
    <View style={{height: 7, width: 7, backgroundColor: '#79e2f2', borderRadius: 10, left: 15, bottom: 225, opacity: 0}}/>
    </TouchableOpacity>
    </View>
    )
  }else if(item == '2'){
    return(
      <View>
    <View style={{height: 67.5}}/>
    <View style={{ flex: 1, height: 110, top: 0, resizeMode:'contain', left: 0, backgroundColor: '#000000', borderRadius: 15}}>
      <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center'}} 
      style={{top: 10, paddingLeft: 0, height: 100, backgroundColor: '#000000'}} showsHorizontalScrollIndicator={false}>
      <View style={{width: 2.5}}/>
  
      <Recents left= {2.5} color="#79e2f2" name="Kanye East" imagePath= {require('../assets/9.jpg')}/>
      <Recents left= {7.5} color="#57d9a3" name="Jay Shetter" imagePath={require('../assets/10.jpg')}/>
      <Recents left= {12.5} color="#bb86fc" name="Lil Uzi" imagePath={require('../assets/uzivert.jpg')}/>
      <Recents left= {17.5} color="#ffe380" name="Kanye East" imagePath= {require('../assets/9.jpg')}/>
      <Recents left= {22.5} color="#ff7597" name="Lil Uzi" imagePath={require('../assets/uzivert.jpg')}/>  
      <Recents left= {27.5} color="#79e2f2" name="Kanye East" imagePath= {require('../assets/9.jpg')}/>
      <View style={{width: 50000}}/>
      
      </ScrollView>
      
  
  </View>
      <View style={{height: 7.5, backgroundColor: 'transparent'}}/>
      <View style={{height: .75, backgroundColor: '#ffffff', width: '100%', opacity: .175, top: 2, right: 0, borderRadius: 0}}/>
      <View style={{height: 5}}/>
      </View>
    )
  }else{
  return(
  <Post portraitColor= {item.portraitColor} portraitColorRGBA={item.portraitColorRGBA} portraitName={item.portraitName} portraitImagePath= {item.portraitImagePath} 
      userColor={item.userColor} Anonymous={item.Anonymous} hasText={item.hasText} userName={item.userName} userImagePath= {item.userImagePath} timeSince={item.timeSince} 
      postTextContent={item.postTextContent} file={item.file} PostFilePath={item.PostFilePath} likes={item.likes} dislikes={item.dislikes} comments={item.comments}/>
  )
  }
};



const Footer = () => {
  return(
    <View style={{height: 25}}/>
  )
}






//Home Screen Fuction 
const HomeScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return <View style={{backgroundColor: '#000000', height: 10000, flex:1, alignContent: 'center'}}>
    <StatusBar style="light" backgroundColor="#000000" hidden={false}/>

  <View style={{width: 50, height: 50, right: 15, top: '89%', alignItems: 'center', position: 'absolute', zIndex: 3}}>
   <TouchableOpacity style={{width: 55.5, height: 55.5, bottom: 10, alignItems: 'center', position: 'absolute', overflow: 'hidden', backgroundColor: '#000000', borderRadius: 13, zIndex: 3, elevation: 4}} onPress={() => setModalVisible(true)}>
    <Image style={{width: 166.25, height: 166.25, right: .4, bottom: 55.5, backgroundColor: 'transparent', zIndex: 3, elevation:3, tintColor: '#57d9a3', position: 'relative'}} source={require('../assets/AddIcon.png')}/>
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
      <Image style={{width: 125, height: 125, right: 0, bottom: 32, tintColor: '#57d9a3', position: 'relative'}} source={require('../assets/ExitIcon2.png')}/>
      </TouchableOpacity>
      </View>

      </View>
      </Modal>




      <FlatList
        data={['1', '2', ...DATA]}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
        renderItem={RenderItem}
        ListFooterComponent={Footer}
        windowSize={7}
        removeClippedSubviews={false}
        updateCellsBatchingPeriod={7}
        maxToRenderPerBatch={50}
      />
    <NavBar Home={true} Explore={false} Profile={false}/>

    </View>
  
    };




    
    export default HomeScreen;