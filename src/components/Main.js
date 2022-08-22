import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea, TextField, InputLabel, OutlinedInput} from '@mui/material';
import styled from 'styled-components';

const dummyItemList = [
    {
        id: 1,
        title: 'title01',
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    },
    {
        id: 2,
        title: 'title02',
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    },
    {
        id: 3,
        title: 'title03',
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    },
    {
        id: 4,
        title: 'title03',
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    },
    {
        id: 5,
        title: 'title03',
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    },
    {
        id: 6,
        title: 'title03',
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    },
    {
        id: 7,
        title: 'title03',
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    },
    {
        id: 8,
        title: 'title03',
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    }
]

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
        margin: 30px 50px;
        flex: 1 1 1 30%;
        // flex-basis: 250px;
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
            <div class = "search-container">
                <div class = "search-width">
                <TextField fullWidth label="Search"  defaultValue="Normal" />
                </div>
            </div>
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
        </>
    )
   
}

export default Main;