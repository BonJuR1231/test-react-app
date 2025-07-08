import React from 'react';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Category from './components/Category/Category';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Фулл 6 + МК выш',
          img: 'Фулл 6 сет.png',
          category: 'sets',
          price: '1.5 бун'
        },
        {
          id: 2,
          title: 'Сопровождение на 8 карту',
          img: 'Фулл 6 сет.png',
          category: 'accompaniment',
          price: '5.0 бун'
        },
        {
          id: 3,
          title: 'Буст метро валюты',
          img: 'Фулл 6 сет.png',
          category: 'boost',
          price: '7.5 бун'
        },
        {
          id: 4,
          title: 'Фулл 6 золото',
          img: 'Фулл 6 сет.png',
          category: 'gold',
          price: '10.0 бун'
        },{
          id: 5,
          title: 'МК14 золото',
          img: 'Фулл 6 сет.png',
          category: 'gold',
          price: '5 бун'
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="App">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Category chooseCategory={this.chooseCategory} />
        <ProductList items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item]})
  }
}
  

export default App;
