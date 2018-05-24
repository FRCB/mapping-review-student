import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventCard from './EventCard'

class App extends Component {
  constructor() {
    super()

    this.state = {
      events: [{ id: 1, name: 'John', title: 'Rock Skipping', desc: "We're going to skip some rocks on water and it's going to be oh so fun." },
      { id: 2, name: 'Alexis', title: 'Chip Dipping', desc: "We're going to dip so many chips in so many dips. I may even bring cheese. The good kind." },
      { id: 3, name: 'Riley', title: 'Speed Walking', desc: "We will be walking at insane speeds, but never having both feet off the ground at the same time." }],
      nameInput: '',
      titleInput: '',
      descInput: ''
    }

    this.id = 4
    this.editEvent = this.editEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
  }

  createEvent() {
    let post = { id: this.id, name: this.state.nameInput, title: this.state.titleInput, desc: this.state.descInput }
    this.setState({ events: [...this.state.events, post] })
    this.id++
  }

  deleteEvent(id) {
    let eventsCopy = this.state.events.slice()
    for (let i = 0; i < eventsCopy.length; i++) {
      if (eventsCopy[i].id === id) {
        eventsCopy.splice(i, 1)
      }
    }
    this.setState({ events: eventsCopy })
  }

  editEvent(id, name, title, description) {
    let eventsCopy = this.state.events.slice()
    for (let i = 0; i < eventsCopy.length; i++) {
      if (eventsCopy[i].id === id) {
        eventsCopy[i].name = name
        eventsCopy[i].title = title
        eventsCopy[i].description = description
      }
    }
    this.setState({ events: eventsCopy })
  }

  // editEvent(event) {
  //   let eventsCopy = this.state.events.slice()
  //   for (let i = 0; i < eventsCopy.length; i++) {
  //     if(eventsCopy[i].id === event.id) {
  //       eventsCopy[i] = event
  //     }
  //   }
  //   this.setState({events: eventsCopy})
  // }

  render() {
    let mapped = this.state.events.map((event, i) => {
      return <EventCard
        key={i + event.name}
        event={event}
        editEvent={this.editEvent}
        deleteEvent={this.deleteEvent}
      />
    })
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mapping Components</h1>
        </header>
        <h2>Create Event</h2>
        <h3>Name</h3>
        <input onChange={e => this.setState({ nameInput: e.target.value })} />
        <h3>Title</h3>
        <input onChange={e => this.setState({ titleInput: e.target.value })} />
        <h3 id='desc'>Description</h3>
        <textarea onChange={e => this.setState({ descInput: e.target.value })} />
        <br /> <br />
        <button onClick={() => this.createEvent()}>Create Event</button>
        <hr />
        <h2>Events :D</h2>
        <div className='eventsDisplay'>
          {mapped}
        </div>
      </div>
    );
  }
}

export default App;
