import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';

import Ring from './src/ring.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://guarded-earth-10858.herokuapp.com/rings')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {

        });
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    if(!this.state.dataSource.length) {
      return(
        <Text>No Rings are listed</Text>
      )
    }

    return(
      <View style={styles.container}>
      {
        this.state.dataSource.map((ring, key) => {
            return(
              <Ring key={key} ring={ring}></Ring>
            );
        })
      }
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
