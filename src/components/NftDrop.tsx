import React, {useCallback, useEffect, useState} from 'react'
import {Avatar, Button, Form, Input, Table, Tag} from "antd";
import {Link, useParams} from "react-router-dom";
import {API} from "../api";
import queryString from "query-string";

const adminPath = process.env.PUBLIC_URL;

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
    name: string
}

const initialFilter: Filter = {
    page: 1,
    limit: 10,
    name: ""
}

const NftDrop = () => {
    const {status} = useParams()
    const [filter, updateFilter] = useState(initialFilter);
    const [state, updateState] = useState(initialState);

    const fetchContent = useCallback(async ()=>{
        updateState({...state,loading: true})
        try{
            const response = await API.get({apiVersion:"nft"})(`/drop/list/${status}?${queryString.stringify(filter)}`);
            updateState({
                loading: false,
                result: response
            })
        }catch (e) {
            updateState({
                loading: false,
                result: {}
            })
        }
    },[filter, state])

    const onFinish = useCallback((values) => {

    }, [state, filter]);
    const clearSearch = useCallback(() => {

    }, [])

    const handleTableChange = useCallback((pagination, filters, sorter) => {
        updateFilter({
            ...filter,
            page: pagination.pageSize
        })
    }, [state, filter]);


    useEffect(()=>{
        fetchContent()
    },[status, filter])

    const columns = [
        {
            title: 'Logo',
            dataIndex: 'logo',
            render: (text:any, record: any) => (
                <Avatar src={record.logo} />
            ),
        },
        {
            title: 'Drops Name',
            dataIndex: 'title',
        },
        {
            title: 'Drops NFTs',
            dataIndex: 'drops',
            key: 'drops',
        },
        {
            title: 'Open Date',
            dataIndex: 'start_date',
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
        },
        {
            title: 'Action',
            render: (text:any, record: any) => (
                <Link to={`${adminPath}/nftDrop/detail/${record.id}`} style={{display: "flex"}}>
                    <div onClick={() => {
                    }} className={'btnDetail'}>
                        Дэлгэрэнгүй
                    </div>
                </Link>
            ),
        },
    ]

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
                dataSource={state.result?.rows || []}
                columns={columns}
                pagination={{
                    total: state.result?.count || 0,
                    current: filter.page,
                    pageSize: filter.limit
                }}
                loading={state.loading}
                onChange={handleTableChange}
            />
        </div>
    )
}
export default NftDrop ;