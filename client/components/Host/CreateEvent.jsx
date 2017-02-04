import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import {Jumbotron, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Image} from 'react-bootstrap';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '',
      endTime: '',
      day: '', 
      time: '',
      week: '',
      month: '',
      cuisine: '',
      address: '',
      city: '',
      state: '',
      maxseats: '',
      description: '',
      title: ''
    };
  }
  postEvent(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/postevent',
      data: {
        'startTime': this.state.startTime,
        'endTime': this.state.endTime,
        'day': this.state.day, 
        'time': this.state.time,
        'week': this.state.week,
        'month': this.state.month,
        'cuisine': this.state.cuisine,
        'address': this.state.address,
        'city': this.state.city,
        'state': this.state.state,
        'maxseats': this.state.maxseats,
        'description': this.state.description,
        'title': this.state.title
      },
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err);
      },
      dataType: 'json'
    });
  }
  inputTitle (e) {
    this.setState({title: e.target.value});
  }
  inputStartTime (e) {
    this.setState({startTime: e.target.value});
  }
  inputEndTime(e) {
    this.setState({endTime: e.target.value});
  }
  inputDay (e) {
    this.setState({day: e.target.value});
  }
  inputTime (e) {
    this.setState({'time': e.target.value});

  }
  inputWeek (e) {
    this.setState({'week': e.target.value});
  }
  inputMonth (e) {
    this.setState({'month': e.target.value});
  }
  inputCuisine (e) {
    this.setState({'cuisine': e.target.value});
  }
  inputAddress (e) {
    this.setState({'address': e.target.value});
  }
  inputCity (e) {
    this.setState({city: e.target.value});
  }
  inputState (e) {
    this.setState({state: e.target.value});
  }
  inputMaxSeats (e) {
    this.setState({maxseats: e.target.value});
  }
  inputDescription(e) {
    this.setState({description: e.target.value});
  }

  render () {
    return (
      <div >
       <Grid fluid>
        <Row className="show-grid">
          <Col md={4} ><code> Title </code></Col>
          <Col md={8}>
            <form>
               <FormGroup
            controlId="formBasicText"
            >
              <FormControl
              onChange = {this.inputTitle.bind(this)}
              type="text"
              placeholder = 'Title'
              />
        <FormControl.Feedback />
        </FormGroup>
            </form>
          </Col>
       </Row>

       <Row className="show-grid">
         <Col md={4} ><code> Time </code></Col>
         <Col md={4}>
          <form>
           <FormGroup
             controlId="formBasicText"
           >
            <FormControl
            onChange = {this.inputStartTime.bind(this)}
              type="text"
              placeholder = 'Start Time'
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
         </Col>
         <Col md={4}>
          <form>
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
            onChange = {this.inputEndTime.bind(this)}
              type="text"
              placeholder = 'End Time'
            />
            <FormControl.Feedback />
          </FormGroup>
       </form>
         </Col>
       </Row>

       <Row className="show-grid">
         <Col md={4} ><code> Day/Week/Month</code></Col>

         <Col md={2}>
           <form>
           <FormGroup
            controlId="formBasicText"
           >
           <FormControl
              type="text"
              placeholder = 'D'
              onChange = {this.inputDay.bind(this)}
            />
          <FormControl.Feedback />
          </FormGroup>
          </form>
        </Col>

          <Col md={2}>
          <form>
          <FormGroup
            controlId="formBasicText"
          >
           <FormControl
              type="text"
              placeholder = 'W'
              onChange = {this.inputWeek.bind(this)}
            />
           <FormControl.Feedback />
          </FormGroup>
        </form>
         </Col>

          <Col md={2}>
          <form>
          <FormGroup
            controlId="formBasicText"
          >
          <FormControl
              type="text"
              placeholder = 'M'
              onChange = {this.inputMonth.bind(this)}

            />
            <FormControl.Feedback />
          </FormGroup>
         </form>
         </Col>
       </Row>

        <Row className="show-grid">
         <Col md={4} ><code> Cusine/Theme </code></Col>

         <Col md={6}>
          <form>
           <FormGroup
            controlId="formBasicText"
           >
            <FormControl
              type="text"
              onChange = {this.inputCuisine.bind(this)}
              placeholder = 'e.g. Indian'
             />
           <FormControl.Feedback />
           </FormGroup>
          </form>
         </Col>
       </Row>

        <Row className="show-grid">
         <Col md={4} ><code> Address </code></Col>

         <Col md={4}>
          <form>
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
              onChange = {this.inputAddress.bind(this)}
              type="text"
               value = {this.state.address}
            />
            <FormControl.Feedback />
          </FormGroup>
          </form>
         </Col>
       </Row>


        <Row className="show-grid">
         <Col md={4} ><code> City/State </code></Col>
         <Col md={4}>
          <form>
           <FormGroup
             controlId="formBasicText"
           >
            <FormControl
            onChange = {this.inputCity.bind(this)}
              type="text"
              placeholder = 'City'
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
         </Col>
         <Col md={4}>
          <form>
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
            onChange = {this.inputState.bind(this)}
              type="text"
              placeholder = 'State'
            />
            <FormControl.Feedback />
          </FormGroup>
       </form>
         </Col>
       </Row>

         <Row className="show-grid">
         <Col md={4} ><code> Max Seats </code></Col>
         <Col md={4}>
         <form>
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
            onChange = {this.inputMaxSeats.bind(this)}
              type="text"
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
         </Col>
       </Row>


       <Row className="show-grid">
         <Col md={4} ><code> Description </code></Col>
         <Col md={8}>
          <form>
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
              type="text"
              componentClass="textarea"
              placeholder = "What should your guests expect?"
              onChange = {this.inputDescription.bind(this)}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
         </Col>
       </Row>


       &nbsp;
       <Row className="show-grid">
       <Col md={2}>
        <form onSubmit={this.postEvent.bind(this)}>
              <Button type="submit"> Create an Event!</Button>
         </form>
        </Col>
       </Row>
     </Grid>
    </div>
    );
  }
}

module.exports = CreateEvent;
