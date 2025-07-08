import React, { Component } from 'react'
import Product from './Product'

export class ProductList extends Component {
  render() {  
    return (
      <main>
        {this.props.items.map(el => (
          <Product key={el.id} item={el} onAdd ={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default ProductList