import React, {Component} from 'react';
import ItemStyleA from "../ListItem/ItemStyleA";

const SpecialList = (props) => {
    return (
        <div className='list-body'>
            <div className='title'>공동구매</div>
            <div>
                {props.items.map((item, i) => <ItemStyleA key={i} item={item} />)}
            </div>
            <div className='title'>이벤트 상품</div>
            <div>
                {props.items.map((item, i) => <ItemStyleA key={i} item={item} />)}
            </div>
            <div className='title'>이 달의 Best 상품</div>
            <div>
                {props.items.map((item, i) => <ItemStyleA key={i} item={item} />)}
            </div>
        </div>
    );
};

export default SpecialList;