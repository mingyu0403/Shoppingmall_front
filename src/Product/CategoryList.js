import React, {Component} from 'react';

import CategoryItem from './CategoryItem';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class CategoryList extends Component {

    componentDidMount() {
        this.props.stores.CategoryStore.fetchItems();
    }

    render() {
        return (
            <div id='category-nav'>
                {this.props.stores.CategoryStore.items &&
                this.props.stores.CategoryStore.items.map((item, i) =>
                    <CategoryItem key={i} category={item}/>)}
            </div>
        );
    }
}

export default CategoryList;