import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <Container>
            <NavItem>
                <NavLink to={'/'}>home</NavLink>
            </NavItem>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
`;

const NavItem = styled.div`
    padding: 20px 30px;
`;

const NavLink = styled(Link)`
    
`;

export default Header;