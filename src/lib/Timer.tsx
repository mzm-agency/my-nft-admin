import React from "react";
import Countdown from "react-countdown";

interface TimerProps {
    date: string
}
const renderItem = (data:any) => {
    return (
        <div className={'displayFlex alignItems'}>
            <div className={'marginRight30 displayFlex alignItems textDark'}>
                <div className={'fontNftBlack font24 paddingRight25'}>
                    {data.formatted.days}
                    <div className={'displayBlock font13 fontNftRegular textDark'}>Өдөр</div>
                </div>
                <div className={'fontNftBlack font24 paddingRight25'}>
                    {data.formatted.hours}
                    <div className={'displayBlock font13 fontNftRegular textDark'}>Цаг</div>
                </div>
                <div className={'fontNftBlack font24 paddingRight25'}>
                    {data.formatted.minutes}
                    <div className={'displayBlock font13 fontNftRegular textDark'}>Минут</div>
                </div>
                <div className={'fontNftBlack font24'}>
                    {data.formatted.seconds}
                    <div className={'displayBlock font13 fontNftRegular textDark'}>Секунд</div>
                </div>
            </div>
        </div>
    )
}
const Timer = ({date}:TimerProps) => {
    return (
        <Countdown
            date={Date.parse(date)}
            renderer={renderItem}
        />

    )
}
export default Timer