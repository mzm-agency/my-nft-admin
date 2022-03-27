import React from 'react';
import Loader from "../Loader";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ErrorView from "../ErrorView";

interface Props {
    loading?: boolean
    code?: number
    children: any
    reload?: any
    header?: boolean
    footer?: boolean
    trading?: boolean
    headerClass?: string
}

const successCode:any[] = [200, 201, 202, 204];

const ViewContainer = ({children, loading, code, reload, header, footer, headerClass, trading}: Props) => {

    return (
        <>
            {!header ? <Header/> : null}
            {loading ? <Loader /> : (successCode.indexOf(code || 200) > -1 ? children :
                <ErrorView code={code} reload={reload}/>)}
            {!footer ? <Footer/> : null}
        </>
    )
}
export default ViewContainer
