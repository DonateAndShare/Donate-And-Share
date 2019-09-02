import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios'

export default class Singup extends Component{
  state = {
    users: {
      firstName: '',
      lastName:'',
      username:'',
      phone:'',
      email:'',
      // birthday: new Date(),
      birthday:'',
      password:'',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange = date => {
    this.setState({
      birthday: date
    });
  };

  render(){
      return(
          <>
            <form>
              <input onChange={this.onChange} name ='firstName' placeholder='First Name' type='text' ></input>
              <input onChange={this.onChange} name ='lastName' placeholder='Last Name' type='text' ></input>
              <input onChange={this.onChange} name ='username' placeholder='Username' type='text' ></input>
              <input onChange={this.onChange} name ='phone' placeholder='Phone Number' type='number' ></input>
              <input onChange={this.onChange} name ='email' placeholder='Email' type='email' ></input>
              <DatePicker selected={this.state.birthday} onChange={this.handleChange} />
              <input onChange={this.onChange} name ='password' placeholder='Password' type='password' ></input>
              <button type='submit'>Signup</button>
              {console.log(this.state)}
            </form>
          </>
      )
  }
}
