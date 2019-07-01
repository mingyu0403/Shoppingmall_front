import React from 'react';
import './ItemStyle.scss'

const ItemAds = ({content}) => {

    return (
        <div className='ads-list-item borderRadius'>
            {content}
        </div>
    );
};

export default ItemAds;