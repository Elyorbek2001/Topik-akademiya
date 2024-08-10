import React from 'react'
import "./Kurs.css"
import img from "../imgsvsicon/imgs/img.png"
import tom2 from "../imgsvsicon/imgs/tom2.png"
import img3 from "../imgsvsicon/imgs/img (3).png"
import { useTranslation } from 'react-i18next';


const Kurs = () => {
    const { t, i18n } = useTranslation();
    return (
        <div id='Kurs' className='Kurs'>
            <p className='Topik'>{t("O’zingizga mos kursga ro’yxatdan o’ting")}</p>

            <div className="big_kurs">

                <div className='kurs_card'>

                    <div className='kurs_img'>
                        <img className='kurs_imgs' src={img} alt="" />
                    </div>

                    <div className='intensive'>
                        <p>{t("Intensive")}</p>
                        <button className='kurs_btn'>{t("Davomiyligi 5 oy")}</button>
                    </div>

                    <div className='card_text'>
                        <p><span style={{
                            color: "#E5B207"
                        }}>{t("Koreys tilini")}</span> {t("chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.")}</p>
                    </div>

                    <div className='card_money'>
                        <button className='kurs_btn_one'>{t("Royhatdan otish")}</button>
                        <p>{t("970.000 so’m /oy")}</p>
                    </div>
                </div>

                <div className='kurs_card'>

                    <div className='kurs_img'>
                        <img className='kurs_imgs2' src={tom2} alt="" />
                    </div>

                    <div className='odatiy'>
                        <p>{t("Odatiy")}</p>
                        <button className='kurs_btn'>{t("Davomiyligi 5 oy")}</button>
                    </div>

                    <div className='card_text'>
                        <p>{t("Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari..")}</p>
                    </div>

                    <div className='card_money2'>
                        <button className='kurs_btn_one2'>{t("Royhatdan otish")}</button>
                        <p>{t("560.000 so’m /oy")}</p>
                    </div>
                </div>


                <div className='kurs_card'>

                    <div className='kurs_img'>
                        <img className='kurs_imgs3' src={img3} alt="" />
                    </div>

                    <div className='individal'>
                        <p>{t("Individual")}</p>
                        <button className='kurs_btn'>{t("Davomiyligi 5 oy")}</button>
                    </div>

                    <div className='card_text3'>
                        <p>  {t("O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.")}</p>
                    </div>

                    <div className='card_money3'>
                        <button className='kurs_btn_one3'>{t("Royhatdan otish")}</button>
                        <p>{t("1.800.000 so’m /oy")}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Kurs
