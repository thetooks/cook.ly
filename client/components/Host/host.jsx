import React from 'react';
import {Grid, Row, Col, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import Calendar from 'rc-calendar';
import Thumbnail from './thumbnail.jsx';
import $ from 'jquery';


class Host extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      events: []
    };

    this.getAllEvents = this.getAllEvents.bind(this);
    this.calendarClick = this.calendarClick.bind(this);
    this.eventList = this.eventList.bind(this);
  }

  getAllEvents() {
    var context = this;

    $.ajax({
      url: '/api/allUpcommingEvents',
      method: 'GET',
      success: function(data) {
        context.setState({
          events: data
        });
      },
      error: function(err, data) {
        console.log(err, data);
        throw err;
      }
    });
  }

  eventList() {
    var list = this.state.events.map((item) =>
      <li>{item.TimeStamp}</li>
    );
    return (
      <div>
        <h4>Upcoming Events</h4>
        <ul>{list}</ul>
      </div>
    );
  }

  calendarClick() {
    this.setState({
      showCalendar: !this.state.showCalendar
    });
    this.getAllEvents();
  }

  render() {
    return (
      <div >
        <h1 className="spacerL90">HOST DASHBOARD</h1>
        <Grid>
          <Row>  
            <Col md={12}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button bsStyle="primary">Edit Profile</Button>
                  <Button >Schedule Event</Button>
                  <Button onClick={this.calendarClick}>View Calendar</Button>
                  <Button >Create Menu</Button>
                  <Button >View Menus</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="spacerT10">
            <Col sm={4}>
              {Thumbnail} 
            </Col>
            <Col sm={4}>
              {this.state.showCalendar && this.eventList()}
            </Col>
            <Col sm={4}>
              {this.state.showCalendar && <Calendar />}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

module.exports = Host;

