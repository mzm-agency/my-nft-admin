import React, {useCallback, useState} from 'react'
import {Button, Form, Input, Table, Tag} from "antd";
import {Link} from "react-router-dom";

const adminPath = process.env.PUBLIC_URL

const dataSource = [
    {
        key: '1',
        name: 'Nomadic Mongo Art',
        type: 'Single edition',
        NFTs: '4',
        price: '1,200,000',
        picture: 'nomadic.jpg',
        tags: ['pending'],

    },
    {
        key: '2',
        name: 'Broken money nft',
        type: 'Single edition',
        NFTs: '4',
        price: '1,000,000',
        picture: 'Broken.jpg',
        tags: ['loser'],

    },
    {
        key: '3',
        name: 'Bored Apes',
        type: 'Limited edition ',
        NFTs: '5',
        price: '1,000,000',
        picture: 'money.jpg',
        tags: ['active'],
    },
    {
        key: '4',
        name: 'Torgo Brand',
        type: 'Open edition',
        NFTs: '8',
        price: '2,200,000',
        picture: 'Bad-money-nft.jpg',
        tags: ['loser'],

    },
];

const columns = [
    {
        title: 'Nft Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Nft Type',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: 'NFTs',
        dataIndex: 'NFTs',
        key: 'NFTs',
    },
    {
        title: 'NFT Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'NFT Picture',
        dataIndex: 'picture',
        key: 'pict  ure',
    },
    {
        title: 'NFT transactions',
        dataIndex: 'transactions',
        key: 'transactions',
        render: (tags: any) => (
            <Link to={`${adminPath}/exchange/nftDrop/transactionNft`} style={{display: "flex"}}>
                <div onClick={() => {
                }} className={'btnDetailTransaction'}>
                    Оролцогчид
                </div>
            </Link>
        ),
    },

    {
        title: 'Төлөв',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any) => (
            <>
                {tags.map((tag: any) => {
                    let color = tag;
                    if (tag === 'loser') {
                        color = 'pink';
                    } else if (tag === 'pending') {
                        color = '#f29339'
                    } else if (tag === 'active') {
                        color = 'green'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
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

const NftCreate = () => {
    const [form] = Form.useForm();
    const [filter, updateFilter] = useState(initialFilter);
    const [loading, setLoading] = useState(false);
    const [state, updateState] = useState(initialState);

    const onFinish = useCallback((values) => {
        updateFilter({
            email: values.email || "",
            uid: values.uid || "",
            page: 1,
            limit: 10
        })
    }, [state, filter]);
    const clearSearch = useCallback(() => {
        form.resetFields();
        updateFilter(initialFilter)
    }, [])

    const handleTableChange = useCallback((pagination, filters, sorter) => {
        updateFilter({
            ...filter,
            page: filter.limit === pagination.pageSize ? pagination.current : 1,
            limit: pagination.pageSize
        })
    }, [state, filter]);

    return (
        <div>
            <div style={{marginBottom: 30}}>
                <Form form={form} className="horizontal_search" layout="inline" onFinish={onFinish}>
                    <Form.Item
                        name="uid"
                    >
                        <Input placeholder="NftDrop name"/>
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
export default NftCreate