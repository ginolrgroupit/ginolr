import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// --- Import English ---
import enHome from './locales/en/Home.json'
import enAbout from './locales/en/About.json'
import enContact from './locales/en/Contact.json'

// --- Import Thai ---
import thHome from './locales/th/Home.json'
import thAbout from './locales/th/About.json'
import thContact from './locales/th/Contact.json'

// 🌟 --- Import Chinese --- 🌟
import cnHome from './locales/cn/Home.json'
import loHome from './locales/lo/Home.json'
import loAbout from './locales/lo/About.json'
import loContact from './locales/lo/Contact.json'
import cnAbout from './locales/cn/About.json'         // เพิ่ม About
import cnContact from './locales/cn/Contact.json'     // เพิ่ม Contact


// --- Import หมวดหมู่สินค้า (Product Category) ---
import enProductCategory from './locales/en/product-category.json'
import thProductCategory from './locales/th/product-category.json'
import cnProductCategory from './locales/cn/product-category.json' // 🌟 เพิ่ม Product Category ของจีน

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,

        // ระบุ namespace ทั้งหมดที่มี
        ns: ['home', 'about', 'contact', 'productCategory'],
        defaultNS: 'home',

        interpolation: {
            escapeValue: false,
        },

        resources: {
            en: {
                home: enHome,
                about: enAbout,
                contact: enContact,
                productCategory: { data: enProductCategory } 
            },
            th: {
                home: thHome,
                about: thAbout,
                contact: thContact,
                productCategory: { data: thProductCategory } 
            },
            // 🌟 เปิดใช้งานภาษาจีนแบบเต็มรูปแบบ 🌟
            cn: {
                home: cnHome,
                about: cnAbout,
                contact: cnContact,
                productCategory: { data: cnProductCategory }
            },
            lo: {
                home: loHome,
                about: loAbout,
                contact: loContact,
                productCategory: { data: enProductCategory }
            },
        },
    })

export default i18n
