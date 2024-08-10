import React from 'react'
import "./Topik.css";
import { useTranslation } from 'react-i18next';

const Topik = () => {
    const { t, i18n } = useTranslation();
    return (
        <div id='Topik' className='TOPIK'>
            <p className='Topik'>
                {t("Nima uchun aynan TOPIK academy?")}
            </p>

            <div className='Topik_cards'>

                <div className='card_one'>
                    <div className='card_h2'>
                        <h2>01</h2>
                    </div>
                    <p className='Professional'>{t("Professional ustozlar")}</p>
                    <p className='tajriba'>{t("Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi")}</p>
                </div>

                <div className='card_one'>
                    <div className='card_h2'>
                        <h2>02</h2>
                    </div>
                    <p className='Professional'>{t("Bepul coworking zonalari")}</p>
                    <p className='tajriba'>{t("Erkin dars qilish, netvorking va o’z ustingizda ishlash uchun bepul coworking zonalarimiz mavjud")}</p>
                </div>

                <div className='card_one'>
                    <div className='card_h2'>
                        <h2>03</h2>
                    </div>
                    <p className='Professional'>{t("Haftalik tadbirlar")}</p>
                    <p className='tajriba'>{t("TOPIK acdemy jamoasi o’quvchilari uchun doimiy ravishda qo’shimcha tadbirar tashkilb keladi")}</p>
                </div>


                <div className='card_one'>
                    <div className='card_h2'>
                        <h2>04</h2>
                    </div>
                    <p className='Professional'>{t("Bepul sinov imtihonlari")}</p>
                    <p className='tajriba'>{t("Har davomida tashkillanadigan sinov imtihonlarida")}</p>
                </div>

                <div className='card_one'>
                    <div className='card_h2'>
                        <h2>05</h2>
                    </div>
                    <p className='Professional'>{t("Yordamchi kuratorlar")}</p>
                    <p className='tajriba'>{t("Darslarni ozlashtirishda qiyinchilik bolsa sizga yordam beradigan kuratoringiz boladi")}</p>
                </div>

                <div className='card_one'>
                    <div className='card_h2'>
                        <h2>06</h2>
                    </div>
                    <p className='Professional'>{t("Konsulting hizmatlar")}</p>
                    <p className='tajriba'>{t("Muofaqiyatli bitirgan talabalarimizga Janubiy koreada oqish uchun visa olishda, universitet tanlashda va grant yutishda yordam beramiz")}</p>
                </div>
            </div>




        </div>
    )
}

export default Topik
