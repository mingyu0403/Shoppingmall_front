import React from 'react';
import {Link} from 'react-router-dom';
import './BestList.scss';


const BestListItem = ({content}) => {

    return (
        <div className='best-list-item'>
            <div className='content'>
                <div className='product-img'>
                    image data
                </div>
                <div className='product-info'>
                    <div>상품이름: data</div>
                    <div>상품내용: data</div>
                    <div>가격 : data</div>
                </div>
            </div>
        </div>
    );
};

export default BestListItem;