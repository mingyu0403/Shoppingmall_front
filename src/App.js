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
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/user/login'>로그인</Link></li>
              </header>

              <section className='app-body'>
                  <Route path='/' exact component={Home} />
                  <Route path='/user/:command?' exact component={User} />
              </section>

              <aside>

              </aside>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
