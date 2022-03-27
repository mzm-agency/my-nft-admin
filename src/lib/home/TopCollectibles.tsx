import {Link} from "react-router-dom";
import React from "react";
import {Button} from "antd";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';
import {formatMoney, formatType} from "../../general/formatMoney";

const TopCollectibles = ({items}: any) => {
    return (
        <div className={'creators paddingTop50 paddingBottom70'}>
            <div className={'container marginLeftAuto marginRightAuto paddingLeft15 paddingRight15'}>
                <div className={'paddingBottom25'}>
                    <h2 className={'textDark fontNftBlack font26 margin0'}>
                        Онцлох NFT
                    </h2>
                </div>
                <div>
                    <Swiper loop={false} breakpoints={{
                        1399: {slidesPerView: 4, spaceBetween: 25},
                        1199: {slidesPerView: 3, spaceBetween: 25},
                        992: {slidesPerView: 2, spaceBetween: 25},
                        768: {slidesPerView: 2},
                        500: {slidesPerView: 1}
                    }}>
                        {
                            (items || []).map((item: any, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={'item borDer borderColorLight borderRadiusMedium padding20'}>
                                            <div className={'displayFlex alignItems justifySpaceBetween'}>
                                                <div className={'displayFlex alignItems'}>
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}/${item?.member?.middle}/profile`}>
                                                        <div
                                                            className={'avatarSubImage borderRadiusXLarge borDerOneWidth borderColorLight coverBackgroundSize coverBackgroundPosition marginLeftAuto marginRightAuto'}
                                                            style={{backgroundImage: `url('${item?.member?.avatar}')`}}/>
                                                    </Link>
                                                    <div className={'marginLeft10'}>
                                                        <div className={'font13 textDark fontNftMedium'}>
                                                            Зохиогч
                                                        </div>
                                                        <div className={'name font15 fontNftBold'}>
                                                            <Link className={'textDark'}
                                                                  to={`${process.env.PUBLIC_URL}/${item?.member?.middle}/profile`}>{item?.member?.middle}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Button className={'wishList'}>
                                                        <div className={'iconMedium darkBackgroundColor'}
                                                             style={{WebkitMaskImage: `url(${process.env.PUBLIC_URL}/image/wishList.png)`}}/>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className={'paddingTop15'}>
                                                <Link to={`${process.env.PUBLIC_URL}/${item.slug}`}>
                                                    <div
                                                        className={'singleImage borderRadiusMedium coverBackgroundContain coverBackgroundPosition repeatBackground'}
                                                        style={{backgroundImage: `url('https://storage.googleapis.com/mycoin-public/${item.thumbnail}')`}}/>
                                                    <div
                                                        className={'marginTop10 paddingTop10 displayFlex alignItems justifySpaceBetween'}>
                                                        <div>
                                                            <div>
                                                                <h4 className={'fontNftBlack font20 margin0 textDark'}>
                                                                    {item.title}
                                                                </h4>
                                                            </div>
                                                            <div
                                                                className={'fontNftRegular font14 marginTop10 textDark'}>
                                                                {formatType(item.type)}
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={'paddingLeft15 paddingRight15 displayFlex alignItems silverBackgroundColor borderRadiusMedium textDark fontNftBold price'}>
                                                            {formatMoney(item.price, 0, '.', ',', item.currency_id === "mnt" ? " ₮" : " MCC")}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default TopCollectibles