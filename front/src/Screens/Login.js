import { Button, TextField, p } from "@mui/material";
import React, {useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh;
    
    form{
        width: 50%;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        height: 700px;

        Button{
            margin-top: 10px;
        }
    }
`

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('login');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password, nickname);
        let data ={
            email,
            password
        }
        // axios.get('/api/users').then((res) => console.log(res));
        axios.post('/api/users/insert', data)
        .then((res) => {
            console.log(res);
            goToLogin();
        }).catch(e => console.log(e));
        
    }

    const goSignPage = () => {
        console.log('loginPage');
        navigate('/signup')
    };

    return (
        <Container>
            <form onSubmit={onSubmit}>
            <p>email</p>
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Required"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
             />
             <p>password</p>
              <TextField
                required
                id="outlined-required"
                label="Password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
             />
            <Button variant="contained" type = "submit">로그인</Button>
            <Button variant="outlined" onClick ={goSignPage}>회원가입</Button>
            </form>
        </Container>
    )
};

export default Login;