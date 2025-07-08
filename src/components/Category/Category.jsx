import React, { Component } from 'react'
import './Category.css'

export class Category extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'items',
                    name: 'Предметы'
                },
                {
                    key: 'sets',
                    name: 'Сеты'
                },
                {
                    key: 'accompaniment',
                    name: 'Сопровождения'
                },
                {
                    key: 'boost',
                    name: 'Буст'
                },
                {
                    key: 'gold',
                    name: 'Золото'
                },
            ] 
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Category