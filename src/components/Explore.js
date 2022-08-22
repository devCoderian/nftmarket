import * as React from 'react';
import { Card, CardContent, CardActions, IconButton, CardMedia, Typography, CardActionArea, TextField, InputLabel, OutlinedInput, Button } from '@mui/material';
import styled from 'styled-components';
import { FavoriteOutlined, ShareOutlined } from '@mui/icons-material';
import useModal from '../hooks/useModal';

const dummyItemList = [];
for (let i = 0; i < 100; i++) {
    dummyItemList.push({
        id: i,
        title: `title${i}`,
        description: 'Voluptate officia Lorem incididunt commodo in.',
        price: 10,
    })
}


const Continer = styled.div`

    display: flex;    
// flex-direction: column;
    flex-wrap: wrap; 
    justify-content: space-between;
    align-items: center; 
    width: 65%;
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
        margin-top: 40px;
        .search-width{
            width: 30%;
        }

}
`


const Explore = ({ itemList = dummyItemList }) => {
    const { openModal,
        closeModal,
        ModalPortal} = useModal();
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Continer>
                    <div className="search-container">
                        <div className="search-width">
                            <TextField fullWidth label="Search" defaultValue="Normal" />
                        </div>
                    </div>
                    {itemList.map((item) => {
                        return (
                            <div className="item" key={item.id} onClick = {openModal}>
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
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteOutlined />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareOutlined />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareOutlined />
                                        </IconButton>
                                    </CardActions>
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

export default Explore;