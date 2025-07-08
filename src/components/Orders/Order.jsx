import React, { Component } from 'react';
import './Order.css';

export class Item extends Component {

  render() {
    let image = "./images/" +this.props.item.img;
    
    return (
        <div className='order-item'>
          <img src={image} alt=''/>
          <div className="title-and-price">
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.price}</p>
          </div>
          <span  className="delete-order" onClick={() => this.props.onDelete(this.props.item.id)}></span>
      </div>
    )
  }
}

export default Item