import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';
import './View.scss';
import BestList from "../Home/BestList";
import ItemStyleB from "../ListItem/ItemStyleB";

@inject('stores')
@observer
class CategoryView extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.categoryId != this.props.categoryId){
            this.props.stores.CategoryStore.fetchItem(this.props.categoryId);
        }
    }

    componentDidMount() {
        this.props.stores.CategoryStore.fetchItem(this.props.categoryId);
    }

    render() {
        let c = this.props.stores.CategoryStore;
        if (!c.item)
            return <div></div>;
        let imageUrl = `http://localhost:8080/attachment/image/${c.item.attachmentId}`;

        return (
            <div className='mainBody'>
                <div className='view-container'>
                    <div className='cat-title'>{c.item.name}</div>
                    <div className='cat-img'><img src={imageUrl} height='100%'/></div>
                    <div className='tab-name'>신상품 코너</div>
                    <div className='list-container'>
                        { c.item.productList.map(product => <ItemStyleB key={product._id} item={product}/> )}
                    </div>
                    <div className='tab-name'>MD 추천 상품</div>
                    <div className='list-container'>
                        { c.item.productList.map(product => <ItemStyleB key={product._id} item={product}/> )}
                    </div>
                    <div className='tab-name'>인기 상품</div>
                    <div className='list-container'>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryView;