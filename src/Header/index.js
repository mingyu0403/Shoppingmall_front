import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link, withRouter} from "react-router-dom";

@inject('stores')
@observer
class Header extends Component {
    componentDidMount() {
    }
    render() {
        if(!this.props.stores.UserStore.user){ // 유저가 로그인을 안했다면
            return (
                <ul id='page-nav'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/user/login'>로그인</Link></li>
                </ul>
            );
        } else {
            return (
                <ul id='page-nav'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link onClick={this.onLogout}>로그아웃</Link></li>
                    <li><Link to='/user/profileView'>회원정보변경</Link></li>
                    <li><Link to='/shoppingCart'>장바구니</Link></li>
                </ul>
            );
        }
    }
    onLogout =  () => {
        if(this.props.stores.UserStore.user){
            this.props.stores.UserStore.logout();
            alert("로그아웃 되었습니다.");
            this.props.history.push("/");
        }
    }
}

export default withRouter(Header);