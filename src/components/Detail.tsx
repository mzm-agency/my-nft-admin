import React from 'react'
import {Col, Row} from "antd";

const Detail = () => {
    return (
        <>
            <div style={{marginBottom: 20, fontSize: 18, fontWeight: 500}}>NFT Description</div>
            <div style={{marginBottom: 20}}>"Хөвөн оройт" зургаа дижитал хэлбэрээр гаргаж байна. Тусгай нөхцөл: 1.
                Үзэсгэлэн гаргахдаа NFT эзэмшигчээ тусгайлан урина. 2. Урландаа урьж, сонирхолтой яриа өрнүүлнэ. 3. Бүх
                бэлгээ задлалгүй гэнэтийн зүйлс /мэрч бүтээгдэхүүн болон бусад содон/-ийг Mongol NFT багийнхантай
                хамтран төлөвлөж байна.
            </div>


            <Row gutter={30}>
                {
                    [1, 2, 3, 4].map((item: any, index: number) => {
                        return (
                            <Col xxl={6} xl={6} xs={12}>
                                <div className={'imageNft'}
                                     style={{backgroundImage: `url("https://storage.googleapis.com/mycoin-public/nft/1648101466001_8WBH9BYY0GYXGKOX8DQA.png")`}}/>

                                <div>
                                    <div style={{fontSize: 18, marginTop: 10, marginBottom: 10, fontWeight: 500}}>Single
                                        Edition
                                    </div>
                                    <div style={{display: "flex"}}>
                                        <div style={{marginRight: 10}}>Price</div>
                                        <div>90,000₮</div>
                                    </div>
                                    <div style={{display: "flex"}}>
                                        <div style={{marginRight: 10}}>Name</div>
                                        <div>Улаан үстэй</div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }

            </Row>
        </>
    )
}

export default Detail