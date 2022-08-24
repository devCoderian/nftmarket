import React from "react";
import styled from "styled-components";
import { CloseRounded } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";


const Container = styled.div`
    position: relative;
    border-radius: 10px;
    background-color: white;
    width: 60%;
    max-width: 900px;
    
    .flex-box{
        display: flex;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .image{
        width: 40%;
        border-radius: 10px;
        margin: 20px 30px 30px;
        img{
            width: 100%;
            object-fit: cover;
            border-radius: 16px;
          }
          
    }   
    .description{
        margin-left: 10px;
        width: 48%;
        .title{
            font-weight: 500;
            margin-right: 10px;
            font-size: 18px;
        }
        .author{
            font-size: 18px;
            margin-bottom: 20px;
        }
        Button{
            margin-bottom: 10px
        }
    }
    .close-btn{
        position: absolute;
        right: 20px;
        top: 15px;
        cursor: pointer;
    }
`

const Detail = ({closeModal, item}) => {

    // console.log(item); 

    return <Container>
        <div className = "close-btn" onClick={() => {
         closeModal();
        }}>
        <CloseRounded />
        </div>
        <div className = "flex-box">
        <div className="image">
            <img 
            style={{}}
            src ="https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80" />
        </div>
        <div className="description">
            <h1>{item.title}</h1>
            <span className="title">작가</span><span className="author">정이안</span>
            {/* <Divider textAlign="left">설명</Divider> */}
            <p><span className="title">price</span><span className="author">{item.price} ETH</span></p>
            <p className="title">description</p>
            <p>{item.description}</p>
            <Button fullWidth variant="contained">구매</Button>
            <Button fullWidth variant="outlined">삭제</Button>
        </div>
        </div>
    </Container>
}


export default Detail;