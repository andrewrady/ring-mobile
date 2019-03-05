import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Ring extends Component {
  render() {
    return (
      <View>
        <Text>Ring Number { this.props.ring.RingNumber }</Text>
        <Text>Age { this.props.ring.Age } </Text>
        <Text>Rank { this.props.ring.Rank }</Text>
        <Text>Division { this.props.ring.Division }</Text>
        <Text>Gender { this.props.ring.Gender }</Text>
      </View>
    )
  }
}

export default Ring;