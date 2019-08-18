import React, {Component} from 'react';
import OrderInfo from './container/order-info';
import Kitchens from './container/kitchens';
import Logo from './container/header'
import { Link, Switch } from 'react-router-dom';

class UI extends Component {

  render() {
    return (
      <div className="UI">
        <Logo />
        <OrderInfo />
        <Kitchens />
      </div>
    );
  }
}

export default UI;
