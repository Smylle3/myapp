import React, { useState } from 'react';
import { App, AppBody, BoxLogin, BoxButton, BoxLogo, BoxLogoImg} from './styles';

import Input from '../../components/inputs';
import Button from '../../components/button';
import TranspButton from '../../components/button_transp';
import LinkButton from '../../components/link_button';

import logo from '../../assets/ReactLogo.png'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert("Em construção!");
    };

  return (
    <App>
      <AppBody>
        <BoxLogo><BoxLogoImg src={logo}/></BoxLogo>
        <BoxLogin>
            <Input label="Email" value = {email} setValue = {setEmail}></Input>
            <Input label="Senha" password value = {password} setValue = {setPassword}></Input>
            <BoxButton>
                <Button onClick={handleLogin} >Entrar</Button>
                <a href="signup"><TranspButton>Cadastrar</TranspButton></a>
            </BoxButton>
            <LinkButton>Esqueci a senha</LinkButton>
        </BoxLogin>

      </AppBody>
    </App>
  );
}
