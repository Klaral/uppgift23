import React, { Component } from 'react';
import '../App.css';
import {actionRemoveFromBasket, actionHistory} from "../actions/actions.js";
import {connect} from 'react-redux';


 class Basket extends Component {
  render() {
    let i = 0;
    const productList = this.props.basket.map(p => <li key={i++}>{p.name}, {p.price}kr <br /> <img src={p.image}/><br />
     <button onClick={() => this.handleClickRemoveFromBasket(p)}>Remove from basket</button>
    </li>);
    console.log(this.props.basket);
    let sum = 0;
    this.props.basket.forEach(p=>{
       sum += p.price; 
    });
    return (
        <div>
            <p>Din kundvagn</p>
            <ul>
                {productList}
            </ul>
            <div>Antal varor i kundvagnen: {productList.length}<p>Totalt pris: {sum}kr</p>
            </div>
        </div>
        
    );
  }
       handleClickRemoveFromBasket(DeleteProductFromBasket) {
         let action = actionRemoveFromBasket(DeleteProductFromBasket);
        console.log("DeleteProductFromBasket");
          this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
}  
}


export default connect()(Basket);


