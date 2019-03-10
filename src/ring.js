import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Body, ListItem, Left, Right, Text, Thumbnail } from 'native-base';
import image from './ring-images.js';

class Ring extends Component {
  render() {
    return (
      <ListItem avatar>
        <Left>
           <Thumbnail 
            style={styles.image} 
            source={image[this.props.ring.RingNumber]}>
           </Thumbnail>
        </Left> 
        <Body>
          <Text>{ this.props.ring.Rank }</Text>
          <Text note>{  this.props.ring.Age}</Text>
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