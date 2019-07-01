import React from 'react';
import {Link} from 'react-router-dom';

const CommentItem = (props) => {
    let {item} = props;

    if(!item){
        return <div></div>;
    }
    return (
        <div className='shopping_cart_list_item'>
            <div className='shopping_cart_list_item_info'>
                {item.userAccount}
            </div>
            <div className='shopping_cart_list_item_info'>
                {item.content}
            </div>
            <div className='shopping_cart_list_item_info'>
                {item.created}
            </div>
        </div>
    );
};

export default CommentItem;