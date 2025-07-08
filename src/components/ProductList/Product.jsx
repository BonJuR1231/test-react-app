import React, { Component } from 'react'
import './ProductList.css'

export class Product extends Component {
  render() {
    let image = "./images/" +this.props.item.img;
    return (
      <div className="item">
        <img src={image} alt=''/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}</p>
        <span className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</span>
      </div>
    )
  }
}

export default Product