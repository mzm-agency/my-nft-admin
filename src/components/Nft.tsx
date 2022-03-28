import React, {useCallback, useState} from 'react'
import {Button, Form, Input, Table, Tag} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";

const dataSource = [
    {
        key: '1',
        number: '1',
        image: 'https://unsplash.com/photos/jA3WjtwdpIY',
        uuid: 'ID54652687',
        date: '2022-01-19 15:00',
        nft: '2',
        price: '1,200,000'
    },
    {
        key: '2',
        number: '2',
        image: 'https://unsplash.com/photos/jA3WjtwdpIY',
        uuid: 'ID54656687',
        date: '2022-01-19 15:00',
        nft: '3',
        price: '1,000,000'
    },
    {
        key: '3',
        number: '3',
        image: 'https://unsplash.com/photos/jA3WjtwdpIY',
        uuid: 'ID54654687',
        date: '2022-01-19 15:00',
        nft: '2',
        price: '1,800,000'
    },
    {
        key: '4',
        number: '4',
        image: 'https://unsplash.com/photos/jA3WjtwdpIY',
        uuid: 'ID54654687',
        date: '2022-01-19 15:00',
        nft: '1',
        price: '2,200,000'
    },
];

const columns = [
    {
        title: '№',
        dataIndex: 'number',
        titile : '',
        key: 'number',
    },
    {
        title: 'Nft Зураг',
        dataIndex: 'image',
        key: 'image',

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
        title: 'Үнэ',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Үйлдэл',
        dataIndex: '',
        key: 'x',
        render: (text: string, record: any) => <div>
            <Button style={{marginRight: 24}} onClick={() => {}}
                    type="default" >Засах</Button>
            <Button onClick={() =>{}} style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'red',
                color: 'red'
            }}>Устгах</Button>
        </div>
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

const Nft = () => {
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
export default Nft