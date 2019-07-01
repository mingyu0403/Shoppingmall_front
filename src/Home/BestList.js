import React, {Component} from 'react';
import ItemStyleB from "../ListItem/ItemStyleB";
import ItemStyleC from "../ListItem/ItemStyleC";
import ItemStyleGrid from "../ListItem/ItemStyleGrid";

const BestList = (props) => {
    return (
        <div className='list-body'>
            <div className='tab-name'>베스트 추천 상품</div>
            <div className='list-container'>
                { props.items.map(product => <ItemStyleB key={product._id} item={product}/> )}
            </div>

            <div className='tab-name'>추천 상품</div>
            <div className='list-container-grid'>
                { props.items.map(product => <ItemStyleGrid key={product._id} item={product}/> )}
            </div>
            <div className='tab-name'>인기 상품</div>
            <div className='list-container'>
                {
                    props.items.map(product => <ItemStyleB key={product._id} item={product}/> )}
            </div>

            <div className='tab-name'>특가 상품</div>
            <div>
                { props.items.map(product => <ItemStyleC key={product._id} item={product}/> )}
            </div>
        </div>
    );
};

export default BestList;