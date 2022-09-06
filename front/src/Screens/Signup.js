import { Button, TextField, p } from "@mui/material";
import React, {useEffect, useState} from "react";
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

const SignUp = () => {
    
    const get = async() => {
        let test = await axios.get('/').then((res) => {
            return res.data;
        });
        console.log(test);
    }
    useEffect(() =>{
        get();
    },[])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password, nickname);
        let data ={
            email,
            nickname,
            password
        }
        
        axios.post('/api/users/insert', data)
        .then((res) => {
            console.log('완료',res);
            goLoginPage();
        }).catch(e => console.log(e));
        
    }

    const goLoginPage = () => {
        console.log('loginPage');
        navigate('/login');
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
             <p>nickname</p>
              <TextField
                required
                id="outlined-required"
                label="Required"
                placeholder="nickname"
                onChange={(e) => setNickname(e.target.value)}
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
            <Button variant="contained" type = "submit">회원가입</Button>
            <Button variant="outlined" onClick ={goLoginPage}>로그인</Button>
            </form>
        </Container>
    )
};

export default SignUp;