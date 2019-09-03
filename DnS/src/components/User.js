import React, { Component } from 'react';


import AddItem  from './AddItem';
import axios from 'axios';
class User extends Component{
    
render(){
   const{user}= this.props
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
      <div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item disabled" href="#">Disabled link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
        <button type="submit" onclick={this.additem}>AddItem</button>
        <button type="submit" onclick={this.additem}>My item </button>
        <button type="submit" onclick={this.additem}>log out</button>
     
    <AddItem  user={user}/>
    </>
    )
}



}
export default User;
