import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {inject, observer} from "mobx-react";
import './centerAlign.scss';

@inject('stores')
@observer
class Join extends Component {
    state = {
        account: '',
        password: '',
        passwordCheck: '',
        name: '',
        homeNumber: '',
        phoneNumber: '',
        postCode: '',
        address: '',
        email: '',

        isSameIdCheckSuccess: false,
        goToLogin: false
    };
    render() {
        if(this.state.goToLogin)
            return <Redirect to={'/user/login'}/>;

        return (
            <div className='container'>
                <div className='user-content'>
                    <h2>회원가입</h2>
                    <div className='join-message'>
                        00가족을 위한 전문 쇼핑몰로 저렴한 가격과 신개념 고객서비스를 통해 고객 만족을 최우선으로 합니다.<br/>
                        쇼핑몰에 회원으로 가입하시면 보다 나은 서비스를 제공받으실 수 있습니다.
                    </div>
                    <div>
                        희망아이디:
                        <input
                            placeholder='아이디'
                            value={this.state.account}
                            onChange={this.updateInput}
                            name='account'
                        />
                        <button onClick={this.onSameIdCheck}>중복 확인</button>
                        <span>(6~10자의 영문 및 숫자가 가능하며 여백은 사용할 수 없습니다)</span>
                    </div>
                    <div>
                        희망패스워드:
                        <input
                            placeholder='비밀번호'
                            type='password'
                            value={this.state.password}
                            onChange={this.updateInput}
                            name='password'
                        />
                        <span>(6~10자 이내로 영문과 숫자의 조합으로 만드세요)</span>
                    </div>
                    <div>
                        패스워드 확인:
                        <input
                            placeholder='비밀번호 확인'
                            type='password'
                            value={this.state.passwordCheck}
                            onChange={this.updateInput}
                            name='passwordCheck'
                        />
                    </div>
                    <div>
                        성명:
                        <input
                            placeholder='성명'
                            value={this.state.name}
                            onChange={this.updateInput}
                            name='name'
                        />
                        <span>(이름에 공백은 제거해 주세요)</span>
                    </div>
                    <div>
                        전화번호:
                        <input
                            placeholder='전화번호'
                            value={this.state.homeNumber}
                            onChange={this.updateInput}
                            name='homeNumber'
                        />
                    </div>
                    <div>
                        핸드폰:
                        <input
                            placeholder='핸드폰'
                            value={this.state.phoneNumber}
                            onChange={this.updateInput}
                            name='phoneNumber'
                        />
                    </div>
                    <div>
                        우편번호:
                        <input
                            placeholder='우편번호'
                            value={this.state.postCode}
                            onChange={this.updateInput}
                            name='postCode'
                        />
                    </div>
                    <div>
                        주소:
                        <input
                            placeholder='주소'
                            value={this.state.address}
                            onChange={this.updateInput}
                            name='address'
                        />
                    </div>
                    <div>
                        이메일:
                        <input
                            placeholder='이메일'
                            value={this.state.email}
                            onChange={this.updateInput}
                            name='email'
                        />
                    </div>

                    <div className='join-message'>
                        <div>회원 약관</div>
                        <span>
                            당신은 이 아이디를 쇼핑용으로만 사용해야 합니다.<br/>
                            쇼핑 외 다른 목적으로 사용하지 않겠습니다.
                        </span>
                    </div>

                    <div>
                        <button onClick={this.onJoin}>회원가입</button>
                    </div>
                </div>
            </div>
        );

    }

    onSameIdCheck = async () => {
        if(!this.state.account) {
            window.alert("아이디를 입력해주세요.");
            return;
        }

        let user = await this.props.stores.UserStore.existUser(this.state.account);
        if(user) {
            alert('해당 아이디가 중복됩니다.');
            this.state.isSameIdCheckSuccess = false;
        } else {
            alert('해당 아이디를 사용할 수 있습니다.');
            this.state.isSameIdCheckSuccess = true;
        }
    }

    onJoin = async () => {
        for(let input in this.state){
            if(!this.state[input] && input!=='goToLogin' && input!=='isSameIdCheckSuccess') {
                window.alert(input + "을(를) 입력해주세요.");
                return;
            }
        }
        if(!this.state.isSameIdCheckSuccess){
            window.alert('아이디 중복 확인을 해주세요.');
            return;
        }

        if(this.state.password !== this.state.passwordCheck){
            window.alert('패스워드가 일치하지 않습니다.');
            return;
        }
        let isAdd = await this.props.stores.UserStore.addUser(this.state);
        if(isAdd){
            this.setState({
                ...this.state,
                goToLogin: true
            })
            alert('회원가입을 완료했습니다.')
        } else {
            window.alert('회원가입이 되지 않았습니다');
        }
    }

    updateInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
}

export default Join;