import React from 'react'
import "./Main.css"
import image from "../imgsvsicon/icons/image 77 (Traced).png"
import tom1 from "../imgsvsicon/imgs/tom 1.png"
import { useTranslation } from 'react-i18next';


const Main = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='Main'>

            <div className='main_text'>
                <p className='spiking'> {t("3 oyda Koreys tilida gapirishni boshlang")} </p>
                <p className='grant'>{t("Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati")}</p>

                <div className='degree_opportunity'>
                    <div className='degree'>
                        <img src={image} alt="" />
                        <p>{t("5 oyda Topikdan 6 darajagacha olishda yordam beramiz")}</p>
                    </div>
                    <div className='degree'>
                        <img src={image} alt="" />
                        <p>{t("Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati")}</p>
                    </div>
                </div>

                <div className='btn_enroll'>
                    <button>{t("BEPUL DARSGA YOZILISH")}</button>
                    <p>{t("Birinchi darsga bepul yozilish")}</p>
                </div>

            </div>



            <div className='font_img'>
                <img src={tom1} alt="" />
            </div>


        </div>
    )
}

export default Main
