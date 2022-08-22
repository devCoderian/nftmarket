import React from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import { Button, IconButton } from '@mui/material';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
    height: 60px;
`

const Header = () => {
    return(
        <Container>
            <StorefrontIcon />
            <div>
                <Button>explore</Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <AccountCircleIcon />
                </IconButton>
            </div>
        </Container>
    )    
}

export default Header;