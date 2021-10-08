import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import ForgotPass from './pages/forgot_pass';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/forgot-password' component={ForgotPass} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
