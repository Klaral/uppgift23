import React, {Component} from "react";
import {actionAddProduct, actionHistory} from "../actions/actions.js";
import {connect} from "react-redux";


class AddProductPage extends Component {
    constructor(props) {
		super(props);
		this.state = {
			name: "",
			price: 0,
            image: ""
		}
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }
  render() {
    return (
        <div>    
          <input type="text" placeholder="Name" onChange={this.handleChangeName} value={this.state.name} />
          <input type="text" placeholder="Price" onChange={this.handleChangePrice} value={this.state.price}/>
          <input type="text" placeholder="Imageurl" onChange={this.handleChangeImage} value={this.state.image}/>
          <br /><button onClick={this.handleAddProduct}>Add product</button>
        </div> )
  }
        
    handleAddProduct(addNewProduct){
        console.log("när man klickar", this.state.price);
         let action = actionAddProduct({
            name: this.state.name, 
            price: this.state.price, 
            image: this.state.image })
        console.log("actionAddToBasket", action);
          this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
  }
        
    handleChangeName(event){
        this.setState({
            name: event.target.value
        })
    }
    handleChangePrice(event){
        this.setState({
            price: Number(event.target.value)
        })
    }
    handleChangeImage(event){
        this.setState({
            image: event.target.value
        })
    }
    /* handleAddProduct(e) {
         let action = actionAddProduct(addProduct);
        console.log("actionAddProduct");
          this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}*/  
   
}


    export default connect()(AddProductPage);
