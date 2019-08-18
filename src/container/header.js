import React, {Component} from 'react';
import './header.css'

import logo from '../images/Logo/logo.jpg'
import clock from '../images/Logo/clock.png'

class Logo extends Component {
    render() {
        return(
            <div className="header">
                <img className="logo" src={logo} width='300px' height='225px'></img>
                <img className="clock" src={clock} width='75px' height='75px'></img>
                <div className="worktimeDiv">Режим работы 24/7</div>

                    {/* <span className="first_number">(0)552</span>
                    <span className="second_number">(0)770</span>
                    <span className="third_number">(0)700</span>
                    <span className="main_number">931631</span> */}
            </div>
        );
    }
}

export default Logo;