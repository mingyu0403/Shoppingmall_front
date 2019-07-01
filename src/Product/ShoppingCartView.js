import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';
import './View.scss';
import ShoppingCartList from "./ShoppingCartList";

@inject('stores')
@observer
class ShoppingCartView extends Component {

    render() {
        return (
            <div className='mainBody'>
                <div className='view-container'>
                    <div className='cat-title'>장바구니</div>
                    <div className='detail-info'>
                        <ul>
                            <li>고객님께서 장바구니에 담으신 상품내역을 삭제하실 수 있습니다.</li>
                            <li>즐거운 쇼핑 되세요.</li>
                        </ul>
                    </div>
                    <div>
                        주문단계: <strong>장바구니</strong> >> 배송지 및 결제정보 >> 주문완료
                    </div>
                    <div className='tab-name flex-box'>
                        <div>주문상품</div>
                        <div>가격</div>
                        <div>주문 수량</div>
                        <div>합계</div>
                        <div>삭제</div>
                    </div>
                    <div>
                        <ShoppingCartList />
                        <button>주문하기</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCartView;