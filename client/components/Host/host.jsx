import React from 'react';
import {Grid, Row, Col, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import Thumbnail from './thumbnail.jsx';

class Host extends React.Component {
  
  render() {
    return (
      <div >
        <h1 className="spacerL90">HOST DASHBOARD</h1>
        
        <Grid>
          <Row>  
            <Col xs={8} md={8}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button bsStyle="primary">Edit Profile</Button>
                  <Button >Schedule Event</Button>
                  <Button >View Calendar</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="spacerT10">
            <Col xs={4} md={4}>
              {Thumbnail} 
            </Col>
          </Row>
          
        </Grid>
      </div>
    );
  }
}

module.exports = Host;

