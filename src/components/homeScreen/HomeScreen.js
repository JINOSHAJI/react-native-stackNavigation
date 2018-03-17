import React from 'react';
import { View,Image, Text,Button } from 'react-native';
import LogoTitle from '../header-components/LogoTitle';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class HomeScreen extends React.Component {
    static navigationOptions = {
       title: 'Home',
       
     headerTitle:<LogoTitle/>,
      headerStyle:{  // this styles are individual for every page
        backgroundColor:'#6b52ae'
      },
     headerTintColor: '#fff', //affect on font color of header title
       headerTitleStyle: {
         fontWeight: 'bold',
       },
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button title="Go to  Details Page" 
          onPress={()=>{this.props.navigation.navigate('Details',
             {
               name:'Jino Shaji',
               title:'Hey Some Data'
              }
            )}} />
  
        </View>
      );
    }
  }
  