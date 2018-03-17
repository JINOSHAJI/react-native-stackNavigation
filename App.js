import React from 'react';
import { View,Image, Text,Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import LogoTitle from './src/components/header-components/LogoTitle';
import HomeScreen from './src/components/homeScreen/HomeScreen';
import DetailsScreen from './src/components/detailScreen/DetailScreen';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home' ,
    navigationOptions: {headerStyle:{
      backgroundColor:'#f4511e'
    },
   headerTintColor: '#fff', //affect on font color of header title
     headerTitleStyle: {
       fontWeight: 'bold',
      }
     } 
    }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}