import { Button, TextField, p } from "@mui/material";
import React, {useState} from "react";
import styled from "styled-components";
import axios, { Axios } from 'axios';
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
        
        axios.post('api/user/login', data)
        .then((res) => {
            if(res.status === 200){
                alert(`${res.data.nickname} 로그인 완료`);
            }
            console.log(res.data);
            //이동하기
            navigate('/');
        })
        .catch((e) => console.log('error', e));
        
        // axios.post('/user/login', data)
        // .then((res) => {
        //     if(res.status === 200){
        //         alert(`${res.data.nickname} 로그인 완료`);
        //     }
        //     console.log(res.data);
        // })
        // .catch((e) => console.log('error', e));
    }

    const goSignPage = () => {
        console.log('signup page');
        navigate('/signup');
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
                name = "email"
                onChange={(e) => setEmail(e.target.value)}
             />
             <p>password</p>
              <TextField
                required
                id="outlined-required"
                label="Password"
                type="password"
                placeholder="password"
                name = "password"
                onChange={(e) => setPassword(e.target.value)}
             />
            <Button variant="contained" type = "submit">로그인</Button>
            <Button variant="outlined" onClick ={goSignPage}>회원가입</Button>
            </form>
        </Container>
    )
};

export default Login;