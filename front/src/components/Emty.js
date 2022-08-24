import styled from "styled-components";
import React from "react";
import { Button } from "@mui/material";

const Empty = () => {
    const goHome = () => {
        console.log('Home');
    }

    return(
        <div>
            검색 결과가 없습니다.
            {/* <Button onClick ={goHome} >HOME</Button> */}
            {/* <Button /> */}
        </div>
    )
}

export default Empty; 