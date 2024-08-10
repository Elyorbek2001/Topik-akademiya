import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import "./Natija.css"
import group82 from "../imgsvsicon/imgs/Group 82.png"
import { useTranslation } from 'react-i18next';

const Natija = () => {
    const { t, i18n } = useTranslation();
    return (
        <div id='Natija' className='Natija'>

            <p className='Topik'>{t('O’quvchilarimizning natijalari TOPIK 6 gacha')}</p>




            <div className='imgs'>
                <Swiper
                    slidesPerView={4}

                    direction={'horizontal'}
                    spaceBetween={0}
                    freeMode={true}
                    freeModeMomentum={false}
                    freeModeMomentumBounce={false}
                    speed={6000}
                    autoplay={{

                        delay: 0,
                        disableOnInteraction: true,
                        reverseDirection: true,
                    }}

                    loop={true}
                    grapCursor={true}
                    modules={[Autoplay]}

                    // modules={}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                </Swiper>

            </div>

            <div className='imgs'>
                <Swiper
                    slidesPerView={4}

                    direction={'horizontal'}
                    spaceBetween={0}
                    freeMode={true}
                    freeModeMomentum={false}
                    freeModeMomentumBounce={false}
                    speed={6000}
                    autoplay={{
                        stopOnLastSlide: true,
                        delay: 0,
                        disableOnInteraction: false,
                    }}

                    loop={true}
                    grapCursor={true}
                    modules={[Autoplay]}


                    // modules={}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={group82} alt="" /></SwiperSlide>
                </Swiper>

            </div>



            <button className='button_ariza'>
                {t('ARIZA QOLDIRISH')}
            </button>

        </div >
    )
}

export default Natija
