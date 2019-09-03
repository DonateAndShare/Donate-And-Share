
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
export default class ShortDetails extends Component {
  state = {
    date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
    rating: 3.5
  };

  // getDate = () => {
  //   var date = new Date();

  //   this.setState({
  //     date: date
  //   });
  // }

  render() {
    const {rating,date} = this.state;
    return (

      <div>
        <p>Tiltle</p>
        <img />
        <StarRatings
          rating={rating}
          starRatedColor="orange"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="0px"
          
        />

        <p >{date}</p>




      </div>

    )
  }
}
