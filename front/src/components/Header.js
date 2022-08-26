import React, { useState } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
    height: 130px;
    margin-bottom: 30px;
`

const Header = () => {
    
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn ] = useState(false);

    const goHome = () => {
        navigate('/');
    }
    
    const goMyPage = () => {
        console.log('goPage');
        navigate('/mypage');
    }

    const MarketPage = () => {
        console.log('MarketPage');
        navigate('/explore');
    }

    const goSignPage = () => {
        console.log('goSignPage');
        navigate('/signup');
    }

    return(
        <Container>
            <StorefrontIcon onClick={goHome} />
            <div>
                <Button onClick={MarketPage}>explore</Button>
                {isLoggedIn ? <IconButton color="primary" aria-label="upload picture" component="label" onClick={goMyPage}>
                    <AccountCircleIcon />
                </IconButton>
                : <Button variant='outlined' onClick={goSignPage}>회원가입</Button>
                }
            </div>
        </Container>
    )    
}

export default Header;