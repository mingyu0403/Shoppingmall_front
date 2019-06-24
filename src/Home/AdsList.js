import React, {Component} from 'react';
import AdsListItem from "./AdsListItem";

const AdsList = ({items}) => {
    return (
        <div>
            {items.map((item) => <AdsListItem content={item} />)}
        </div>
    );
};

export default AdsList;