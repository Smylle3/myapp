import React from 'react';
import { useHistory } from 'react-router-dom';
import { App, AppHeader, Logo, AppLogo } from './styles';
import logo from '../../assets/ReactLogo.png';

export default function Home() {
  const history = useHistory();

  const HandlePush = () => {
    
    history.push('/login');
  };

  return (
    <App>
      <AppHeader>
        <Logo>
            <AppLogo src={logo} onClick={HandlePush}/>
        </Logo>
      </AppHeader>
    </App>
  );
}
