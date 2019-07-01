import React, {Component} from 'react';

import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class ShoppingCartItem extends Component {

    state = {
        product : null
    };

    async componentDidMount() {
        await this.props.stores.ProductStore.fetchItem(this.props.item.productId);
        this.setState({
            product: this.props.stores.ProductStore.item
        });
    }

    render() {

        if (this.state.product === null)
            return <div></div>;
        return (
            <div className='shopping_cart_list_item'>
                <div className='shopping_cart_list_item_info'>
                    {this.state.product.name}
                </div>
                <div className='shopping_cart_list_item_info'>
                    {this.state.product.salePrice}
                </div>
                <div className='shopping_cart_list_item_info'>
                    {this.props.item.count}
                </div>
                <div className='shopping_cart_list_item_info'>
                    {this.state.product.salePrice * this.props.item.count}
                </div>
                <div className='shopping_cart_list_item_info'>
                    <button onClick={this.onDeleteItem}>삭제</button>
                </div>
            </div>
        );
    }

    onDeleteItem = async () => {
        await this.props.stores.ShoppingCartStore.deleteById(this.props.item._id);
        this.setState({
           product: null
        });
        alert('삭제가 되었습니다');
    }
}

export default ShoppingCartItem;
