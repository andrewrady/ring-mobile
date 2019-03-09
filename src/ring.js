import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Body, ListItem, Left, Right, Text, Thumbnail } from 'native-base';

class Ring extends Component {
  render() {
    return (
      <ListItem avatar>
        <Left>
           <Thumbnail 
            style={styles.image} 
            source={ require('../assets/number-icon-1.png')}>
          </Thumbnail>
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
  image: {
    height: 40,
    width: 40,
    borderRadius: 40/2
  }
})

export default Ring;