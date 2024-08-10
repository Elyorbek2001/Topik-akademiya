import React from 'react'
import "./Footer.css"

import footer from "../imgsvsicon/imgs/position.png"
import instagram from "../imgsvsicon/icons/instagram.png"
import phone from "../imgsvsicon/icons/phone.png"
import telegram from "../imgsvsicon/icons/telegram.png"
import youtube from "../imgsvsicon/icons/youtube.png"
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='Footer'>

            <div className="Footer_big">

                <div className='Fotter_img'>
                    <img src={footer} alt="" />
                </div>


                <div className='Footer_text'>
                    <ul>
                        <li> <a className='Fotter_a' href="">{t("Nega biz")}</a> </li>
                        <li> <a className='Fotter_a' href="">{t("Natijalar")}</a></li>
                        <li> <a className='Fotter_a' href="">{t("Kurslar")}</a></li>
                        <li> <a className='Fotter_a' href="">{t("Kop beriladigan savollar")}</a></li>
                    </ul>

                </div>


                <div className='Foter_tarmoqlar'>

                    <img src={phone} alt="" />
                    <img src={telegram} alt="" />
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />

                </div>
            </div>

        </div>
    )
}

export default Footer
