import React, {useCallback, useEffect, useState} from "react";
import {Button, DatePicker, Form, Input, Select, Table, Tag} from "antd";
import {API} from "../api";
import moment from "moment";

const queryString = require('query-string');
const {RangePicker} = DatePicker;


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

const dataSource = [
    {
        key: '1',
        UID: 'ID54654687',
        author: 'zorgio',
        nft: '27',
        price: '1,200,000',
        phone: '86662422',
        email: 't.sumbe0119@gmail.com'

    },
    {
        key: '2',
        UID: 'ID54654687',
        author: 'byambakhishig',
        nft: '39',
        price: '1,000,000',
        phone: '88405128',
        email: 'zorgio0410@gmail.com'

    },
    {
        key: '3',
        UID: 'ID54654687',
        author: 'sumbe',
        nft: '25',
        price: '1,800,000',
        phone: '88118348',
        email: 'Byambaa2@gmail.com'

    },
    {
        key: '4',
        UID: 'ID54654687',
        author: 'munkhuu',
        nft: '40',
        price: '2,200,000',
        phone: '99119069',
        email: 'Ulaanka@gmail.com'
    },
];

const columns = [
    {
        title: 'Хэрэглэгчийн UID',
        dataIndex: 'UID',
        key: 'UID',
    },
    {
        title: 'author',
        dataIndex: 'author',
        key: 'author',

    },
    {
        title: 'create nft',
        dataIndex: 'nft',
        key: 'nft',
    },
    {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
]

const Authors = () => {
    const [form] = Form.useForm();
    const [filter, updateFilter] = useState(initialFilter);

    const [state, updateState] = useState(initialState);
    const loadContent = (() => {
    });
    const onFinish = () => {
    };
    const clearSearch = (() => {
    })
    const handleTableChange = (() => {
    });
    useEffect(() => {
        loadContent()
    }, [])
    return (
        <div>
            <div style={{marginBottom: 30}}>
                <Form form={form} className="horizontal_search" layout="inline" onFinish={onFinish}>
                    <Form.Item
                        name="TxAddInfSub"
                    >
                        <Input placeholder="Утасны дугаар"/>
                    </Form.Item>
                    <Form.Item
                        name="TxAddInfSub"
                    >
                        <Input placeholder="Зохиогч"/>
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
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    total: state.result?.count || 0,
                    current: filter.page,
                    pageSize: filter.limit
                }}
                onChange={handleTableChange}
            />
        </div>
    )
}
export default Authors