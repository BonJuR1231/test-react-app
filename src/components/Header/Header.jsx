import './Header.css';
import basket from '../images/basket.png';
import { useState } from 'react';
import Order from '../Orders/Order'

const showOrders = (props) => {
  let summ = 0;

  if (Array.isArray(props.order)) {
    props.order.forEach(el => {
      summ += Number.parseFloat(el.price);
    });
  }

  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summ">Сумма: {new Intl.NumberFormat().format(summ)}</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2 className="empty-title">Корзина пуста!</h2>
    </div>
  )
}
 

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false)

  const tg = window.Telegram.WebApp

  const onClose = () => {
    tg.close()
  }

  return (
    <header>
      <div className="content">
        <button onClick={onClose} className='cross-exit'></button>
        <span className="name-shop">BonJuRShop</span>
        <img src={basket} alt="" onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart ${cartOpen && 'active'}`} />
      
        {cartOpen && (
          <div className="shop-cart-content">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          
          </div>
        )}
      </div>
    </header>
  );
};