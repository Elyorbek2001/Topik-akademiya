import React from 'react'
import "./About.css"
import chat_bubble from "../imgsvsicon/imgs/chat-bubble-dynamic-color.png"

import rocket from "../imgsvsicon/imgs/rocket.png"

import money from "../imgsvsicon/imgs/money.png"
import travel from "../imgsvsicon/imgs/travel.png"
import target from "../imgsvsicon/imgs/target.png"
import key from "../imgsvsicon/imgs/key.png"
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='about'>

            <p className='Topik'>{t("TOPIK academy aniq siz uchun agar siz:")}</p>

            <div className='big_talk'>

                <div className="one_talk">

                    <div className='talk'>

                        <div className='talk_img'>
                            <img src={chat_bubble} alt="" />
                        </div>
                    </div>

                    <p className='text_p'>
                        <span style={{ color: '#4B9895' }}>{t("Qisqa")}</span>  {t("muddat ichida Koreys tilida gapirishni istaysiz")}
                    </p>

                </div>


                <div className="one_talk">

                    <div className='talk'>

                        <div className='talk_img'>
                            <img src={rocket} alt="" />
                        </div>
                    </div>

                    <p className='text_p'>
                        {t('Koreys tili o’rganib o’z')} <span style={{ color: '#4B9895' }}>{t('karyeria')}</span> {t('qurmoqchisiz')}
                    </p>

                </div>



                <div className="one_talk">

                    <div className='talk'>

                        <div className='talk_img'>
                            <img src={money} alt="" />
                        </div>
                    </div>

                    <p className='text_p'>
                        {t('Topik sertifikatini olib Koreyaning nufuzli universitetlariga')} <span style={{ color: '#4B9895' }}>{t('Grant')}</span> {t('yutmoqchisiz')}
                    </p>

                </div>



                <div className="one_talk">

                    <div className='talk'>

                        <div className='talk_img'>
                            <img src={travel} alt="" />
                        </div>
                    </div>

                    <p className='text_p'>
                        {t("Janubiy Koreya davlatida")}  <span style={{ color: '#4B9895' }}>{t('o’qish')}</span> va <span style={{ color: '#4B9895' }}>{t('ishlash')}</span>  {t('uchun ketmoqchisiz')}
                    </p>

                </div>


                <div className="one_talk">

                    <div className='talk'>

                        <div className='talk_img'>
                            <img src={target} alt="" />
                        </div>
                    </div>

                    <p className='text_p'>
                        {t('Koreys tilini o’rta darajda bilasiz va darajangizni')} <span style={{ color: '#4B9895' }}>{t('oshirmoqchimisiz')}</span>
                    </p>

                </div>



                <div className="one_talk">

                    <div className='talk'>

                        <div className='talk_img'>
                            <img src={key} alt="" />
                        </div>
                    </div>

                    <p className='text_p'>
                        {t('Ko’p yillardan buyon o’qib ham')} <span style={{ color: '#4B9895' }}>{t('natijaga')}</span> {t('chiqa olmayapsiz')}
                    </p>

                </div>

            </div>




            <button className='button_Iam'>{t('HA, BU MEN')}</button>



        </div>
    )
}

export default About
