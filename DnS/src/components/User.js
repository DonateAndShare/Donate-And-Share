import React, { Component } from 'react';


import AddItem  from './AddItem';
import axios from 'axios';
class User extends Component{
    
render(){
   const{user}= this.props
    return(
     <>
        <button type="submit" onclick={this.additem}>AddItem</button>
     
    <AddItem  user={user}/>
    </>
    )
}



}
export default User;
