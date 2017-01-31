import React from 'react';
import {Grid, Row, Col, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import Thumbnail from './thumbnail.jsx';
import UserBookings from './userBookings.jsx'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewBookings: false
    };

    this.handleViewBookings = this.handleViewBookings.bind(this);
  }

  handleViewBookings() {
    this.setState({viewBookings: !this.state.viewBookings});
  }

  render() {
    return (
      <div >
        <h1 className="spacerL90">USER DASHBOARD</h1>
        
        <Grid>
          <Row>  
            <Col xs={8} md={8}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button bsStyle="primary">Edit Profile</Button>
                  <Button onClick={this.handleViewBookings}>View Bookings</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="spacerT10">
            <Col sm={4}>
              {Thumbnail} 
            </Col>
            <Col sm={8}>
              {this.state.viewBookings && <UserBookings />}
            </Col>
          </Row>
          
        </Grid>
      </div>
    );
  }
}

module.exports = User;

