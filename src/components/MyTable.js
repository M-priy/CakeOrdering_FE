import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
import { Link } from 'react-router-dom';


class orderform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      category: '',
      name: '',
      cost: '',
      paymode: '',
      delivery: '',
    
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
}
  
  handleSubmit(event) {
    event.preventDefault();
    const Data = {
      id: this.state.id,
      category: this.state.category,
      name: this.state.name,
      cost: this.state.cost,
      paymode: this.state.paymode,
     delivery:this.state.delivery,
    
    };
    
    console.log(Data)
    axios.post('http://localhost:8080/addcake', Data)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
alert("order placed");
  };
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Order Details</h2>

        <input
          placeholder=' ID'
          type="text"
          name="id"
          
          onChange={this.handleChange}
        />
        
        <input
          placeholder=' category '
          type="text"
          name="category"
          
          onChange={this.handleChange}
        />
        <input
          placeholder=' name'
          type="text"
          name="name"
         
          onChange={this.handleChange}
        />
        <input
          placeholder=' cost'
          type="text"
          name="cost"
       
          onChange={this.handleChange}
        />
         <input
          placeholder=' paymode'
          type="text"
          name="paymode"
       
          onChange={this.handleChange}
        />
        <input
          placeholder=' delivery'
          type="text"
          name="delivery"
       
          onChange={this.handleChange}
        />
       
       

         
        
       
                <button>ORDER</button>
                <Link to="/getdetail"><button>Show My Order</button></Link>
                            </form>
        );
    }
}
export default orderform;