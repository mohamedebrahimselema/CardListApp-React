import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CardList from "./CardList"
import Form from './Form'

class App extends React.Component {
  
  state = {
    profiles: [],
  };
  AddProfileData = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {

    return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.AddProfileData} />
        <CardList profiles= {this.state.profiles}/>
    	</div>
    );
  }
}

export default App;
