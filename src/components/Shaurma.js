import React, { Component } from 'react';
import '../components/Shaurma.css';


class Shaurma extends Component {
  render() {
    return (
      <div className="header">
        <h1>Olalalala</h1>
        {
          this.props.data.map((item, index) => {
            if (item.title === "Шаурма") {
              return (
                <div className="fastFoots">
                  <span>{item.place}</span>
                  <span>{item.title}</span>
                  <img
                    alt={item.name}
                    src={item.img}
                  ></img>
                  <span>{item.cost} сом</span>
                </div>
              )
            }
          })
        }
      </div>
    );
  };
};
export default Shaurma;