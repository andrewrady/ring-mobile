import React, { Component } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { Text, Content, List, Tab, Tabs } from 'native-base';
import Ring from './ring.js'

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true})
    this.props.onChange()
      .then(() => {
        this.setState({refreshing: false})
      })
  }

  render() {
    return (
      <Tabs>
      <Tab heading="Active">
        <Content refreshControl={<RefreshControl 
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}/>}>
          <List>
            {
              this.props.activeRings.length 
              ?
                this.props.activeRings.map((ring, key) => {
                    return(
                      <Ring key={key} ring={ring}></Ring>
                    );
                }) 
              :
                <Text style={styles.centeredText}>There is no active rings</Text>
            }
          </List>
        </Content>
      </Tab>
      <Tab heading="Upcoming">
        <Content refreshControl={<RefreshControl 
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}/>}>
          <List>
            {
              this.props.upcomingRings.length 
              ?
                this.props.upcomingRings.map((ring, key) => {
                    return(
                      <Ring key={key} ring={ring}></Ring>
                    );
                }) 
              :
                <Text style={styles.centeredText}>There is no upcoming rings</Text>
            }
          </List>
        </Content>
      </Tab>

    </Tabs>
    )
  }
}

const styles = StyleSheet.create({
  centeredText: {
    textAlign: 'center',
    marginTop: 215,
    fontSize: 25
  }
})

export default BodyContent;