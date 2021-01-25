import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';



class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/product/")
        .then(response => {
            this.setState({
                data : response.data
            })
           // debugger;
        }
        );
    }

    render ( ) {
    return (
       
        <ul className="products">
            {
                this.state.data.map(product =>
                    <li key={product.id}>

                        <div className="product">
                            <Link to={'/product/' + product.id}>
                                <img className="product-image" src={product.image} alt="procduct" /></Link>

                            <div className="product-name">
                                <Link to={'/product/' + product.id}>{product.name}</Link>
                            </div>
                            <div className="product-brand">
                                {product.brand}
                            </div>
                            <div className="product-price">
                                {product.price} TL
                            </div>
                            <div className="product-rating">
                                {product.rating} Stars over {product.numReviews}
                            </div>
                            <button className="add-cart">Add Cart</button>
                        </div>

                    </li>
                )

            }
            
        </ul>
    )
        }
}

export default HomeScreen;