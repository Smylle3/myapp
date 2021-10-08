import React, { useState } from 'react';
import { App, AppBody, BoxLogin, BoxButton, BoxLogo, BoxLogoImg} from './styles';

import Input from '../../components/inputs';
import Button from '../../components/button';
import LinkButton from '../../components/link_button';

import logo from '../../assets/ReactLogo.png'

export default function Login() {

    const [email, setEmail] = useState('');

    const handleLogin = () => {
        alert(email);
    };

  return (
    <App>
      <AppBody>
        <a href="/"><BoxLogo><BoxLogoImg src={logo}/></BoxLogo></a>
        <BoxLogin>
            <Input label="Para recuperar a conta digite seu email" value = {email} setValue = {setEmail}></Input>
            <BoxButton>
                <Button onClick={handleLogin}>Enviar</Button>
            </BoxButton>
            <a href="/login"><LinkButton>Lembrou a senha?</LinkButton></a>
        </BoxLogin>

      </AppBody>
    </App>
  );
}
