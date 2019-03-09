import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Body, ListItem, Left, Right, Text } from 'native-base';

class Ring extends Component {
  render() {
    return (
      <ListItem>
        <Left>
           <Text>{ this.props.ring.RingNumber }</Text>
        </Left>
        <Body>
          <Text>{ this.props.ring.Age }</Text>
          <Text note>{ this.props.ring.Rank }</Text>
          <Text note>{ this.props.ring.Division }</Text>
        </Body>
        <Right>
          <Text note>{ this.props.ring.Gender }</Text>
        </Right>
      </ListItem>
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