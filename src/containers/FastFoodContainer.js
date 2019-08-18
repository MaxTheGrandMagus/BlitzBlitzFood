import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import './FastFoodContainer.css'
import Shaurma from '../components/Shaurma';

import logo from '../images/Logo/logo.jpg'
import clock from '../images/Logo/clock.png'

export default class FastFoodContainer extends Component {

    render() {
        
        return (
           <Fragment>
                <div className="header">
                    <img className="logo" src={logo} width='300px' height='225px'></img>
                    <img className="clock" src={clock} width='75px' height='75px'></img>
                    <div className="worktimeDiv">Режим работы 24/7</div>

                    {/* <span className="first_number">(0)552</span>
                    <span className="second_number">(0)770</span>
                    <span className="third_number">(0)700</span>
                    <span className="main_number">931631</span> */}
                </div>

                <div className="ff-main">

                    <span className="ff-span">FAST-FOOD</span>

                    <div className="ff-divs">
                        <Link className="text-link" to="shaurma" >
                            <div className="shaurma">
                                <span>Шаурма</span>
                            </div>
                        </Link>

                        <Link className="text-link" to="hamburger" >
                            <div className="hamburger">
                                <span>Гамбургеры</span>
                            </div>
                        </Link>
            
                        <div className="frenchFries">
                            <span>Картофель</span>
                        </div>
            
                        <div className="hotdog">
                            <span>Хот-Доги</span>
                        </div>

                        <div className="chicken">
                            <span>Курица</span>
                        </div>

                        <div className="donuts">
                            <span>Пончики</span>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}
