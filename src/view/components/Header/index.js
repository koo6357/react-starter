import React from 'react'
import styled from 'styled-components';
import {navigate} from "../../../lib/History";

const Header = () => {

    return (
        <Container>
            <NavItem onClick={() => navigate('/')}>home</NavItem>
            <NavItem onClick={() => navigate('/signin')}>signin</NavItem>
            <NavItem onClick={() => navigate('/signup')}>signup</NavItem>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
`;

const NavItem = styled.div`
    padding: 20px 30px;
`;

export default Header;