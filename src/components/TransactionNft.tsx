import React from "react";

const TransactionNft = () => {
    return (
        <div className={'transactionNft'}>

            <div style={{display: "flex"}}>
                <div>
                    <h1 style={{marginBottom: 30}}>Үйнийн мэдээлэл</h1>
                    <div className={'headerBox'}>
                        <div className={'top'}>
                            <p>Шал үнэ</p>
                            <p>Дээд үнэ</p>
                            <p>Нийт арилжаа</p>
                        </div>
                        <div className={'bottom'}>
                            <p>1.000.000MNT</p>
                            <p>2.000.000MNT</p>
                            <p>6 Арилжаа</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 style={{marginBottom: 30}}>Гүйлгээ</h1>
                    <div className={'transactionBox'}>
                        {
                            [1, 2, 3, 4, 5, 6].map((item: any, index: number) => {
                                return (
                                    <div key={index} className={'middle'}>
                                        <p>v.narmandakh@gmail.com</p>
                                        <p>100,000,000MNT</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TransactionNft