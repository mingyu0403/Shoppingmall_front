import React, {Component} from 'react';
import SpecialListItem from "./SpecialListItem";

const SpecialList = ({items}) => {
    return (
        <div>
            {items.map((item) => <SpecialListItem content={item} />)}
        </div>
    );
};

export default SpecialList;