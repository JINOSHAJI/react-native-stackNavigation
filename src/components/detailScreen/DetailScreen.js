import React from 'react';
import { View,Image, Text,Button } from 'react-native';

export default class DetailsScreen extends React.Component {
    // A screen component can have a static property called 
   //  navigationOptions which is either an object or a 
   //  function that returns an object that contains various
   //   configuration options. The one we use for the header
   //    title is title, as demonstrated in the following example.
   
   //navigationOptions is a static property of a component.
   //this does not refer to an instance of the component and therefore no props are available
   
     // static navigationOptions = {
     //   title: 'Details'
      
     // };
   
     //navigation options as a funnction
   
     // navigation - 
     // The navigation prop for the screen, 
     // with the screen's route at navigation.state.
   
   //screenProps - The props passing from above the navigator component
   //navigationOptions - The default or previous options that would be used if new values are not provided
   
     static navigationOptions = ({navigation})=>{
          const {params}=navigation.state;
          return{
            title:params?params.title:'Detail Screen'
          };
     }
     render() {
       
   
       //navigation.state is an object which has properties like
       // key, params,routeName
       //here params recieves the parameters that we are passing via nagivate() method
       //{params}  this syntax will recieve the only params as object
   
        const {params} =this.props.navigation.state;
        const name= params ? params.name : null;
       const title =params ? params.title : null;
   
        console.log(params);
        
       return (
         <View style={{ flex: 5, alignItems: 'center', justifyContent: 'space-around' }}>
             <View>
                 <Text>Details Screen</Text>
                 <Text>Helllo {name} </Text>
                <Text>Title: {title} </Text>
            </View>
           <Button style={{flex:1}}
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button style={{flex:1}}
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
            />
   
    
       <Button  style={{flex:1}}
       title="Update the title"
       onPress={() => this.props.navigation.setParams({title: 'New Title!'})}
     />
         </View>
       );
     }
   }
   