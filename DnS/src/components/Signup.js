import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios'

export default class Singup extends Component{
    render(){
        return(
            <>
              <form>
                <input name ='firstName' placeholder='First Name' type='text' ></input>
                <input name ='lastName' placeholder='Last Name' type='text' ></input>
                <input name ='username' placeholder='Username' type='text' ></input>
                <input name ='phone' placeholder='Phone Number' type='number' ></input>
                <input name ='email' placeholder='Email' type='email' ></input>
                <DatePicker selected={this.state.birthday} onChange={this.handleChange} />
                <input name ='password' placeholder='Password' type='password' ></input>
                <button type='submit'>Signup</button>
              </form>
            </>
        )
    }
}
