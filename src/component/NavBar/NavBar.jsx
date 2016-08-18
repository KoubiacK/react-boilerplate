import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

//import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
//<LinkContainer key={event.key} eventKey={event.key} to={{ pathname: '/foo', query: { bar: 'baz' } }}>{event.title}</LinkContainer>

import { style } from './NavBar.css'// import css



class NavBar extends Component {



    render() {

        // get app config
        const config = this.context.julha_config;

        // create nav menus
        const nav_menus = config.menus.map(function(elem, index) {

            if (elem.title === 'separator' ) {
                return <MenuItem key={elem.key} divider />
            } else {
                return <LinkContainer key={elem.key} to={elem.to} activeStyle={config.ACTIVE}>
                    <MenuItem eventKey={elem.key}>
                        {elem.title}
                    </MenuItem>
                </LinkContainer>;
            }

        });


        return (
            <Navbar style={{marginBottom: '0px'}}>
              <Navbar.Header>
                <Navbar.Brand>
                  { /* <a href="/">julha-react</a> */ }
                  <IndexLink to="/">julha-react</IndexLink>
                </Navbar.Brand>
                <Navbar.Toggle /> { /* menu burger */ }
              </Navbar.Header>

              <Navbar.Collapse> { /* responsive collapsable menus */ }

                <Navbar.Form pullLeft>
                  <FormGroup> { /* search form */ }
                    <FormControl type="text" placeholder="Search" />
                  </FormGroup>
                  {' '}
                  <Button type="submit">Submit</Button>
                </Navbar.Form>

                <Nav pullRight>
                  <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                    {nav_menus} { /* menus */ }
                  </NavDropdown>
                  <NavItem eventKey={2} href="#"><i className="glyphicon glyphicon-bell"></i></NavItem>
                  <NavItem eventKey={2} href="#"><i className="glyphicon glyphicon-user"></i></NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}


// global variable, accessible in all child with .contextTypes
NavBar.contextTypes = {
    julha_config: React.PropTypes.object
}

// export the component
export default NavBar
