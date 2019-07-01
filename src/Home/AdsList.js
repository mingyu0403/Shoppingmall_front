import React, {Component} from 'react';
import ItemAds from "../ListItem/ItemAds";

const AdsList = (props) => {
    return (
        <div className='list-body'>
            {props.items.map((item) => <ItemAds content={item} />)}
        </div>
    );
};

export default AdsList;