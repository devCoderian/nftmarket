import React from "react"
import styled from "styled-components"

const Continer = styled.div`
    width: 100%;
    height: 300px;
    background-color: black;
    position: absolute;
    bottom: 0px;
`;

const Footer = () => {
    return (
        <Continer>
           footer 
        </Continer>
    )
}

export default Footer;