import React, { Component } from 'react';
import './Product.css'
import {Link,Route} from 'react-router-dom';
import ProductDetail from './ProductDetail';

class Product extends Component {
    
    render() {
        let {url}=this.props.match;

        return (
            <div>
                <ul className="ul">
                    {/* <li><Link to={url+"/1"}>冰箱</Link></li> */}
                    <li><Link to={`${url}/1`}>冰箱</Link></li>
                    <li><Link to={`${url}/2`}>电视机</Link></li>
                    <li><Link to={`${url}/3`}>空调</Link></li>
                    <li><Link to={`${url}/4`}>洗衣机</Link></li>   
                    <li><Link to={`${url}/5`}>冰柜</Link></li>    
                <Route path="/product/:id" component={ProductDetail}/>  
                </ul>
            </div>
        );
    }
}

export default Product;