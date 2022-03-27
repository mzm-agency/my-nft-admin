import {Link} from "react-router-dom";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';
import Slider from "react-slick";

const TopCreators = ({members}: any) => {
    return (
        <div className={'creators'}>
            <div className={'container marginLeftAuto marginRightAuto paddingLeft15 paddingRight15'}>
                <div className={'paddingTop50'}>
                    <div className={'paddingBottom25'}>
                        <h2 className={'textDark fontNftBlack font26 margin0'}>
                            Уран бүтээлчид
                        </h2>
                    </div>
                    <div>
                        <Swiper loop={false} breakpoints={{
                            1499: {slidesPerView: 6, spaceBetween: 25},
                            1399: {slidesPerView: 5, spaceBetween: 25},
                            1199: {slidesPerView: 4, spaceBetween: 25},
                            992: {slidesPerView: 3, spaceBetween: 25},
                            768: {slidesPerView: 2, spaceBetween: 25},
                            500: {slidesPerView: 2, spaceBetween: 25}
                        }}>
                            {
                                (members || []).map((member: any, index: number) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={'item borDer borderColorLight borderRadiusMedium'}>
                                                <div className={'paddingTop10'}>
                                                    <Slider centerMode={true}
                                                            infinite={true}
                                                            speed={500}
                                                            slidesToShow={1}
                                                            slidesToScroll={1}
                                                            focusOnSelect={true}
                                                            variableWidth={true}
                                                            initialSlide={0}>
                                                        {
                                                            (member?.nfts || []).map((nft: any, ind: number) => {
                                                                return (
                                                                    <div key={ind} className={'nft'}>
                                                                        <div>
                                                                            <Link
                                                                                to={`${process.env.PUBLIC_URL}/nft/${nft.slug}`}>
                                                                                <div
                                                                                    className={'subSingleImage margin4 borderRadiusMedium coverBackgroundSize coverBackgroundPositionTop repeatBackground'}
                                                                                    style={{backgroundImage: `url('https://storage.googleapis.com/mycoin-public/${nft.thumbnail}')`}}/>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </Slider>
                                                </div>
                                                <div className={'paddingTop5 paddingBottom25'}>
                                                    <Link to={`${process.env.PUBLIC_URL}/${member.middle}/profile`}>
                                                        <div
                                                            className={'avatarSubImage borderRadiusXMedium borDerOneWidth borderColorLight coverBackgroundSize coverBackgroundPosition marginLeftAuto marginRightAuto'}
                                                            style={{backgroundImage: `url('${process.env.PUBLIC_URL}/dynamicImage/nft1.jpg')`}}/>
                                                        <div className={'fontNftBold textCenter textDark marginTop10'}>
                                                            {member.middle}
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
        </div>
    )
}
export default TopCreators