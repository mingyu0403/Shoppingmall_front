import React, {Component} from 'react';

import CategoryItem from './CategoryItem';
import {inject, observer} from "mobx-react";
import ShoppingCartItem from "./ShoppingCartItem";

@inject('stores')
@observer
class ShoppingCartList extends Component {

    componentDidMount() {
        this.props.stores.ShoppingCartStore.getAllByUserId(this.props.stores.UserStore.user._id);
    }

    render() {
        let s = this.props.stores.ShoppingCartStore;
        if (!s.shoppingCartList)
          return <div></div>;
        return (
            <div className='shopping_cart_list'>
                {this.props.stores.ShoppingCartStore.shoppingCartList &&
                this.props.stores.ShoppingCartStore.shoppingCartList.map((item, i) =>
                    <ShoppingCartItem key={i} item={item}/>)}
                {this.props.stores.ShoppingCartStore.shoppingCartList.length === 0 &&
                <div className='list-item-empty'>장바구니에 담겨 있는 상품이 없습니다.</div>
                }
            </div>
        );
    }
}

export default ShoppingCartList;