import React, { Component } from 'react'
// import Signup from './Signup'
// import Login from './Login'


import { Link } from 'react-router-dom'

export class Navbar extends Component {


    render() {

        return (
            <>

                          {/* <div className="form-group col-md-4">
                    <label>State</label>
                    <select className="form-control" >
                       <option selected></option> 
                    
                      <option >AddItem</option>
        
                                   <option>My Item</option>
                                    <option >log out</option>
                    </select>
                  </div> */}
                   <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link exact to="/users/addItem">AddItem</Link>
        </li>
        <li>
          <Link to="/myItem"> myItem</Link>
        </li>
      </ul>
                <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light ">
                    <Link to='/login'>
                      <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0" type="button">login </button>
                    </Link>
                    <Link to='/signup'>
                      <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0" type="button">signup </button>
                    </Link>
                    {/* <Signup /> */}
                </nav>
            </>
        );
    }
}


export default Navbar
