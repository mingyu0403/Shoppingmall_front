import React from 'react';
import {Link} from 'react-router-dom';
import './AdsList.scss'

const AdsListItem = ({content}) => {

    return (
        <div className='ads-list-item'>
            {content}
        </div>
    );
};

export default AdsListItem;