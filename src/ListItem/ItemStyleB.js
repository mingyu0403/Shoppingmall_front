import React from 'react';
import {Link} from 'react-router-dom';
import './ItemStyle.scss'

const ItemStyleB = (props) => {
    let { item } = props;

    if(!item) {
        return (
            <div></div>
        );
    }
    console.log(item);
    let viewProduct = `/product/${item._id}`;
    let imageUrl = `http://localhost:8080/attachment/image/${item.attachmentId}`;
    return (
        <div className='list-item-b'>
            <div className='best_content borderRadius'>
                <div className='best_product-img'>
                    <Link to={viewProduct}>
                        <img src={imageUrl} width='100%'/>
                    </Link>
                </div>
                <div className='best_product-info'>
                    <div>{item.name}</div>
                    <div>{item.info}</div>
                    <div>{item.salePrice}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemStyleB;