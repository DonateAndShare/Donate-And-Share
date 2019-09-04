import React, { Component } from 'react'
import ItemSlice from './ItemSlice'
export default class ItemMapSlice extends Component {
    render() {
        const {users}= this.props
        return (
            <div>
               {users.map((items,idx)=>{
                  return <ItemSlice key={idx} items={items} />
               })} 
            </div>
        )
    }
}
