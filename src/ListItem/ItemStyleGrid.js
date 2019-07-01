import React from 'react';
import {Link} from 'react-router-dom';
import './ItemStyle.scss'

const ItemStyleGrid = (props) => {
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
        <div className='list-item-grid'>
            <div className='grid_content borderRadius'>
                <div className='grid_product-img'>
                    <Link to={viewProduct}>
                        <img src={imageUrl} width='100%'/>
                    </Link>
                </div>
                <div className='grid_product-info'>
                    <div>{item.name}</div>
                    <div>{item.info}</div>
                    <div>{item.salePrice}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemStyleGrid;