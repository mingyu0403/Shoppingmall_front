import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import './App.css';
import Stores from "./Stores";
import Home from "./Home";
import User from "./User";

function App() {
  return (
      <Provider stores={Stores}>
          <BrowserRouter>
              <header className='app-header'>
                  <div id='top'>
                      <div id='logo-img'>
                          00 0000 000 쇼핑몰
                      </div>
                      <div id='nav'>
                          <ul id='page-nav'>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>

                              <li><Link to='/'>Home</Link></li>
                              <li><Link to='/user/login'>로그인</Link></li>
                              <li><Link to='/'>회원정보변경</Link></li>
                              <li><Link to='/'>장바구니</Link></li>
                          </ul>
                          <div id='search'>
                              검색하기
                              <input />
                              <button>GO</button>
                          </div>
                      </div>

                  </div>

                  <ul id='category-nav'>
                      <li><Link to='/'>상의(남)</Link></li>
                      <li><Link to='/'>하의(남)</Link></li>
                      <li><Link to='/'>상의(여)</Link></li>
                      <li><Link to='/'>하의(여)</Link></li>
                      <li><Link to='/'>구두</Link></li>
                      <li><Link to='/'>가방</Link></li>
                      <li><Link to='/'>소품</Link></li>
                  </ul>
              </header>

              <section className='app-body'>
                  <Route path='/' exact component={Home} />
                  <Route path='/user/:command?' exact component={User} />
              </section>

              <footer>
                  <div id='footer-nav'>
                      <div>
                          <li><Link to='/'>Home</Link></li>
                          <li><Link to='/'>이용약관</Link></li>
                          <li><Link to='/'>회원정보관리</Link></li>
                          <li><Link to='/'>이용안내</Link></li>
                          <li><Link to='/'>고객센터</Link></li>
                      </div>
                  </div>
                  <div id='company'>
                      <div className='logo'>
                          로고
                      </div>
                      <div className='company-info'>
                          <div>문의전화: 053)0000-0000/ 000)0000-0000</div>
                          <div>팩스: 053)0000-0000</div>
                          <div>구입문의: 053-000-0000(일반), 000-0000~0(군)</div>
                          <div>Copyright 2019 00000000000000, All rights reserved</div>
                      </div>
                  </div>
              </footer>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
