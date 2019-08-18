import React, { Component } from 'react';
// import '../components/Shaurma.css';


class Hamburger extends Component {
  render() {
    return (
      <div className="header">
        {
          this.props.data.map((item, index) => {
            if (item.title === "Гамбургер") {
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
export default Hamburger;