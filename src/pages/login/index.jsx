import React, { useState } from 'react';
import { App, AppBody, BoxLogin, BoxButton} from './styles';

import Input from '../../components/inputs';
import Button from '../../components/button';
import TranspButton from '../../components/button_transp';
import LinkButton from '../../components/link_button';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Clicou");
    };

  return (
    <App>
      <AppBody>
        <BoxLogin>
            <Input label="Email" value = {email} setValue = {setEmail}></Input>
            <Input label="Senha" password value = {password} setValue = {setPassword}></Input>
            <BoxButton>
                <Button onClick={handleLogin} >Entrar</Button>
                <TranspButton href="/signup">Cadastrar</TranspButton>
            </BoxButton>
            <LinkButton href="/forgot-password">Esqueci a senha</LinkButton>
        </BoxLogin>

      </AppBody>
    </App>
  );
}
