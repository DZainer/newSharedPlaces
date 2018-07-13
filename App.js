import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShareLocation from './components/shareLocation';

import UsersMap from './components/mapComponent';

export default class App extends React.Component {

  state = {
    userLocation:null
  }

  onLocationHandler = () =>{
    navigator.geolocation.getCurrentPosition(position =>{
      console.log(position);
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      })
    },err => console.log(err));
    //TODO create backend get other users locations
    //Create an HTTP Request
    //One arg sends GET request
    fetch('<Request url>',{
      method:'POST',
      body: JSON.stringify({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
    .then(res=> console.log(res))
    .catch(err=>console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <ShareLocation onGetLocation={this.onLocationHandler}/>
        <UsersMap userLocation={this.state.userLocation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
