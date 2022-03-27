import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import 'antd/dist/antd.css';
import './Utility.css';
import './App.css';
import './Video.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dashboard from './components/user/Dashboard';
import {API} from "../src/components/api";
import MarketContext from './providers/markets/MarketContext';


function App() {
    const navigate = useNavigate();
    const [user, changeUser] = useState<any>(null);
    const [config, updateConfig] = useState<any>(null);
    const [loading, updateLoading] = useState(true);

    const fetchConfig = useCallback(async () => {
        try {
            const config = await API.get({apiVersion: 'barong'})('/identity/configs')
            updateConfig(config)
        } catch (e) {
            console.log(e)
        }
    }, []);
    const loadInit = useCallback(async () => {
        try {
            const user = await API.get({apiVersion: 'nft'})('/user/me');
            if (user.state === 'pending') {
                localStorage.setItem("csrfToken", user.csrf_token);
                changeUser(user);
                updateLoading(false);
                navigate("/verification")
            } else {
                localStorage.setItem("csrfToken", user.csrf_token);
                changeUser(user)
                updateLoading(false)
            }
        } catch (e: any) {
            updateLoading(false)
        }
    }, [loading]);
    useEffect(() => {
        loadInit().then();
        fetchConfig().then()
    }, []);
    return (
        <>
            {
                loading ? (
                    <div className={'page'}>
                        <div className="preloader">
                            <div className="preloader-inner">
                                <div className={'preloader-icon'}>
                                    <span/>
                                    <span/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <MarketContext.Provider
                        value={{user, changeUser, config, updateConfig}}>
                        <Routes>
                            <Route path={'/'} element={<Dashboard/>}/>
                        </Routes>
                    </MarketContext.Provider>
                )
            }
        </>
    );
}

export default App;
