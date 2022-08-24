import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea, TextField, InputLabel, OutlinedInput} from '@mui/material';
import styled from 'styled-components';

const dummyItemList = [];
for (let i = 0; i < 100; i++) {
    dummyItemList.push({
        id: i,
        title: `title${i}`,
        description: 'Vdescription:Voluptate officia Lorem incididunt commodo in.Eiusmod reprehenderit incididunt elit incididunt ex et excepteur occaecat elit elit nisi.',
        price: 10,
        author: `ian${i}`
    })
}


const Continer = styled.div`
display: flex;    
// flex-direction: column;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center; 
    width: 70%;
    .search-container{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .search-width{
            width: 30%;
        }
    }
    .item{

        flex: 0 0 250px; // 자식 요소에게 플랙스 그로우 1을 적용
        padding: 1em;
        .search-width{
            width: 30%;
        }
    }
`


const Main = ({itemList = dummyItemList}) => {
   
    return(
        <>
        <div style={{display: 'flex',  justifyContent: 'center' }}>
        <Continer>
            {/* <div class = "search-container">
                <div class = "search-width">
                <TextField fullWidth label="Search"  defaultValue="Normal" />
                </div>
            </div> */}
            {itemList.map((item) => {
                return (
                    <div class="item">
                        {/* <Card sx={{ maxWidth: 345 }}> */}
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    // width={250}
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                   </div>
                )
            })
            }
        </Continer>
        </div>

        <div style={{display: 'flex',  justifyContent: 'center' }}>
        <Continer>
            {/* <div class = "search-container">
                <div class = "search-width">
                <TextField fullWidth label="Search"  defaultValue="Normal" />
                </div>
            </div> */}
            {itemList.map((item) => {
                return (
                    <div class="item">
                        {/* <Card sx={{ maxWidth: 345 }}> */}
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    // width={250}
                                    height="140"
                                    image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                   </div>
                )
            })
            }
        </Continer>
        </div>
        </>
    )
   
}

export default Main;