import React, {useCallback, useEffect, useState} from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import {
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, Skeleton} from 'antd';
import {BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom';
import Dashboard from './components/Dashboard';

import {API} from '../src/api';

import NftCreate from "./components/NftCreate";
import Nft from "./components/Nft";
import BalanceList from "./components/BalanceList";

const adminPath = process.env.PUBLIC_URL

function App() {
    const [loading, updateLoading] = useState(false)


    const loadInit = useCallback(async () => {
        try {
            const user = await API.get({apiVersion: 'nft'})('/user/me');
            console.log(user)
            if (user.role == "admin" || user.role == "superadmin") {
                updateLoading(false)
            } else {
                window.location.assign(`/`)
                updateLoading(false)
            }
        } catch (e: any) {
            console.log(e)
        }
    }, []);
    useEffect(() => {
        loadInit().then();
    }, []);

    return (
        <BrowserRouter>
            <div className="header-container">
                <div className="left">
                    <h3>MY NFT ADMIN</h3>
                </div>
            </div>
            {
                loading ? (
                    <>
                        <Skeleton/>
                    </>
                ) : (
                    <Layout style={{minHeight: '100vh'}}>
                        <Layout.Sider collapsible style={{marginTop: -4}}>
                            <div className="logo"/>
                            <Menu style={{height: "100vh"}} defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1" icon={<TeamOutlined/>} title="NFT">
                                    <Link to={`${adminPath}/exchange/nftCreate`}>Create Nft</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<TeamOutlined/>} title="NFT">
                                    <Link to={`${adminPath}/exchange/nft`}>Nft</Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<TeamOutlined/>} title="NFT">
                                    <Link to={`${adminPath}/exchange/balance`}>Дансны хуулга</Link>
                                </Menu.Item>
                            </Menu>
                        </Layout.Sider>
                        <Layout className="site-layout" style={{marginTop: 20}}>
                            <Layout.Content style={{margin: '0 16px'}}>
                                <Routes>
                                    <Route path={`${adminPath}/`} element={<Dashboard/>}/>
                                    <Route path={`${adminPath}/exchange/nftCreate`} element={<NftCreate/>}/>
                                    <Route path={`${adminPath}/exchange/nft`} element={<Nft/>}/>
                                    <Route path={`${adminPath}/exchange/balance`} element={<BalanceList/>}/>
                                </Routes>
                            </Layout.Content>
                            <Layout.Footer style={{textAlign: 'center'}}>Ant Design ©2021 Created by Ant
                                UED</Layout.Footer>
                        </Layout>
                    </Layout>
                )
            }
        </BrowserRouter>
    );
}

export default App;
