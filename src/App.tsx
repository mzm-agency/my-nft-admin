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
import NftDrop from "./components/NftDrop";
import Authors from "./components/Authors";
import Detail from "./components/Detail";
import Login from "./components/Login";
import TransactionNft from "./components/TransactionNft";

const adminPath = process.env.PUBLIC_URL

function App() {
    const [loading, updateLoading] = useState(false);
    const [user, changeUser] = useState<any>(null);
    const loadInit = useCallback(async () => {
        updateLoading(true)
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
            updateLoading(false)
            //window.location.assign(`/`)
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
                    <MarketContext.Provider
                        value={{user, changeUser}}>
                        <Layout style={{minHeight: '100vh'}}>
                            <Layout.Sider collapsible style={{marginTop: -4}}>
                                <div className="logo"/>
                                <Menu style={{height: "100vh"}} defaultSelectedKeys={['1']} mode="inline">
                                    <Menu.Item key="bashboard" icon={<DashboardOutlined />} >
                                        <Link to={`${adminPath}`}>Dashboard</Link>
                                    </Menu.Item>
                                    <Menu.SubMenu key="drop" icon={<ScheduleOutlined />} title="Drops">
                                        <Menu.Item key="pending">
                                            <Link to={`${adminPath}/drop/pending`}>Pending drop</Link>
                                        </Menu.Item>
                                        <Menu.Item key="all">
                                            <Link to={`${adminPath}/drop/active`}>All drop</Link>
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.Item key="2" icon={<TeamOutlined/>} title="NFT">
                                        <Link to={`${adminPath}/nftCreate`}>Create Nft</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3" icon={<TeamOutlined/>} title="NFT">
                                        <Link to={`${adminPath}/authors`}>Зохиогчид</Link>
                                    </Menu.Item>
                                    {/*<Menu.Item key="4" icon={<TeamOutlined/>} title="NFT">*/}
                                    {/*    <Link to={`${adminPath}/exchange/nftDrop/detail`}>Detail</Link>*/}
                                    {/*</Menu.Item>*/}
                                </Menu>
                            </Layout.Sider>
                            <Layout className="site-layout" style={{marginTop: 20}}>
                                <Layout.Content style={{margin: '0 16px'}}>
                                    <Routes>
                                        <Route path={`${adminPath}/`} element={<Dashboard/>}/>
                                        <Route path={`${adminPath}/nftCreate`} element={<NftCreate/>}/>
                                        <Route path={`${adminPath}/drop/:status`} element={<NftDrop/>}/>
                                        <Route path={`${adminPath}/authors`} element={<Authors/>}/>
                                        <Route path={`${adminPath}/nftDrop/detail/:dropId`} element={<Detail/>}/>
                                        <Route path={`${adminPath}/login`} element={<Login/>}/>
                                        <Route path={`${adminPath}/exchange/nftDrop/transactionNft`} element={<TransactionNft/>}/>
                                    </Routes>
                                </Layout.Content>
                                <Layout.Footer style={{textAlign: 'center'}}>Ant Design ©2021 Created by Ant
                                    UED</Layout.Footer>
                            </Layout>
                        </Layout>
                    </MarketContext.Provider>
                )
            }
        </BrowserRouter>
    );
}

export default App;
