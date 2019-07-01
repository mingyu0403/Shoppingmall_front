import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {inject, observer} from "mobx-react";
import './centerAlign.scss';

@inject('stores')
@observer
class Login extends Component {
    state = {
        account: '',
        password: '',
        goToHome: false
    };

    render() {

        if(this.state.goToHome)
            return <Redirect to={'/'}/>;

        return (
            <div className='container'>
                <div className='user-content'>
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
                            type='password'
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
            </div>
        );

    }

    onLogin = async () => {
        // 아이디로 검색 후, 비밀번호로 맞는 지 체크한다.
        let user = await this.props.stores.UserStore.loginUser(this.state.account, this.state.password);
        if(user){
            this.setState({
                ...this.state,
                goToHome: true
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