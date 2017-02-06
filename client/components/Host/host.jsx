import React, { PropTypes as T } from 'react';
import AuthService from '../../utils/AuthService';
import {Grid, Row, Col, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';

import Calendar from 'rc-calendar';
import Profile from './profile.jsx';
import CreateEvent from './CreateEvent.jsx';
import MenuItem from './menuItem.jsx';
import MenuBuilder from './menubuilder.jsx';
import DisplayMenus from './displaymenus.jsx';
import ViewEvents from './ViewEvents.jsx';

class Host extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      createEvent: false,
      showMenuBuilder: false,
      showMenuViewer: false,
      showCalendar: false,
      date: '',
      profile: props.auth.getProfile()
    };
    this.calendarClick = this.calendarClick.bind(this);
    
    // listen to profile_updated events to update internal state
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  saveUserData () {
    var host = {};
    host.firstName = this.state.profile.given_name;
    host.lastName = this.state.profile.family_name;
    host.email = this.state.profile.email;
    
    var data = JSON.stringify(host); 
    fetch('./api/hosts', {  
      method: 'post',
      headers: {  
        "Content-type": "application/json; charset=UTF-8"  
      },   
      body: data  
    })
    .catch(function (error) {  
      console.log('Request failed', error);  
    });
   
    
  }

  logout() {
    // destroys the session data
    this.props.auth.logout();
    // redirects to login page
    this.context.router.push('/login');
  }

  calendarClick() {
    this.setState({
      createEvent: false,
      showMenuBuilder: false,
      showMenuViewer: false,
      showCalendar: !this.state.showCalendar
    });
  }

  EventClick () {
    this.setState({
      createEvent: !this.state.createEvent,
      showMenuBuilder: false,
      showMenuViewer: false,
      showCalendar: false
    });
  }

  menuBuilderToggle() {
    this.setState({
      createEvent: false,
      showMenuBuilder: !this.state.showMenuBuilder,
      showMenuViewer: false,
      showCalendar: false
    });
  }

  menuViewerToggle() {
    this.setState({
      createEvent: false,
      showMenuBuilder: false,
      showMenuViewer: !this.state.showMenuViewer,
      showCalendar: false
    });
  }

  handleDateChange() {

    // this.setState({date: document.getElementsByClassName('rc-calendar-input')[0].value }, function () { console.log(this.state.date); } );
    this.setState({date: document.getElementsByClassName('rc-calendar-input')[0].value});
    // console.log(document.getElementsByClassName('rc-calendar-input')[0].value);
    
  }
  render() {
    const { profile } = this.state;
    this.saveUserData();
    return (
      <div >
        <h1 className="spacerL90">HOST DASHBOARD</h1>
        <Grid>
          <Row>  
            <Col md={12}>
              <ButtonToolbar justified>
                <ButtonGroup >
                  <Button bsStyle="primary">Edit Profile</Button>
                  <Button onClick={this.calendarClick}>View Calendar</Button>
                  <Button onClick={this.EventClick.bind(this)}>Schedule Event</Button>
                  <Button onClick={this.menuBuilderToggle.bind(this)}>Create Menu</Button>
                  <Button onClick={this.menuViewerToggle.bind(this)}>View Menus</Button>
                  <Button onClick={this.logout.bind(this)}>Sign Out</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="spacerT10">
            <Col sm={4}>
              <Profile profile={profile} /> 
            </Col>
            <Col xs={2} md={2}>
              {this.state.showMenuBuilder && <MenuBuilder profile={profile} />}  
            </Col>
            <Col sm={8}>
              {this.state.showMenuViewer && <DisplayMenus profile={profile} />}
            </Col>  
            <Col sm={4}>
              {this.state.showCalendar && <ViewEvents />}
            </Col>
            <Col sm={4}>
              {this.state.showCalendar && <Calendar />}
            </Col>
             <Col sm={4}>
              {this.state.createEvent && <CreateEvent date = {this.state.date} />}
            </Col>
             <Col sm={4}>
              {this.state.createEvent && <Calendar onChange = {this.handleDateChange.bind(this) }/> }

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

module.exports = Host;
