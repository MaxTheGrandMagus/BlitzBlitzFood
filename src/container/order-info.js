import React, {Component} from 'react';
import './order-info.css'

import computer from '../images/Order-Info/computer.png';
import scooter from '../images/Order-Info/scooter.png';
import money from '../images/Order-Info/money.png';
import right_arrow from '../images/Order-Info/right-arrow.png'

class OrderInfo extends Component {
    render() {
        return(
            <div className = "input-div">
                <img src={computer} height='100px' width='100px'></img>
                <span className="order-span"> <strong className="order-strong">ЗАКАЖИТЕ ЕДУ</strong> <br></br> из лучших кафе и ресторанов </span>

                <img className="arrow_right" src={right_arrow} height='40px' width='40px'></img>

                <img src={scooter} height='100px' width='100px'></img>
                <span className="order-span"> <strong className="order-strong">МЫ ДОСТАВИМ</strong> <br></br> прямо к вашей двери </span>

                <img className="arrow_right" src={right_arrow} height='40px' width='40px'></img>
                
                <img src={money} height='100px' width='100px'></img>
                <span className="order-span"> <strong className="order-strong">ОПЛАТИТЕ ЗАКАЗ</strong> <br></br> наличными </span>
            </div>
        );
    };
}

export default OrderInfo;