import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import CategoryView from './CategoryView';
import ProductView from './ProductView';
import ShoppingCartView from './ShoppingCartView';

@inject('stores')
@observer
class Product extends Component {

    render() {
        console.log(this.props)
        if(this.props.match && this.props.match.path === '/category/:id') {
            return <CategoryView categoryId={this.props.match.params.id}/>;
        } else if(this.props.match && this.props.match.path === '/product/:id') {
            return <ProductView productId={this.props.match.params.id}/>;
        } else if(this.props.match && this.props.match.path === '/shoppingCart') {
            return <ShoppingCartView />;
        }
    }
}

export default Product;