import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Logo, Nav, User } from './Navbar.element';

const Navbar = ({ wallet }) => {
  return (
    <Nav>
      <Container>
        <Logo>StreamFlix</Logo>

        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/'>
          Home
        </NavLink>

        <User>
          <div>
            <p>Hello,</p>
            <span>Kale!</span>
          </div>
          <div>
            <p>Wallet,</p>
            <span>Rp {wallet.toFixed(3)}</span> {/* return 100.000 */}
          </div>
        </User>
      </Container>
    </Nav>
  );
};

export default Navbar;
