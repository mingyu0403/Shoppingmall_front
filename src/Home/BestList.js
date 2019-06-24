import React, {Component} from 'react';
import BestListItem from "./BestListItem";

const BestList = ({items}) => {
    return (
        <div>
            <div>베스트 추천 상품</div>
            {items.map((item) => <BestListItem content={item} />)}
            <div>추천 상품</div>
            <div></div>
            <div>인기 상품</div>
            <div></div>
            <div>특가 상품</div>
            <div></div>

        </div>
    );
};

export default BestList;