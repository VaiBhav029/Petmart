import React from 'react'
import {Container, Nav,Navbar, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../actions/userAction'
import SearchBox from '../components/SearchBox'
import { Route } from 'react-router'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state=> state.userLogin)
    const {userInfo} = userLogin


    const logoutHandler = () =>{
        dispatch(logout())
    }
    return (
        <header>
            <Navbar bg="warning" variant="light" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand >
      <img
        alt=""
        src={'dog.png'}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Petmart
    </Navbar.Brand>
                </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
                <Nav className="ml-auto ">
                    <LinkContainer to='/cart'>
                    <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    </LinkContainer>
                    {userInfo ? 
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        :
                    <LinkContainer to='/login'>
                    <Nav.Link ><i className="fas fa-user"></i>Signin</Nav.Link>
                    </LinkContainer>}
                    {userInfo && userInfo.isAdmin && (
                    <NavDropdown title='Controls' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orders'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    </NavDropdown>
                    )}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
