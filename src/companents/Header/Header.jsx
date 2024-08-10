import React from 'react'
import { useTranslation } from 'react-i18next'
import image_76 from "../imgsvsicon/imgs/image 76.png"
import "./Header.css"


const Header = () => {
    const { t, i18n } = useTranslation();
    const language = localStorage.getItem('i18nextLng')
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    }


    return (
        <>
            <div className='Hea'>


                <div className='header'>

                    <div className='img_text'>
                        <div className='logo_horizontal'>
                            <img src={image_76} alt="" />

                        </div>
                        <div className='text'>
                            <p>
                                {t('Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi')}
                            </p>
                        </div>
                    </div>

                    <div className='pages_button'>

                        <div className='pages'>
                            <ul className='flex'>
                                <li><a className='no-underline' href="#Topik">{t('Nega biz')}</a></li>
                                <li><a className='no-underline' href="#Natija">{t('Natijalar')}</a></li>
                                <li><a className='no-underline' href="#Kurs">{t('Kurslar')}</a></li>
                                <li><a className='no-underline' href="#Accardion"> {t('Kop beriladigan savollar')}</a></li>
                            </ul>
                        </div>

                        <div className='flex-col'>
                            <li><a className='no-underline' href="">+998 (33) 306 0098</a></li>
                            <p className='header_p'>{t("Boglaning")}</p>
                        </div>
                    </div>

                </div>

                <div className='til'>


                    <select name="Lng" id="lng" onChange={handleChange} value={language}>
                        <option value="uz">Uzbek</option>
                        <option value="en">Inglish</option>

                    </select>

                </div>

            </div>


        </>

    )
}

export default Header
