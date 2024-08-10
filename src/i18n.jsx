import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import laungageDetector from 'i18next-browser-languagedetector';
import uzTranslation from './locales/uz.json';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

const language = localStorage.getItem('i18nextLng') || 'uz'

i18n
    .use(Backend)
    /// tilni aniqlab berish
    .use(laungageDetector)
    /// boglash
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: language,
        debug: true,
        resources: {
            uz: { translation: uzTranslation },
            en: { translation: enTranslation },
            ru: { translation: ruTranslation },
        }
    })

export default i18n;

