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
        id: '1',
        key: '1',
        price: '1,200,000',
        bankValue: 'ID54654687 t.sumbe0119@gmail.com',
        UID: 'ID54654687',
        date: '2022-01-19 15:00',
        tags: ['expend'],
        nft: '2',
        name: 'Хурд хамтлаг',
        transaction: ['cancel'],

    },
    {
        id: '2',
        key: '2',
        price: '1,000,000',
        bankValue: 'ID54654687 zorgio08@gmail.com',
        UID: 'ID54654687',
        date: '2022-01-19 15:00',
        tags: ['income'],
        nft: '3',
        name: 'Хурд хамтлаг',
        transaction: ['completed'],

    },
    {
        id: '3',
        key: '3',
        price: '1,800,000',
        bankValue: 'ID54654687 Bymbaa08@gmail.com',
        UID: 'ID54654687',
        date: '2022-01-19 15:00',
        tags: ['expend'],
        nft: '2',
        name: 'Хурд хамтлаг',
        transaction: ['cancel'],

    },
    {
        id: '4',
        key: '4',
        price: '2,200,000',
        bankValue: 'ID54654687 Munkhuu@gmail.com',
        UID: 'ID54654687',
        date: '2022-01-19 15:00',
        tags: ['income'],
        nft: '1',
        name: 'Хурд хамтлаг',
        transaction: ['cancel'],
    },
];

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Мөнгөн дүн',
        dataIndex: 'price',
        key: 'price',

    },
    {
        title: 'Гүйлгээний утга',
        dataIndex: 'bankValue',
        key: 'bankValue',
    },
    {
        title: 'Хэрэглэгчийн UID',
        dataIndex: 'UID',
        key: 'UID',
    },
    {
        title: 'Шилжүүлгийн огноо',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Шилжүүлгийн төрөл',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any) => (
            <>
                {tags.map((tag: any) => {
                        let color = tag;
                        if (tag === 'income') color = 'green';
                        else color = 'red'
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    }
                )
                }

            </>
        ),
    },
    {
        title: 'Шилжүүлгийн төлөв',
        key: 'transaction',
        dataIndex: 'transaction',
        render: (tags: any) => (
            <>
                {tags.map((tag: any) => {
                        let color = tag;
                        if (tag === 'cancel') color = 'red';
                        else color = 'green'
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    }
                )
                }

            </>
        ),
    },
]

const BalanceList = () => {
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
            <Form form={form} className="horizontal_search" layout="inline" onFinish={onFinish}>
                <Form.Item
                    name="TxAddInfSub"
                >
                    <Input placeholder="Хэрэглэгчийн ID"/>
                </Form.Item>
                <Form.Item
                    name="Amt"
                >
                    <Input
                        placeholder="Мөнгөн дүн"
                    />
                </Form.Item>
                <Form.Item
                    name="TxAddInf"
                >
                    <Input
                        placeholder="Гүлгээний утга"
                    />
                </Form.Item>
                <Form.Item
                    name="TxDt"
                >
                    <RangePicker
                        format={"YYYY/MM/DD"}
                    />
                </Form.Item>
                <Form.Item
                    name="status"
                >
                    <Select
                        placeholder="Төлөв"
                        allowClear
                    >
                        <Select.Option value="pending">pending</Select.Option>
                        <Select.Option value="completed">completed</Select.Option>
                    </Select>
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
export default BalanceList