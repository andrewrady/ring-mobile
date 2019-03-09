import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import { Container, Header, Body, Title, Content, List} from 'native-base';

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
      <Container>
        <Header>
          <Body>
            <Title>Rings</Title>
          </Body>
        </Header>
        <Content>
          <List>
            {
              this.state.dataSource.map((ring, key) => {
                  return(
                    <Ring key={key} ring={ring}></Ring>
                  );
              })
            }
          </List>
          
        </Content>
      </Container>
          
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
