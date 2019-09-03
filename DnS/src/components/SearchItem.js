import React, { Component } from 'react';
import axios from 'axios';
const END_POINT = `http://localhost:9000`

export default class SearchItem extends Component {
   
    state = {
        items: [],
        NewItem: {},
        listofItem : ''
    }
    

    getItem = () => {
        axios.get(END_POINT)
            .then(res => {
                this.setState({
                    items: [...this.state.items, res.data]
                })
            })

    }

    seacrhHandler = (e) => {
        let input = document.getElementById("in").value;
        let filter = input.toLowerCase();
        e.preventDefault();
        axios.get(END_POINT)
        .then(res=>{
            let getdata= res.data
        })
           
        if(filter===getdata)
        this.setState({
            listofItem: filter
        })
    }

    render() {
        
        return (

            <div>
                <form  onSubmit={this.seacrhHandler}>
                <input type="text" placeholder="Search any things ....."
                    id="input"

                />
                <button type="submit">Search</button>
                </form>
                
            </div>

        )
    }
}