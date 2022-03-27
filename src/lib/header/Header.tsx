import React, {useCallback, useContext, useState} from 'react';
import {Modal, Input, Row, Col, Tabs, Button, Dropdown, Menu, Drawer} from "antd";
import { DownOutlined } from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import MarketContext from "../../providers/markets/MarketContext";
import {API} from "../../api";
function Header() {
    const navigate = useNavigate()
    const { TabPane } = Tabs;
    const { Search } = Input;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const {user, changeUser} = useContext(MarketContext);
    const logout = useCallback(async (e)=>{
        e.preventDefault();
        let user = await API.delete({
            apiVersion: 'barong'
        })('/identity/sessions');
        localStorage.removeItem("csrfToken");
        changeUser(null)
        navigate(`${process.env.PUBLIC_URL}/`)
    },[]);
    const menu = (
        <Menu>
            <Menu.Item>
                <Link className={'color-hover'} to={`${process.env.PUBLIC_URL}/my-collection`}>
                    <div className={'displayFlex alignItems'}>
                        <div className="iconMedium darkBackgroundColor marginRight10" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/coverEdit.png)` }} />
                        <div className={'fontNftMedium textDark'}>
                            Create Collection
                        </div>
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className={'color-hover'} to={`${process.env.PUBLIC_URL}/my-drop`}>
                    <div className={'displayFlex alignItems'}>
                        <div className="iconMedium darkBackgroundColor marginRight10" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/camera.png)` }} />
                        <div className={'fontNftMedium textDark'}>
                            Create Drop
                        </div>
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className={'color-hover'} to={`${process.env.PUBLIC_URL}/profile`}>
                    <div className={'displayFlex alignItems'}>
                        <div className="iconMedium darkBackgroundColor marginRight10" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/edit.png)` }} />
                        <div className={'fontNftMedium textDark'}>
                            Хувийн мэдээлэл
                        </div>
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className={'color-hover'} to={`${process.env.PUBLIC_URL}/profile/wallet`}>
                    <div className={'displayFlex alignItems'}>
                        <div className="iconMedium darkBackgroundColor marginRight10" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/wallet.png)` }} />
                        <div className={'fontNftMedium textDark'}>
                            Миний хэтэвч
                        </div>
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className={'color-hover'} to={`${process.env.PUBLIC_URL}/profile/notification`}>
                    <div className={'displayFlex alignItems'}>
                        <div className="iconMedium darkBackgroundColor marginRight10" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/notification.png)` }} />
                        <div className={'fontNftMedium textDark'}>
                            Мэдэгдэл
                        </div>
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className={'color-hover'} onClick={(e)=>logout(e)} to={`#`}>
                    <div className={'displayFlex alignItems'}>
                        <div className="iconMedium darkBackgroundColor marginRight10" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/logout.png)` }} />
                        <div className={'fontNftMedium textDark'}>
                            Гарах
                        </div>
                    </div>
                </Link>
            </Menu.Item>
        </Menu>
    );
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <header className={'header'}>
            <div className={'defaultBackgroundColor zMedium borderBottom borderColorLight'}>
                <div className={'container marginLeftAuto marginRightAuto paddingLeft15 paddingRight15'}>
                    <div className={'displayFlex alignItems justifySpaceBetween'}>
                        <div className={'left displayFlex alignItems'}>
                            <div className={'displayFlex alignItems'}>
                                <div className={'mobileMenu'}>
                                    <Button className={'padding0'} type="text" onClick={showDrawer}>
                                        <div className={'sub silverBackgroundColor borderRadiusLarge displayFlex alignItems justifyCenter marginRight10'}>
                                            <div className="iconMedium darkBackgroundColor" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/menu.png)` }} />
                                        </div>
                                    </Button>
                                </div>
                                <Drawer placement="left" onClose={onClose} visible={visible}>
                                    1
                                </Drawer>
                                <div className={'logo marginRight30 lightBlueBackgroundColor borderRadiusLarge displayFlex alignItems justifyCenter'}>
                                    <Link className={'fontNftBlack font20 textDark'} to={`${process.env.PUBLIC_URL}/`}>
                                        NFT
                                    </Link>
                                </div>
                            </div>
                            <div className={'search displayFlex alignItems paddingLeft15 paddingRight10 silverBackgroundColor borderRadiusMedium'}>
                                <Search allowClear placeholder="Хайх зүйлээ бичнэ үү..." />
                            </div>
                        </div>
                        <div className={'right displayFlex alignItems'}>
                            <div className={'menu font15 paddingTop20 paddingBottom20 paddingRight15'}>
                                <Link className={'textDark fontNftBold paddingLeft20 paddingRight20'} to={`${process.env.PUBLIC_URL}/marketPlace`}>
                                    Marketplace
                                </Link>
                                <Link className={'textDark fontNftBold paddingLeft20 paddingRight20'} to={`${process.env.PUBLIC_URL}/drops`}>
                                    Drops
                                </Link>
                                <Link className={'textDark fontNftBold paddingLeft20 paddingRight15'} to={`${process.env.PUBLIC_URL}/video`}>
                                    Видео
                                </Link>
                            </div>
                            <div className={'link buttonLink borderLeft borderColorLight paddingLeft25 paddingRight25 paddingTop20 paddingBottom20 font15 displayFlex alignItems'}>
                                <Link className={'lightBlueBackgroundColor borderRadiusMedium textDark fontNftBold displayFlex alignItems justifyCenter marginRight15 paddingLeft25 paddingRight25'} to={`${process.env.PUBLIC_URL}/create`}>
                                    Create NFT
                                </Link>
                                <Link className={'silverBackgroundColor borderRadiusMedium textDark fontNftBold displayFlex alignItems justifyCenter paddingLeft25 paddingRight25'} to={'/'}>
                                    My NFT
                                </Link>
                            </div>
                            <div className={'bar borderLeft borderRight borderColorLight paddingLeft25 paddingRight25 paddingTop20 paddingBottom20 displayFlex alignItems'}>
                                <div className={'positionRelative'}>
                                    <Link to={`${process.env.PUBLIC_URL}/`}>
                                        <div className={'sub silverBackgroundColor borderRadiusLarge displayFlex alignItems justifyCenter marginRight10'}>
                                            <div className="iconMedium darkBackgroundColor" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/wishList.png)` }} />
                                        </div>
                                        {/*<div className={'number fontNftBold borderRadiusLarge textLight font12 positionAbsolute top right displayFlex alignItems justifyCenter'}>*/}
                                        {/*    12*/}
                                        {/*</div>*/}
                                    </Link>
                                </div>
                                <div className={'positionRelative'}>
                                    <div className={'sub silverBackgroundColor borderRadiusLarge displayFlex alignItems justifyCenter'}>
                                        <div className="iconMedium darkBackgroundColor" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/notification.png)` }} />
                                        {/*<div className={'numberChild fontNftBold borderRadiusLarge textLight font12 positionAbsolute top right number displayFlex alignItems justifyCenter'}>*/}
                                        {/*    25*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className={'profile paddingLeft25'}>
                                {
                                    user ? (
                                        <div>
                                            <Dropdown overlay={menu}>
                                                <Link className={'displayFlex alignItems'} to={`${process.env.PUBLIC_URL}/profile`}>
                                                    <div className={'sub silverBackgroundColor borderRadiusLarge displayFlex alignItems justifyCenter'}>
                                                        <img className={'borderRadiusLarge'} width={36} src={user.avatar ? user.avatar : `${process.env.PUBLIC_URL}/image/profile.png`} alt={'logo'}/>
                                                    </div>
                                                    <div className={'marginLeft15'}>
                                                        <div className={'textDark fontNftRegular font15'}>
                                                            <b>
                                                                {user?.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")}
                                                            </b>
                                                        </div>
                                                        <div className={'textDark fontNftBold font15 marginTop5'}>
                                                            {user?.middle}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Dropdown>
                                        </div>
                                    ) : (
                                        <div className={'link'}>
                                            <Link className={'silverBackgroundColor borderRadiusMedium textDark font15 fontNftBold displayFlex alignItems justifyCenter paddingLeft25 paddingRight25'} to={`${process.env.PUBLIC_URL}/login`}>
                                                Нэвтрэх
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header
