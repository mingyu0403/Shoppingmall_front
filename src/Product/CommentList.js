import React, {Component} from 'react';

import CategoryItem from './CategoryItem';
import {inject, observer} from "mobx-react";
import CommentItem from "./CommentItem";

@inject('stores')
@observer
class CommentList extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='shopping_cart_list'>
                { this.props.commentList.reverse().map(comment => <CommentItem key={comment._id} item={comment}/> )}
                {this.props.commentList.length === 0 &&
                <div className='list-item-empty'>첫 상품평을 남겨주세요.</div>
                }
            </div>
        );
    }
}

export default CommentList;