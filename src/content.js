import React, {Component} from 'react';
import { Text, Content, List, Tab, Tabs } from 'native-base';

import Ring from './ring.js'


class BodyContent extends Component {
  render() {
    return (
      <Tabs>
      <Tab heading="Active">
        <Content>
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
                <Text>There is no active rings</Text>
            }
          </List>
        </Content>
      </Tab>
      <Tab heading="Upcoming">
        <Content>
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
                <Text>There is no active rings</Text>
            }
          </List>
        </Content>
      </Tab>

    </Tabs>
    )
  }
}

export default BodyContent;