import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Nav,Navbar,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
       <Link to="/home">首页</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}><Link to="/guanyu">关于</Link></NavItem>
      <NavItem eventKey={2}><Link to="/about">关于我们</Link></NavItem>
      <NavDropdown eventKey={3} title="产品">
        <Link to="/product">产品</Link>
        
      </NavDropdown>
    </Nav>
  </Navbar>
);
class Caidan extends Component {
    render() {
        return (
            <div>
                {navbarInstance}
              
            </div>
        );
    }
}

export default Caidan;