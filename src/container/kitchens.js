import React, {Component} from 'react';
import './kitchens.css'
import { Link } from 'react-router-dom';

class Kitchens extends Component {
    render() {
        return(
            <div className="kitchens">
               <Link className="s" to="/FastFoodContainer"><div className="fast-food">
                    <span>Фаст Фуд</span>
                </div></Link>

                <div className="national-food">
                    <span>Национальная кухня</span>
                </div>

                <div className="japan-food">
                    <span>Японская кухня</span>
                </div>
            </div>
        );
    }
}

export default Kitchens;