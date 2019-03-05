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
        <View style={styles.header}>
          <Text style={styles.white}>Ring Scheduler</Text>
        </View>
        <View style={styles.ring}>
          {
            this.state.dataSource.map((ring, key) => {
                return(
                  <Ring key={key} ring={ring}></Ring>
                );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1,
    backgroundColor: '#50aaf4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  white: {
    flex: 1,
    paddingTop: 40,
    fontSize: 30,
    color: '#fff'
  },
  ring: {
    flex: 9
  }
});
