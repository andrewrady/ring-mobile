import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Ring extends Component {
  render() {
    return (
      <View style={styles.ringContainer}>
        <Text style={styles.ring}>{ this.props.ring.RingNumber }</Text>
        <Text style={styles.ring}>{ this.props.ring.Age } </Text>
        <Text style={styles.ring}>{ this.props.ring.Rank }</Text>
        <Text style={styles.ring}>{ this.props.ring.Division }</Text>
        <Text style={styles.ring}>{ this.props.ring.Gender }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ringContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  ring: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 15,
  }
})

export default Ring;