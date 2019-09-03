import React, { Component } from 'react';


export default class Login extends Component{

    render(){
        return(
            <>
            <h3>Login Component !</h3>
            <form>
              <input name='username' type='text' placeholder='Email or Username' onChange={this.checkLogin}></input>
              {this.state.isvaled}
              <input name='password' type='password' placeholder='Password' onChange={this.checkLogin}></input>
            </form>
              <button onClick={this.Login}>Login</button>
              {/* <a href='#' >Forget Password!</a> */}
            </>
        )
    }

}