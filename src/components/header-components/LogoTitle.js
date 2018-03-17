import React from 'react';
import { View,Image, Text,Button } from 'react-native';

export default  class LogoTitle extends React.Component{
    render(){
      return(
        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
        <Image
          source={require('../../../assets/img/pitslogo.png')}
           style={{ width: 30, height: 30,marginLeft:20 }}
        />
        <Text style={{color:'white',fontSize:20,paddingLeft:20}}>Pits App</Text>
        </View>
      )
    }
  };
  
  