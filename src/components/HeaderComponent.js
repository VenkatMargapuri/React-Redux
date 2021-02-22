import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, Navbar, NavItem}  from 'reactstrap';


export default class Header extends Component{
    render(){
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <Nav>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>   
                                  Home
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/seed">
                                <span className="fa fa-info fa-lg"></span>                                
                                  Seed
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        );
    }
}