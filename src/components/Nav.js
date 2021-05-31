import { Flex } from '@chakra-ui/layout'
import { NavLink } from 'react-router-dom'

import React, { useState } from 'react'

function Nav() {
    // const [checkLogin, setCheckLogin] = useState(false);
    const checkLogin = localStorage.getItem("singleUser") || null;
    return (
        <div style={{padding: '15px', color: '#fff', background: 'rgb(136, 26, 26) none repeat scroll 0% 0%',
                boxShadow: '2px 6px 8px 1px #0b0202'}}>
            <Flex flexWrap='wrap'>
                <div className="brand" style={{flex: '2', minWidth: '80px', fontStyle: 'italic', fontWeight: 'bolder', color: '#000',fontSize: '1.2em'}}>
                    <p><b>Blood Donor</b></p>
                </div>
                <div className="navs"  style={{ display: 'flex', justifyContent:'space-between', flex: '1'}}>
                    <NavLink style={{padding: '0 5px'}} activeClassName="active" className="nav-link" to="/">Home </NavLink>
                    <NavLink style={{padding: '0 5px'}} activeClassName="active" className="nav-link" to="/search">Search</NavLink>
                    <NavLink style={{padding: '0 5px'}} activeClassName="active" className="nav-link" to={checkLogin ? '/logout' : '/login'}>{checkLogin ? 'Logout' : 'Login'} </NavLink>
                    <NavLink style={{padding: '0 5px'}} activeClassName="active" className="nav-link" to="/register">Register </NavLink>
                </div>
            </Flex>
        </div>
    )
}

export default Nav
