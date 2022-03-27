import React, {useCallback, useEffect, useState} from "react"
import {API} from "../../api"
import config from "../../config";

interface ContentState {
    loading: boolean
    content: any
    code: number
    message?: string
}
const useTickers = (): [ContentState, any] => {
    const [content, changeContent] = useState<ContentState>({
        loading: true,
        content: {},
        code: 200
    });
    const loadContent = useCallback(async () => {
        try {
            changeContent({
                ...content,
                loading: true
            })
            let tickers = await API.get({apiVersion: 'peatio'})('/public/markets/tickers');
            const tickersObj:any = {}
            Object.keys(tickers).forEach(key=>{
                tickersObj[key] = tickers[key].ticker
            });
            changeContent({
                loading: false,
                content: tickersObj,
                code: 200
            })
        } catch (e) {
            console.log(e)
        }
    }, []);
    const changeTickers = useCallback((data: any) => {
        let d:any = {}
        for(let o of Object.keys(data)){
            d[o]=data[o].ticker
        }
        if (!content.loading && content.content) {
            changeContent({
                loading: false,
                content: d,
                code: 200
            })
        }
    }, [content]);
    useEffect(()=>{
        const tickerEvent = config.get('emitter').addListener('global.tickers', function (data:any) {
            console.log(data)
            changeTickers(data)
        });
        return () => tickerEvent.remove();
    },[content])
    useEffect(() => {
        loadContent().then();
    }, []);
    return [content, loadContent]
}

export default useTickers