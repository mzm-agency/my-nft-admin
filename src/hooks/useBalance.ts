import React, { useCallback, useEffect, useState } from "react"
import { API } from "../api"
import {RequestOptions} from "../api/requestBuilder";
interface ContentState {
    loading: boolean
    balances: any[]
    code: number
}
const tradesOptions: RequestOptions = {
    apiVersion: 'peatio',
};
const useBalance = (): [ContentState, any] => {
    const [content, updateContent] = useState<ContentState>({
        loading: false,
        balances: [],
        code: 200
    })
    const loadBalance = useCallback(async () => {
        try {
            if(!content.loading){
                updateContent(a=>{
                    return {
                        ...a,
                        loading:true
                    }
                })
                let balances = await await API.get(tradesOptions)('/account/balances');
                updateContent({
                    loading: false,
                    balances: balances || [],
                    code: 200
                });
            }else{
                updateContent(a=>{
                    return {
                        ...a,
                        loading:false
                    }
                })
            }
            
        } catch (e) {
            console.log(e)
            updateContent({
                loading: false,
                balances: [],
                code: 200
            });
        }
    }, [content]);
    useEffect(() => {
        updateContent({
            loading: true,
            balances: [],
            code: 200
        });
        loadBalance().then()
    }, [])
    return [content, loadBalance]
}

export default useBalance