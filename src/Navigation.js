import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
	render() {
		return (
			<Navbar className='navbar' collapseOnSelect expand='lg'>
				<Navbar.Brand className='brand' href='/'>
					<img
						className='d-inline-block align-top'
						// src={require('../images/logo.png')}
						alt='Logo'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link className='nav-link' href='/Home'>
							Home
						</Nav.Link>
						<Nav.Link className='nav-link' href='/directory'>
							Directory
						</Nav.Link>
						<Nav.Link className='nav-link' href='/share'>
							Share
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;
