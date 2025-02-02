import React ,{Component}from 'react';
import { Alert,AppRegistry,AsyncStorage, StyleSheet, Text, View ,YellowBox,TouchableOpacity,TouchableHighlight ,TouchableWithoutFeedback,TouchableNativeFeedback,ImageBackground,Image,TextInput,Button,ListView,SectionList,ScrollView,List,ListItem,Picker} from 'react-native';
import {createStackNavigator,createAppContainer,createTabNavigator,createDrawerNavigator,withNavigation,NavigationAction,NavigationActions,DrawerNavigator,StackNavigator,DrawerActions } from 'react-navigation';
import Permissions from 'react-native-permissions';
import { ImagePicker } from 'expo';
import { Container, Content, Header ,Left, } from 'native-base';
import Icon from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import MaterialIcons from '/home/rj27/CargoExchange/node_modules/react-native-vector-icons/MaterialIcons.js';

//import HamB from '/home/rj27/CargoExchange/components/HamB.js';

//import RNFetchBlob from 'react-native-fetch-blob';







/*
//matched orders home screen and hamburger icon
class MatchedOrdersHS extends React.Component{
  static navigationOptions={
    title:'',
    header:null,
  }



  render(){
    return(
     <HamB />




    );
  }

}


*/


//profile picture module
class ProfilePicture extends React.Component{
  static navigationOptions={
    title:'',
    header:null,
  }
  constructor(props){
    super(props);
    this.state={
      imageuri :require('./appImg/image/propic.png')

    }
  }

  //componentDidMount = () => AsyncStorage.getItem(imageuri).then((result)=> this.setState({ imageuri: result }))


  render(){

    return(

    <View style={styles.con} backgroundColor='white'>
   <View style={{backgroundColor:'rgb(169,36,8)',height:200,width:'100%'}}>
          <Text style={{fontWeight:'normal' ,fontSize:30,color:'white',paddingTop: 140,paddingLeft:20}} >Profile Picture </Text>
   </View>
    <TouchableOpacity onPress={this._propicImage}  >
    <View style={{paddingLeft:85,paddingTop:90,}} >



        <Image  source={ this.state.imageuri } style={{ width: 200, height: 200 , borderRadius:100 }} />




    </View>
   </TouchableOpacity>

   <View style={styles.leftbv}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
      <View style={{flex:1,paddingRight:90,flexDirection:'row'}}>
       <Ionicons name="ios-arrow-back" size={40} color='rgb(169,36,8)'   />
        <Text style={{color:'rgb(169,36,8)',fontSize:20,paddingTop:5,paddingLeft:15}}>Previous</Text>
      </View>
      </TouchableOpacity>


       <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('ProP')}} >
       <View  style={{flex:1,flexDirection:'row'}}>
        <Text style={{color:'rgb(169,36,8)',paddingBottom:10,paddingRight:20,fontSize:20,paddingTop:5}}>           Next</Text>
        <Ionicons name="ios-arrow-forward" size={40} color='rgb(169,36,8)' style={{paddingRight:20}} />
       </View>
       </TouchableOpacity>



     </View>
    </View>

    );
  }
  _propicImage= async() => {
  let result = await Expo.ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result });
    }
    }

}
//end of profile picture module








//uploading docs
class Upload extends React.Component{

  constructor(props){
    super(props);
     this.state = {

      image:  null,

      image1: null,

      image2: null ,

   };
    }
  static navigationOptions={
   title:'',
   header:null,
 }



  render(){
     return(
      <View style={styles.con}>
      <View style={{backgroundColor:'rgb(169,36,8)',height:200,width:'100%'}}>
          <Text style={{fontWeight:'normal' ,fontSize:30,color:'white',paddingTop: 140,paddingLeft:20}} >Upload Your Documents</Text>
     </View>






     <View style={{ flex: 1,alignItems:'center', backgroundColor:'white'}}>




          <TouchableOpacity   onPress={this._pickImage}  >

           <View style={{paddingTop:15}}>

           {
                  this.state.image==null ?



                  <View style={{alignItems:'center',width:300,height:120,borderStyle:'dashed',borderColor:'rgb(196,194,194)',borderWidth:5,backgroundColor:'white'}}>
                  <Ionicons name="md-add" size={70} color='rgb(196,194,194)'   />
                  <Text style={{color:'rgb(196,194,194)',fontSize:30,fontWeight:'bold'}}>Driving License</Text>
                  </View>


                  :

                  <View >

                   <View style={{paddingLeft:80}}>
                       <Image  source={ this.state.image } style={{ width: 230, height: 90 , }} />
                   </View>
                       <Text  style={{backgroundColor:'rgb(227,227,227)',}} >                                        Driving License                                                </Text>
                  </View>




                  }
           </View>
          </TouchableOpacity>

      </View>









      <View style={{ flex: 1,alignItems:'center', backgroundColor:'white'}}>
        <TouchableOpacity   onPress={this._pickImage1}  >
        <View style={{alignItems:'center',}}>
        {
                  this.state.image1==null ?



                  <View style={{alignItems:'center',width:300,height:120,borderStyle:'dashed',borderColor:'rgb(196,194,194)',borderWidth:5,backgroundColor:'white'}}>
                  <Ionicons name="md-add" size={70} color='rgb(196,194,194)'   />
                  <Text style={{color:'rgb(196,194,194)',fontSize:30,fontWeight:'bold'}}>Aadhar Card</Text>
                  </View>


                  :

                  <View >

                   <View style={{paddingLeft:80}}>
                       <Image  source={ this.state.image1 } style={{ width: 230, height: 90 , }} />
                   </View>
                       <Text  style={{backgroundColor:'rgb(227,227,227)',}} >                                        Aadhar Card                                                </Text>
                  </View>




                  }


        </View>
        </TouchableOpacity>

      </View>



       <View style={{ flex: 1,alignItems:'center', paddingBottom:70,backgroundColor:'white'}}>
        <TouchableOpacity   onPress={this._pickImage2}  >
        <View  >
                 {
                  this.state.image2==null ?



                  <View style={{alignItems:'center',width:300,height:120,borderStyle:'dashed',borderColor:'rgb(196,194,194)',borderWidth:5,backgroundColor:'white'}}>
                  <Ionicons name="md-add" size={70} color='rgb(196,194,194)'   />
                  <Text style={{color:'rgb(196,194,194)',fontSize:30,fontWeight:'bold'}}>Pan Card</Text>
                  </View>


                  :

                  <View >

                   <View style={{paddingLeft:80}}>
                       <Image  source={ this.state.image2 } style={{ width: 230, height: 90 , }} />
                   </View>
                       <Text  style={{backgroundColor:'rgb(227,227,227)',}} >                                        Pan Card                                                </Text>
                  </View>




                  }



        </View>
        </TouchableOpacity>

      </View>



       <View style={styles.leftbv}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
      <View style={{flex:1,paddingRight:90,flexDirection:'row'}}>
       <Ionicons name="ios-arrow-back" size={40} color='rgb(169,36,8)'   />
        <Text style={{color:'rgb(169,36,8)',fontSize:20,paddingTop:5,paddingLeft:15}}>Previous</Text>
      </View>
      </TouchableOpacity>


       <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('ProP')}} >
       <View  style={{flex:1,flexDirection:'row'}}>
        <Text style={{color:'rgb(169,36,8)',paddingBottom:10,paddingRight:20,fontSize:20,paddingTop:5}}>           Next</Text>
        <Ionicons name="ios-arrow-forward" size={40} color='rgb(169,36,8)' style={{paddingRight:20}} />
       </View>
       </TouchableOpacity>



     </View>


     </View>

     );
 }
  _pickImage = async() =>{

    let result = await Expo.ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result });
    }
  };
  _pickImage1 = async() =>{

    let result = await Expo.ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image1: result });
    }
  };

  _pickImage2 = async() =>{

    let result = await Expo.ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image2: result });
    }
  };


}
//end of uploading docs












//LANGUAGE SELECTION
class LangSelection extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {user: ' '};

      }
    static navigationOptions={
        title:'',
        header:null,
    }

  render()
  {
    return(
       <View style={styles.con} backgroundColor='white' >

           <View style={{backgroundColor:'rgb(169,36,8)',height:200,width:'100%'}}>
             <Text style={{fontWeight:'normal' ,fontSize:30,color:'white',paddingTop: 140,paddingLeft:20}} >Choose Language </Text>
           </View>

       <View>

        <TouchableOpacity  >
          <View style={{padding:25}}>
        <Text>English</Text>
         </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={{padding:25}}>
        <Text>Hindi</Text>
        </View>
        </TouchableOpacity>

       <TouchableOpacity >
       <View style={{padding:25}}>
        <Text>Telugu</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={{padding:25}}>
        <Text>Tamil</Text>
        </View>
        </TouchableOpacity>


       </View>

       <View style={styles.bottomView} alignItems='flex-end'>

       <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Upd')}} >
       <View style={{flex:1,flexDirection:'row'}}>
        <Text style={{color:'rgb(169,36,8)',backgroundColor:'rgb(227,227,227)',fontSize:20,paddingTop:5}}> Next  </Text>
       <Ionicons name="ios-arrow-forward" size={40} color='rgb(169,36,8)' style={{paddingBottom:10,paddingRight:20}} />
       </View>
       </TouchableOpacity>

       </View>
       </View>
    );
  }



}
////end of language selection











//homescreen
class HomeScreen extends React.Component  {
  static navigationOptions={                    //removing the header for the homescreen
      title:'',
      header:null,
  }
    constructor(props) {                       //for the input text
    super(props);
    this.state = {text: ' '};
    this._onNavigate=this._onNavigate.bind(this);
  }





  _onpressButton=()=>{                              //on preesing verify 'touchable opacity' on home screen
    const {text}= this.state;
     Alert.alert
     (
      'Your Number Is '+text,
      'We need to send an SMS to your phone to confirm its your  mobile',

      [

        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
        {text: 'OK', onPress: this._onNavigate },
      ],
      { cancelable: false }
     )

}
_onNavigate(){
  const navigateAction = NavigationActions.navigate({
    routeName: 'Lang',

    params: {},

    action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),
  });

  this.props.navigation.dispatch(navigateAction);
}

  render() {



    return (
      <ImageBackground source={require('./appImg/image/bg.png')} style={styles.container}  >
        <Image source={require('./appImg/image/cx_launcher.png')} style={{height:'18%',width:'30%'}} >
        </Image>
        <View style={{flexDirection:'row', paddingTop:80,paddingBottom:30, justifyContent: 'center', alignItems: 'center',}}>

        <Ionicons name="md-phone-portrait" style={{paddingTop:10,paddingRight:10}} size={23} color="grey" />
         <TextInput  style={{height:50,width:280,color:'white', }}  placeholder='Mobile Number' placeholderTextColor='white' underlineColorAndroid='rgb(169,36,8)' onChangeText={(text) =>  this.setState({text}) }   />
        </View>
        <TouchableOpacity  onPress={this._onpressButton.bind(this)} >
          <View style={{  marginBottom: 30,  width: 290, alignItems: 'center',backgroundColor:'rgb(169,36,8)'}} >
           <Text style={{padding: 20,color: 'white'}}>VERIFY</Text>
          </View>

        </TouchableOpacity>

        </ImageBackground>

    );
  }



}
//end of home screen





//Stylesheet
const styles = StyleSheet.create({
  container: {                                       // used for 'imagebackground' in 'home screen'
    flex  : 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent:'center',
    width:'100%',
    height:'100%',

  },
  text:{
   fontSize:30,
   fontWeight:'bold',
  },
  bottomView:{                                    //used in lang

    width: '100%',
    height: 50,  backgroundColor: 'rgb(227,227,227)',


    position: 'absolute',
    bottom: 0
  },
  con:{                                          //used in lang
    flex:1,
  },
  leftbv:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',

    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
   backgroundColor: 'rgb(227,227,227)',
  },
  topbox:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',

    position: 'absolute',
    top : 0,
    width: '100%',
    height: 90,
   backgroundColor: 'rgb(169,36,8)',
  },


});

//end of stylesheet










//routes
const RootStack =createStackNavigator(               //routers  // MOHS:MatchedOrdersHS,
  {
  Home:HomeScreen,
  Lang:LangSelection,
  Upd:Upload,
  ProP:ProfilePicture,

  },
  {
    initialRouteHome:'Home',
  },
  {

  },
);
//end of routes

const App = createAppContainer(RootStack);

export default App;

/*
//main
export default class App extends React.Component      //main function
{
  render(){

    return(

      <RootStack />

    );
  }
}

//end of main
*/

