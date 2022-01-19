import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title='Certificados' path='/certificados' includes/>
      </ul>
    </Container>
  );
}

export default Header;
