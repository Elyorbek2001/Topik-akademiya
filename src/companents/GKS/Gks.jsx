import React from 'react'
import "./Gks.css";
import gks from "../imgsvsicon/imgs/gks.png"
import pos from "../imgsvsicon/imgs/pos.png"
import { useTranslation } from 'react-i18next';

const Gks = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='Gks'>

            <p className='Topik'>{t("Koreya Universitetlariga 100% gacha grant yutish imkoniyati")}</p>

            <img className='position_img' src={pos} alt="" />

            <div className="Gks_bigg">

                <div className='Gks_img'>
                    <img src={gks} alt="" />
                </div>


                <div className='Gks_grand'>
                    <div>
                        <p className='global'>{t('GKS (Global Korean Scholarship)')} - <span style={{ color: '#ABDDB1' }}>$70.000</span>{t("lik Grant")}</p>
                        <p className='opportunity'>{t("Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan")} <span style={{ color: '#5FACA9' }}>{t('xorijiy')}</span> {t("talabalarning Koreyada bakalavr va magistratura bosqichida")} <span style={{ color: '#5FACA9' }}>{t('100% gacha to’liq grant')}</span>

                            {t(' va oylik ')}<span style={{ color: '#5FACA9' }}>{t("stipendiya")}</span> {t("olish imkoniyatingiz bor")}</p>
                    </div>


                    <div>
                        <p className='what'>{t('GKS granti sizga nima beradi')}</p>
                        <ul className='ul_li'>
                            <li>{t('Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.')}</li>

                            <li>
                                {t("Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).")}
                            </li>

                            <li>
                                {t("Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)...")}<span style={{ color: '#ABDDB1' }}>{t('ko’proq')}</span>
                            </li>

                        </ul>
                    </div>
                </div>


            </div>

            {/* <div className='vid'>
                <video>
                    <source src='https://youtu.be/8n30SNcEZJE' type="video/mp4" />
                </video>


            </div> */}

        </div >
    )
}

export default Gks
