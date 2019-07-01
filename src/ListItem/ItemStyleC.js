import React from 'react';
import {Link} from 'react-router-dom';
import './ItemStyle.scss'

const ItemStyleC = (props) => {
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
        <div className='list-item-c'>
            <div className='sale_content borderRadius'>
                <div className='sale_product-img'>
                    <Link to={viewProduct}>
                        <img src={imageUrl} width='200px'/>
                    </Link>
                </div>
                <div className='sale_product-info'>
                    <div>{item.name}</div>
                    <div>{item.info}</div>
                    <div>{item.salePrice}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemStyleC;