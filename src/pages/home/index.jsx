import { App, AppHeader, Logo, AppLogo } from './styles';
import logo from '../../assets/ReactLogo.png';

export default function Home() {
  return (
    <App>
      <AppHeader>
        <Logo>
            <AppLogo src={logo} />
        </Logo>
      </AppHeader>
    </App>
  );
}
