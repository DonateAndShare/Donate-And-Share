import React, { Component } from 'react'
import Signup from './Signup'
import Login from './Login'


import { Link } from 'react-router-dom'
import { thisTypeAnnotation } from '@babel/types';

export class Navbar extends Component {
  state ={
     hide:false
   
  }
   onClick=()=>{   
   this.setState({hide:true})    
   }

    render() {
       const styleForSignUp =(this.state.hide&&this.props.user.username) ? {display :'none'}:{};
       const styleForlogIN =this.props.user.username ? {display :'none'}:{};
       const styleForlogOut =this.props.user.username ? {}:{display :'none'};
       const styleFormyitem =this.props.user.username ? {}:{display :'none'};
      //  const styleForadditem =this.props.user.username ? {}:{display :'none'};
       

        return (
          <>    
          <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light ">
          <Link to="/"> <button  className="btn btn-outline-info  col-12 col-lg-1 my-sm-0">
                 Home
                </button></Link>
                  <Link  style={styleFormyitem} exact to="/users/addItem">
                <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0">AddItem</button>

                  </Link>
                
                    <Link  style={styleFormyitem} onClick={this.props.setMyItem} to="/ItemMapSlice" >
                <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0">myItem</button>

                    </Link>

                    <Link  onClick={this.props.setMyItem} to="/" >
                <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0">logout</button>

                    </Link>
                

              <Link style={styleForlogIN} to='/login'>
                <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0" type="button">login </button>
              </Link>
              <Link  to='/signup'>
                <button style={styleForSignUp} className="btn btn-outline-info  col-12 col-lg-1 my-sm-0" type="button" onClick={this.onClick} >signup </button>
              </Link>
              {/* <Signup /> */}
          </nav>
          </>
        );
    }
}


export default Navbar
// style={{"display": "none"}}