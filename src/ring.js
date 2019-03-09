import React, { Component } from 'react';
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

export default Ring;