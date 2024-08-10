import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AOS from 'aos'
import 'aos/dist/aos.css';

import "./Malumot.css"
import { useTranslation } from 'react-i18next';




const Malumotjonat = () => {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    const [loading, setLoading] = useState(false);

    const sendMessage = (event) => {
        setLoading(true)
        event.preventDefault();
        const token = "7227974601:AAGNQNwCG8sCgztKf0W1JaqADY7vfBrdQ2w";
        const chat_id = 6563907367;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value
        const number = document.getElementById("number").value

        const messageContent = `ismi:${name}\nnumber:${number}`
        axios({
            url: url,
            method: 'POST',
            data: {
                "chat_id": chat_id,
                "text": messageContent,
            }
        }).then((res) => {
            document.getElementById("myFrom").reset()
            alert("Muvaffaqiyatli yuborildi")
        }).catch((error) => {
            console.log("Yuborishda hatolik", error)
        }).finally(() => {
            setLoading(false)
        })
    }


    return (

        <div className='information'>

            <div className="information_big">
                <div className='information_text'>
                    <p className='information_p'>{t("Savollaringiz qoldimi?")}</p>
                    <p className='information_p_one'>{t("Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.")}</p>
                </div>


                <form onSubmit={sendMessage} className='send' id='myFrom'>

                    <input id='name' className='send_text' placeholder='Ismingiz' type="text" />

                    <input id='number' className='send_text' placeholder='+998' type="number" />

                    <button type='submit' className='send_button' loading={loading}>{loading ? "Yuborilmoqda..." : "Ariza qoldiring"}</button>

                </form>



            </div>



        </div>
    )
}

export default Malumotjonat
