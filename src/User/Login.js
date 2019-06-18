import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Login extends Component {
    state = {
        account: '',
        password: '',
        goToProfileView: false
    };
    render() {
        if(this.state.goToProfileView)
            return <Redirect to={'/user/profileView'}/>;
        return (
            <div id='login-page'>
                <h2>로그인</h2>
                <div>
                    아이디:
                    <input
                        placeholder='아이디'
                        value={this.state.account}
                        onChange={this.updateInput}
                        name='account'
                    />
                </div>
                <div>
                    비밀번호:
                    <input
                        placeholder='비밀번호'
                        value={this.state.password}
                        onChange={this.updateInput}
                        name='password'
                    />
                </div>
                <div>
                    <button onClick={this.onLogin}>로그인</button>
                    <Link to='/user/join'>회원가입</Link>
                </div>
            </div>
        );

    }

    onLogin = async () => {
        // 아이디로 검색 후, 비밀번호로 맞는 지 체크한다.
        let user = await this.props.stores.UserStore.loginUser(this.state.account, this.state.password);
        if(user){
            this.setState({
                ...this.state,
                goToProfileView: true
                })
        } else {
            window.alert("아이디나 비밀번호가 맞지 않습니다.");
        }
    }

    updateInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

}

export default Login;