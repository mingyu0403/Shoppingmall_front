import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import './App.css';
import Stores from "./Stores";
import Home from "./Home";
import User from "./User";
import Product from "./Product";
import CategoryList from "./Product/CategoryList";
import Header from "./Header";


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
                          <Header />
                      </div>

                  </div>

                  <ul id='category-nav'>
                      <CategoryList  />
                  </ul>
              </header>

              <section className='app-body'>
                  <Route path='/' exact component={Home} />
                  <Route path='/user/:command?' exact component={User} />
                  <Route path='/category/:id' exact component={Product} />
                  <Route path='/product/:id' exact component={Product}/>
                  <Route path='/shoppingCart' exact component={Product}/>
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
