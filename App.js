import React from 'react';
import { Container, Header, Body, Title, Content, Spinner } from 'native-base';
import BodyContent from './src/content.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  getRings = () => {
    return fetch('https://guarded-earth-10858.herokuapp.com/rings')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          activeRings: responseJson.filter(x => x.Status),
          upcomingRings: responseJson.filter(x => !x.Status)
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.getRings();
  }

  render() {
    if(this.state.isLoading){
      return(
        <Container>
          <Header>
            <Body>
              <Title>Rings</Title>
            </Body>
          </Header>
          <Content>
            <Spinner color="blue"></Spinner>
          </Content>
        </Container>
      )
    }

    return(
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Rings</Title>
          </Body>
        </Header>
        <BodyContent 
          onChange={this.getRings}
          activeRings={this.state.activeRings}
          upcomingRings={this.state.upcomingRings}>
        </BodyContent>
      </Container>
    );
  }
}