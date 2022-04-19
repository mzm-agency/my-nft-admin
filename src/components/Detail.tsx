import React, {useCallback, useEffect, useState} from 'react'
import {Avatar, Button, Card, Col, Row, Typography, Image, notification} from "antd";
import {Link, useParams} from "react-router-dom";
import {API} from "../api";

const adminPath = process.env.PUBLIC_URL;

const { Title } = Typography;
const { Meta } = Card;

interface State {
    loading: boolean
    result: any
}
const initialState: State = {
    loading: true,
    result: {}
}
const Detail = () => {
    const {dropId} = useParams();
    const [state, updateState] = useState(initialState);
    const fetchDrop = useCallback(async ()=>{
        const response = await API.get({apiVersion:"nft"})(`/drop/admin/detail/${dropId}`);
        updateState({
            loading: false,
            result: response
        })
    },[state,dropId]);
    const approve = useCallback(async (dropId)=>{
        try{
            const response = await API.get({apiVersion:"nft"})(`/drop/approve/${dropId}`);
            fetchDrop()
        }catch (e:any) {
            console.log(e)
            notification.error({message:e})
        }
    },[]);
    useEffect(()=>{
        fetchDrop()
    },[dropId])
    return (
        <>
            <Card extra={state.result?.status == "PENDING" ? <Button onClick={()=>approve(state.result?.id)}>Баталгаажуулах</Button>: null}>
                <div style={{marginBottom: 20, fontSize: 18, fontWeight: 500}}>{state.result?.title}</div>
                <Image
                    width={200}
                    src={state.result?.cover}
                />
                <div style={{marginBottom: 20}}>{state.result?.description}</div>
                <Title level={5}>Цуглуулага</Title>
                <Row gutter={30}>
                    {
                        (state.result?.collections || []).map((item: any, index: number) => {
                            return (
                                <Col xxl={6} xl={6} xs={12}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={item.cover}
                                            />
                                        }
                                    >
                                        <Meta
                                            avatar={<Link to={`${adminPath}/collection/${item.id}`}><Avatar src={item.logo} /></Link>}
                                            title={item.title}
                                            description={`${item.description}, royalty:${item.royalty}, chain:${item.chain}`}
                                        />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Title style={{marginTop: 50}} level={5}>NFT</Title>
                <Row gutter={30}>
                    {
                        (state.result?.items || []).map((item: any, index: number) => {
                            return (
                                <Col xxl={6} xl={6} xs={12}>

                                    <div className={'imageNft'}
                                         style={{backgroundImage: `url("https://storage.googleapis.com/mycoin-public/${item.thumbnail}")`}}/>

                                    <div>
                                        <div style={{fontSize: 18, marginTop: 10, marginBottom: 10, fontWeight: 500}}>{item.type}</div>
                                        <div style={{display: "flex"}}>
                                            <div style={{marginRight: 10}}>Price</div>
                                            <div>{item.price}{item.currency_id}</div>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <div style={{marginRight: 10}}>Name</div>
                                            <div>{item.title}</div>
                                        </div>
                                        <div>{item.description}</div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Card>
        </>
    )
}

export default Detail