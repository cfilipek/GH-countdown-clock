import React , {Component} from "react";
import Clock from "./Clock"
import './App.css'
import {Form, FormControl, Button, Navbar} from 'react-bootstrap';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {

      deadline: 'July 12, 2019',
      eventToChange: 'Countdown to Senior Checkpoint',
      newDeadline: '',
      anEvent: '',
      brackets: '< >'
    }
  }

  changeDeadline () {
    this.setState({eventToChange: this.state.anEvent, deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div>
        <Navbar className= "sticky">
          <Navbar.Brand href="#home" className="padding-left">{this.state.brackets}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="padding-right">
              <a className="undo" href="#helpful">Helpful Resources</a>
            </Navbar.Text>
            <Navbar.Text className="padding-right">
              You got this!
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      <div className="App">
        <div className="App-title">{this.state.eventToChange}</div>
        <div className="App-subtitle">{this.state.deadline}</div>

        <div>
          < Clock
           deadline = {this.state.deadline}/>
           <div className="App-smalltitle">Don't freak out. Change the countdown to something you're looking forward to like a beach trip!</div>
        </div>
        <div>
          <Form inline className='center'>
            <FormControl placeholder='new event'
            onChange={event => this.setState({anEvent: event.target.value})}/>
            <FormControl placeholder='new date (plz format)'
            onChange={event => this.setState({newDeadline: event.target.value})}/>
            <Button onClick={()=> this.changeDeadline()}>Submit</Button>
        </Form>
        </div>
      </div>
      <div>
        <h1 className="center-title">Helpful Resources:</h1>
        <div id="helpful"></div>
      </div>
      <div className="footer">Created with help from skillshare vid by David Katz, Software Engineer - Coding Instructor</div>
      </div>
    )
  }
}

export default App;
