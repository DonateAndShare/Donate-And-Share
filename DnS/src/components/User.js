import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBarUser from './NavBarUser';

import AddItem  from './AddItem';
import axios from 'axios';
class User extends Component{
    
render(){
   const{user}= this.props
   console.log('user in user.js', user) 
   return(
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
     
      <Link  exact to="/users/addItem">
        <button type="submit" onclick={this.additem}>AddItem</button>
        </Link>
        {/* <button type="submit" onclick={this.additem}>My item </button>
        <button type="submit" onclick={this.additem}>log out</button> */}
     
    {/* <AddItem  user={user}/> */}
    <NavBarUser/>
    </>
    )
}



}
export default User;
