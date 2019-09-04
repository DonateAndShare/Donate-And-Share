import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
export default class ShortDetails extends Component {
  state = {
    
    item:{
    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
    Tiltle:"",
    rating: 0,
    img:"",
    category:'',
    phone:"",
    location:"",
    isAvalible:"",
    itemDescription:""
  }
   
  };
  getItem = () => {
    axios
      .get(`http://localhost:9000/itemSlice/user`)
      
      .then(res => {
        const data=res.data
          this.setState({item: {
            ...data.item,
    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            Tiltle:data.Tiltle,
            img:data.img,
            category:data.category
          } });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // let array=[];
  // res.data.map(ele=>{
  // array.push(ele.items)
  // })
 

  changeRating=( newRating,name)=> {
    console.log(newRating)
    console.log(name)
    this.setState({
     item:{...newRating.item,
            rating:newRating,
    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),

    } 
    });
  }

  render() {
    const { item } = this.state;
    return (

      <div>
        <p>{item.Tiltle}</p>
        <img />
        <StarRatings
          rating={item.rating}
          starRatedColor="orange"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="0px"

        />
        <p>category:{item.category}</p>
          
        <p> phone:{item.phone}  </p>
    <p>location:{item.location}</p>
    <p>  isAvalible:{item.isAvalible}</p>
    <p>itemDescription:{item.itemDescription}</p>


        <p >{item.date}</p>




      </div>

    )
  }
}
