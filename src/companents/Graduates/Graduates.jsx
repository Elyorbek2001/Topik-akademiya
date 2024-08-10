import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Graduates.css"
import { Autoplay } from 'swiper/modules';
import group82 from "../imgsvsicon/imgs/Group 82.png"
import { useTranslation } from 'react-i18next';

const Graduates = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='graduates'>
            <p className='gradutes_topik'>{t("Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz")}</p>

            <div className="gradutes_big">

                <div className='graduates_text'>

                    <p className='gradutes_consuling'> <span style={{ color: '#4B9895' }}>{t("TOPIK academy consulting")}</span>  {t("jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi")}</p>

                    <p className='gradutes_consulting_one'>{t("Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!")}</p>

                    <button className='gradutesbtn_ariza'>{t("ARIZA QOLDIRISH")}</button>
                </div>

                <div className='graduates_img'>

                    <div className='imgss'>
                        <Swiper
                            slidesPerView={2}

                            direction={'horizontal'}
                            spaceBetween={1}
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


                        </Swiper>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Graduates

