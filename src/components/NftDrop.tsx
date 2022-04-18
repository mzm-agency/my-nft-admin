import React, {useCallback, useState} from 'react'
import {Button, Form, Input, Table, Tag} from "antd";
import {Link} from "react-router-dom";

const adminPath = process.env.PUBLIC_URL
const dataSource = [
    {
        key: '1',
        author: 'Nomodia_Tsogt',
        name: 'Nomadic Mongo Art Collection',
        drops: '13',
        date: '2022.04.10 15:00',


    },
    {
        key: '2',
        author: 'Ulzii-Orshih',
        name: 'Mongolian Wolfs Collection',
        drops: '20',
        date: '2022.04.15 13:00',


    },
    {
        key: '3',
        author: 'Zorgio',
        name: 'Broken Money Nft Collection',
        drops: '21',
        date: '2022.05.10 16:00',

    },
    {
        key: '4',
        author: 'SumbeArt',
        name: 'Bad Money Nft Collection',
        drops: '10',
        date: '2022.06.20 18:00',


    },
];

const columns = [
    {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: 'Drops Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Drops NFTs',
        dataIndex: 'drops',
        key: 'drops',
    },
    {
        title: 'Open Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Detail',
        dataIndex: 'detail',
        key: 'date',
        render: (tags: any) => (
            <Link to={`${adminPath}/exchange/nftDrop/detail`} style={{display: "flex"}}>
                <div onClick={() => {
                }} className={'btnDetail'}>
                    Дэлгэрэнгүй
                </div>
            </Link>
        ),
    },
    {
        title: 'Төлөв',
        key: 'tags',
        render: (tags: any) => (
            <div style={{display: "flex"}}>
                <div onClick={() => {
                }} className={'btnConfirm'}>
                    Зөвшөөрөх
                </div>
                <div onClick={() => {
                }} className={'btnDelete'}>
                    Цуцлах
                </div>

            </div>
        ),
    },
]

interface State {
    loading: boolean
    result: any
}

const initialState: State = {
    loading: true,
    result: null
}

interface Filter {
    page: number
    limit: number
    email: string
    uid: string
}

const initialFilter: Filter = {
    page: 1,
    limit: 10,
    email: "",
    uid: ""
}

const NftDrop = () => {
    const [filter, updateFilter] = useState(initialFilter);
    const [loading, setLoading] = useState(false);
    const [state, updateState] = useState(initialState);

    const onFinish = useCallback((values) => {
        {
        }
    }, [state, filter]);
    const clearSearch = useCallback(() => {

    }, [])

    const handleTableChange = useCallback((pagination, filters, sorter) => {

    }, [state, filter]);

    return (
        <div>
            <div style={{marginBottom: 30}}>
                <Form  className="horizontal_search" layout="inline" onFinish={onFinish}>
                    <Form.Item
                        name="uid"
                    >
                        <Input placeholder="Drops name"/>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Хайх
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            onClick={() => clearSearch()}
                            type="default"
                            htmlType="button"
                        >
                            Цэвэрлэх
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Table
                size="middle"
                dataSource={dataSource} columns={columns}
                pagination={{
                    total: state.result?.count || 0,
                    current: filter.page,
                    pageSize: filter.limit
                }}
                loading={loading}
                onChange={handleTableChange}
            />
        </div>
    )
}
export default NftDrop ;