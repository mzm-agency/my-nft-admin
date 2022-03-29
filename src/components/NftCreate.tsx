import React, {useCallback, useState} from 'react'
import {Button, Form, Input, Table, Tag} from "antd";

const dataSource = [
    {
        key: '1',
        email: 't.sumbe0119@gmail.com',
        uuid: 'ID54652687',
        role: 'member',
        date: '2022-01-19 15:00',
        tags: ['pending'],
        nft: '2',
        name: 'Хурд хамтлаг',
        price: '1,200,000'
    },
    {
        key: '2',
        email: 'zorgio08@gmail.com',
        uuid: 'ID54656687',
        role: 'member',
        date: '2022-01-19 15:00',
        tags: ['loser'],
        nft: '3',
        name: 'Хурд хамтлаг',
        price: '1,000,000'
    },
    {
        key: '3',
        email: 'Bymbaa08@gmail.com',
        uuid: 'ID54654687',
        role: 'member',
        date: '2022-01-19 15:00',
        tags: ['active'],
        nft: '2',
        name: 'Хурд хамтлаг',
        price: '1,800,000'
    },
    {
        key: '4',
        email: 'Munkhuu@gmail.com',
        uuid: 'ID54654687',
        role: 'member',
        date: '2022-01-19 15:00',
        tags: ['loser'],
        nft: '1',
        name: 'Хурд хамтлаг',
        price: '2,200,000'
    },
];

const columns = [
    {
        title: 'UID',
        dataIndex: 'uuid',
        key: 'uuid',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',

    },
    {
        title: 'Эрх',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Огноо',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'create nft',
        dataIndex: 'nft',
        key: 'nft',
    },
    {
        title: 'nft name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Үнэ',
        dataIndex: 'price',
        key: 'price',
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
                        <Input placeholder="Хэрэглэгчийн ID"/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                    >
                        <Input
                            placeholder="Имэйл"
                        />
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