import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';
import './View.scss';
import CommentList from "./CommentList";

@inject('stores')
@observer
class ProductView extends Component {
    state = {
        userId: null,
        userAccount: null,
        productId: null,
        count: '1',
        content: ''
    };

    componentDidMount() {
        this.props.stores.ProductStore.fetchItem(this.props.productId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.stores.ProductStore.fetchItem(this.props.productId);
    }

    render() {
        let p = this.props.stores.ProductStore;
        if (!p.item)
            return <div></div>;

        let imageUrl = `http://localhost:8080/attachment/image/${p.item.attachmentId}`;
        return (
            <div className='mainBody'>
                <div className='view-container'>
                    <div className='cat-title'>{p.item.name}</div>
                    <div className='div-center-align'>
                        <div className='flex-box'>
                            <div className='product-img'><img src={imageUrl} width='300px'/></div>

                            <div className='order-info'>
                                <div>제조사: {p.item.manufacturer}</div>
                                <div>주문수량:
                                    <input
                                        type='number'
                                        min='1'
                                        value={this.state.count}
                                        onChange={this.updateInput}
                                        name='count'
                                    />
                                </div>
                                <div className='price'>시중가격: {p.item.fullPrice}</div>
                                <div className='price'>판매가격: {p.item.salePrice}</div>
                                <button onClick={this.onShoppingCart}>장바구니 담기</button>
                            </div>
                        </div>
                    </div>

                    <div className='tab-name'>제품 상세 정보</div>
                    <div className='detail-info'>
                        <pre>
                        {p.item.detailInfo}
                        </pre>
                    </div>
                    <div className='tab-name'>구매 정보</div>
                    <div className='detail-info'>
                        <pre>
                        {p.item.purchaseInfo}
                        </pre>
                    </div>
                    <div className='tab-name'>고객의 상품평</div>
                    <div className='detail-info'>
                        ※ 고객의 상품평은 추후 쇼핑몰 제품선정에 중요한 역할을 합니다.<br/>
                        ※ 쇼핑몰의 더 나은 상품선정과 고객 분들의 쇼핑문화의 질을 높이고자 좋은 평은 매월 심사 후 쇼핑몰 메인에 올려드리고 선물을 증정하고 있습니다.
                    </div>
                    [나도 한마디]
                    <div>
                        내용 :
                        <input
                            value={this.state.content}
                            onChange={this.updateInput}
                            name='content'
                        />
                        <button onClick={this.onCommentClick}>등록</button>
                    </div>
                    <div className='tab-name flex-box'>
                        <div>작성자</div>
                        <div>내용</div>
                        <div>작성일</div>
                    </div>
                    <div className='list-container'>
                        <CommentList commentList={this.props.stores.ProductStore.item.commentList} />
                    </div>
                </div>
            </div>
        );
    }

    onShoppingCart = async () => {
        if(this.props.stores.UserStore.user){
            this.state.userId = this.props.stores.UserStore.user._id;
            this.state.productId = this.props.productId;
            await this.props.stores.ShoppingCartStore.addShoppingCart(this.state);
            alert("장바구니에 해당 상품을 담았습니다.");
        } else {
            alert("로그인을 하신 후, 이용해주시기 바랍니다.")
        }

    };

    onCommentClick = async () => {
        if(this.props.stores.UserStore.user){
            this.state.userAccount = this.props.stores.UserStore.user.account;
            this.state.productId = this.props.productId;
            await this.props.stores.ProductStore.addComment(this.state);
        } else {
            alert("로그인을 하신 후, 이용해주시기 바랍니다.")
        }
    };

    updateInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
}

export default ProductView;