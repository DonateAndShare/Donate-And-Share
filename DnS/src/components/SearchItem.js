import React, { Component } from 'react';
import axios from 'axios';
const END_POINT = `http://localhost:9000`

export default class SearchItem extends Component {

    state = {
        items: [],
        NewItem: {},
        ListOfItem: ''
    }


    
    seacrhHandler = (e) => {
        e.preventDefault();
        let input=document.getElementById("input").value;
        console.log('input', input);
        if (input==="" ) {
            alert("Write in Search bar to show Items!")
        }
        else{
        this.props.SearchItemHandler({input}) ;

        }
    }

    render() {

        return (

            <div>
                <form onSubmit={this.seacrhHandler}>
                    <input type="text" placeholder="Search any things ....."
                        id="input"

                    />
                    <button type="submit">Search</button>
                </form>

            </div>

        )
    }
}