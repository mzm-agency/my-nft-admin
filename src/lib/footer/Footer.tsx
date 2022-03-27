import React from 'react';
import {Link} from "react-router-dom";
function Footer() {
    return (
        <footer className={'header footer borderTop borderBottom borderColorLight defaultBackgroundColor zMedium'}>
            <div className={'container marginLeftAuto marginRightAuto paddingLeft15 paddingRight15'}>
                <div className={'displayFlex alignItems justifySpaceBetween'}>
                    <div className={'left displayFlex alignItems'}>
                        <div className={'logo lightBlueBackgroundColor borderRadiusLarge displayFlex alignItems justifyCenter'}>
                            <Link className={'fontNftBlack font20 textDark'} to={`${process.env.PUBLIC_URL}/`}>
                                NFT
                            </Link>
                        </div>
                        <div className={'marginLeft30 borderLeft borderColorLight menu font15'}>
                            <a className={'textDark fontNftBold paddingRight20'} href={'https://mycoin.mn/'}>
                                MyCoin
                            </a>
                            <a className={'textDark fontNftBold paddingLeft20 paddingRight20'} href={'https://mycoin.mn/'}>
                                Арилжаа
                            </a>
                            <Link className={'textDark fontNftBold paddingLeft20'} to={`${process.env.PUBLIC_URL}/terms`}>
                                Үйлчилгээний нөхцөл
                            </Link>
                        </div>
                    </div>
                    <div className={'right'}>
                        <div className={'borderLeft borderColorLight paddingTop15 paddingBottom15 paddingLeft25 displayFlex alignItems'}>
                            <div className={'positionRelative marginRight30 phone'}>
                                <a className={'displayFlex alignItems'} href="tel:+97677777746">
                                    <div className={'sub silverBackgroundColor borderRadiusLarge displayFlex alignItems justifyCenter marginRight5'}>
                                        <div className="iconMedium darkBackgroundColor" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/phone.svg)` }} />
                                    </div>
                                    <div className="textDark fontNftMedium marginLeft10 font15">+976 7777 7746</div>
                                </a>
                            </div>
                            <div className={'positionRelative send'}>
                                <a className={'displayFlex alignItems'} href="mailto:support@mycoin.mn">
                                    <div className={'sub silverBackgroundColor borderRadiusLarge displayFlex alignItems justifyCenter'}>
                                        <div className="iconMedium darkBackgroundColor" style={{ WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/send.svg)` }} />
                                    </div>
                                    <div className="textDark fontNftMedium marginLeft10 font15">support@mycoin.mn</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer
