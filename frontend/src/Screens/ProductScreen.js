import React, { Component } from 'react';
//import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductScreen extends Component {
    // console.log(props.match.params.id + "props");
    // console.log(data.products[0].id) ;

    constructor(props){
        super(props);
            this.state = {
            data : '',
            id : props.match.params.id 

        }
    }

    componentDidMount(props){
        axios.get("http://localhost:8080/api/product/" + this.state.id)
        .then(response => {
            this.setState({
                data : response.data
            })

        
           // debugger;
        }
        );
        debugger;

        
    }

    render() {
    return (
        <div>
            <div className="back-to-result">
                <Link className="fa fa-arrow-left" to="/">Back to Result</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={this.state.data.image} alt="product" />
                </div>

                <div className="details-info">
                    <ul>
                        <li><h4>{this.state.data.name}</h4></li>
                        <li>{this.state.data.rating} stars {this.state.data.numReviews} views</li>
                        <li>
                            <b>{this.state.data.price}</b>
                        </li>
                        <li>
                            Description :
                            <div>
                                <p>bla bla</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>Product Name : {this.state.data.name}</li>
                        <li>Price : {this.state.data.price}</li>
                        <li>Status : {this.state.data.status}</li>
                        <li>Quantity  :
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </li>
                        <li>
                            <button className="button" >Add to Cart</button>
                        </li>

                    </ul>

                </div>
            </div>

        </div>
    )
    }
}

export default ProductScreen;