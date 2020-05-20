
import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox ,AsyncStorage,Slider} from 'react-native';

import { DrawerNavigator,createDrawerNavigator,createStackNavigator ,DrawerItems} from 'react-navigation';

import { StackNavigator } from 'react-navigation'

import {Container,Content,Header,Body} from 'native-base'

import MaterialIcons from '/home/rj27/CargoExchange/node_modules/react-native-vector-icons/MaterialIcons.js'

import { Ionicons } from '@expo/vector-icons';

//import RNFetchBlob from 'react-native-fetch-blob';


//hamburger icon
class HamburgerIcon extends Component {

  toggleDrawer=()=>{

    console.log(this.props.navigationProps);
    
    this.props.navigationProps.toggleDrawer();

  }
 
  render() {
 
    return (
 
      <View style={{flexDirection: 'row'}}>
 
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
        <View  style={{paddingLeft:18}} >
          <Image
        source={require('/home/rj27/CargoExchange/appImg/image/2x/whiteHB.png')}
        style={{ width: 25, height: 25}}
          />
         </View>
        </TouchableOpacity>
 
      </View>
    
    );
  
  
  }
}
 



class Intransit extends Component{


  render(){
    return(
      <View>

      </View>
    );
  }
}

//Home page
class MainActivity extends Component {

  
 
   render()
   {
      return(
 
         <View style = { styles.MainContainer } backgroundColor='white' >
           <View style={{height:60,backgroundColor:'rgb(196,194,194)',alignItems:'center',justifyContent:'center'}}> 
            <Text style={{fontSize: 23,fontStyle:'italic'}}> No Matched Orders</Text>
           
          </View>
          <Slider 
               
               style={{height:100,width:140,paddingLeft:30}}
               thumbStyle={{height:80,width:80}}
            
               
               
              //let thumbImage={require('/home/rj27/CargoExchange/appImg/image/propic1.png')}
               >
               
               </Slider>
          
         </View>
      );
   }
}

const FirstActivity_StackNavigator = createStackNavigator(
  {
    First: { 
      screen: MainActivity, 
      navigationOptions: ({ navigation }) => ({
        title: 'Matched Orders',
       
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerRight:
        <View style={{paddingRight:15}}>
        <TouchableOpacity  onPress={()=>navigation.push('First') } >
        <Image source={require('/home/rj27/CargoExchange/appImg/image/2x/baseline_refresh_white_18dp.png')} 
       
        style={{height:24,width:24,paddingRight:5}}
        /> 
        </TouchableOpacity>
        </View>
        ,

        headerStyle: {
          backgroundColor: 'rgb(169,36,8)'
        },

        headerTintColor: 'white',
       

      })
    },
    ITP:Intransit,
  
    
  },
{
     initialRouteName:'First',
}

);
//end of home page



//past orders
class SecondActivity extends Component {

 
   
     render()
     {
        return(
   
           <View style = { styles.MainContainer }>
   
              <Text style={{fontSize: 23}}> This is Past orders </Text>
            
           </View>
        );
     }
  }
  const SecondActivity_StackNavigator = createStackNavigator({
    Second: { 
      screen: SecondActivity, 
      navigationOptions: ({ navigation }) => ({
        title: 'Past Orders',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

        headerStyle: {
          backgroundColor: 'rgb(169,36,8)'
        },
        headerTintColor: 'white',
      })
    },
  });
//end of past orders



//documents
  class ThirdActivity extends Component {

   
 
       render()
       {
          return(
     
             <View style = { styles.MainContainer }>
     
                <Text style={{fontSize: 23}}> This is Documents  </Text>
              
             </View>
          );
       }
    }

    const ThirdActivity_StackNavigator = createStackNavigator({
      Third: { 
        screen: ThirdActivity, 
        navigationOptions: ({ navigation }) => ({
          title: 'Documents',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: 'rgb(169,36,8)'
          },
          headerTintColor: 'white',
        })
      },
    });
//end of documents




//settings screen
    class FourthActivity extends Component {

   
 
        render()
        {
           return(
      
              <View style = { styles.MainContainer }>
      
                 <Text style={{fontSize: 23}}> This is Settings  </Text>
               
              </View>
           );
        }
     }
 
     const FourthActivity_StackNavigator = createStackNavigator({
       Third: { 
         screen: FourthActivity, 
         navigationOptions: ({ navigation }) => ({
           title: 'Settings',
           headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
 
           headerStyle: {
             backgroundColor: 'rgb(169,36,8)'
           },
           headerTintColor: 'white',
         })
       },
     });
//end of setting screen 



const CustomDrawerContentComponent = (props) => (
 
  
    <Container>
      <Header style={{backgroundColor:'rgb(27,26,26)', height:250}}>
        <Body style={{paddingLeft:40 }}>
        

         
    
        </Body>
      </Header>
      <Content >
        <DrawerItems {...props} activeTintColor='white' inactiveTintColor='white' />
        
      </Content>
  
    </Container>
  
  );
   

export default HamB = createDrawerNavigator({
  
    
   
    Home: { 
    screen: FirstActivity_StackNavigator,
    navigationOptions:{
        drawerIcon: ({ tintColor }) => (
            console.log("icon home"),
             <Image
               source={require('/home/rj27/CargoExchange/appImg/image/2x/baseline_home_white_18dp.png')}
               style={{height:24,width:24}}
             />
           ),
    },
  },

  'Past Orders' : { 
    screen: SecondActivity_StackNavigator,
    navigationOptions:{
        drawerIcon: ({ tintColor }) => (
            console.log("icon past orders"),
             <Image
               source={require('/home/rj27/CargoExchange/appImg/image/2x/round_restore_white_18dp.png')}
               style={{height:24,width:24}}
             />
           ),
    },
  },

  Documents : { 
    screen: ThirdActivity_StackNavigator,
    navigationOptions:{
        drawerIcon: ({ tintColor }) => (
            console.log("icon documents"),
             <Image
               source={require('/home/rj27/CargoExchange/appImg/image/2x/baseline_assignment_white_18dp.png')}
               style={{height:24,width:24}}
             />
           ),
    },
  },
 
  Settings : { 
    screen: FourthActivity_StackNavigator,
    navigationOptions:{
        drawerIcon: ({ tintColor }) => (
            console.log("icon settings"),
             <Image
               source={require('/home/rj27/CargoExchange/appImg/image/2x/baseline_settings_white_18dp.png')}
               style={{height:24,width:24}}
             />
           ),
    },
  },



},
{
    
  initialRouteName: 'Home',
  drawerPosition: 'left',
 contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerBackgroundColor :'rgb(27,26,26)',

},




);

    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
 
  }

});


