import React, { Component } from 'react';
import {Button,Fade,Well } from 'react-bootstrap';
class Example extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button onClick={()=> this.setState({ open: !this.state.open })}>
          关于我们
        </Button>
        <Fade in={this.state.open}>
          <div>
            <Well>
              杯酒释兵权，杯酒斩华雄，杯酒江山倾覆
            </Well>
          </div>
        </Fade>
      </div>
    );
  }
}
class About extends Component {
    render() {
        return (
            <div>
                <Example/>
            </div>
        );
    }
}

export default About;