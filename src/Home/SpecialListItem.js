import React from 'react';
import {Link} from 'react-router-dom';
import './SpecialList.scss'

const SpecialListItem = ({content}) => {

    return (
        <div className='special-list-item'>
            <div className='title'>title data</div>
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

export default SpecialListItem;