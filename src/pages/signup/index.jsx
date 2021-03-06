import React, { useState } from 'react';
import { App, AppBody, BoxLogin, BoxButton, BoxLogo, BoxLogoImg} from './styles';

import Input from '../../components/inputs';
import Button from '../../components/button';
import LinkButton from '../../components/link_button';

import logo from '../../assets/ReactLogo.png'

export default function Login() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert(username);
        alert(email);
        alert(password);
    };

  return (
    <App>
      <AppBody>
        <a href="/"><BoxLogo><BoxLogoImg src={logo}/></BoxLogo></a>
        <BoxLogin>
            <Input label="Digite username" value = {username} setValue = {setUsername}></Input>
            <Input label="Digite seu email" value = {email} setValue = {setEmail}></Input>
            <Input label="Digite uma senha" password value = {password} setValue = {setPassword}></Input>
            <Input label="Confirme sua senha" password value = {password} setValue = {setPassword}></Input>
            <BoxButton>
                <Button onClick={handleLogin} >Enviar</Button>
            </BoxButton>
            <a href="/login"><LinkButton>Voltar ao login</LinkButton></a>
        </BoxLogin>

      </AppBody>
    </App>
  );
}
