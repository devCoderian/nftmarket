import React, {useCallback, useEffect, useState} from 'react';
import { Card, CardContent, CardActions, IconButton, CardMedia, Typography, CardActionArea, TextField, InputLabel, OutlinedInput, Button, easing } from '@mui/material';
import styled from 'styled-components';
import { FavoriteOutlined, ShareOutlined } from '@mui/icons-material';
import useModal from '../hooks/useModal';
import Detail from './Detail';
import Empty from './Emty';


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
        flex: 0 0 300px; // 자식 요소에게 플랙스 그로우 1을 적용
        margin-top: 40px;
        .search-width{
            width: 30%;
        }

}
`


const Explore = ({ itemList = dummyItemList }) => {

    const {openModal, ModalPortal, closeModal} = useModal();
    const [nftItem, setNftItem] = useState(null);
    const [nftItemList, setNftItemList] = useState([]);

    useEffect(() => {
        setNftItemList(itemList);
    },[]);

    const [timer, setTimer] = useState(0); // 디바운싱 타이머

    const openDetailPage = (item) => {
        setNftItem(item);
    }

    useEffect(() => {
        if(!(nftItem === null)){
            openModal();   
        }
    },[nftItem]);
    
    
    const onSearch = (search) => {
        // console.log(nftItemList);
        const filterData = nftItemList.filter((item) =>  item.author.includes(search));
        setNftItemList(filterData);
    }

    const [empty, setEmpty] = useState(false);

    const onChangeInput = (e) => {
        // setSearch(e.target.value);   

        // if(timer){
        //     clearTimeout(newTimer);
        // }
        // let newTimer = setTimeout(() => {
        //     try {
        //         console.log(e.target.value)
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }, 1000);

        const filterData = nftItemList.filter((item) =>  item.author.includes(e.target.value));
        if(filterData.length === 0 || e.target.value ===''){
            setEmpty(true);
        }else{
            setNftItemList(filterData);
        }
       
        console.log('filterData', filterData);
    };


    /* 회원가입 */

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Continer>
                    <div className="search-container">
                        <div className="search-width">
                            <TextField fullWidth label="Search" onChange={(e) => onChangeInput(e)}/>
                        </div>
                    </div>
                    
                    {empty?  <Empty /> : nftItemList.map((item) => {
                        return (
                            <div className="item" key={item.id} onClick = {() => openDetailPage(item)}>
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
                                        {/* <div className='itemImg'></div> */}
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.author}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    {/* <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteOutlined />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareOutlined />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareOutlined />
                                        </IconButton>
                                    </CardActions> */}
                                </Card>
                            </div>
                            
                        )
                    })
                    }
                </Continer>
                <ModalPortal>
                    {/* modal component 생성 */}
                    <Detail closeModal={closeModal} item={nftItem}/>
                </ModalPortal>
            </div>
        </>
    )

}

export default Explore;