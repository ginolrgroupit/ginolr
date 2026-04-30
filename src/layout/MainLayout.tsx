import { Outlet, useLocation } from "react-router-dom"
import './MainLayout.css'
import Nav from "../nav/Nav"
import type { Language, NavMenu } from "../type"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import mascotUrl from "../assets/logo/chiao-xi-01.svg"
import Footer from "../components/Footer"

const supportedLanguages: Language[] = ['TH', 'EN', 'CN', 'LO']

const mascotGreetings: Record<Language, string> = {
    TH: 'สวัสดีครับ ยินดีต้อนรับสู่ GINOLR',
    EN: 'Hello, welcome to GINOLR',
    CN: '你好，欢迎来到 GINOLR',
    LO: 'ສະບາຍດີ ຍິນດີຕ້ອນຮັບສູ່ GINOLR',
}

type MascotPage = 'about' | 'companyHistory' | 'XiaoCMeaning' | 'qualityProcess' | 'product' | 'productDataDownload' | 'contact'

const mascotPageGreetings: Record<Language, Record<MascotPage, string>> = {
    TH: {
        about: 'ยินดีต้อนรับสู่หน้า\nภาพรวมของบริษัทครับ',
        companyHistory: 'ยินดีต้อนรับสู่หน้า\nประวัติของบริษัทครับ',
        XiaoCMeaning: 'ยินดีต้อนรับสู่หน้า\nความหมายของเฉี่ยวซีครับ',
        qualityProcess: 'ยินดีต้อนรับสู่หน้า\nกระบวนการคุณภาพของเราครับ',
        product: 'ยินดีต้อนรับสู่หน้า\nสินค้าของ GINOLR ครับ',
        productDataDownload: 'ยินดีต้อนรับสู่หน้า\nดาวน์โหลดข้อมูลสินค้าและแคตตาล็อกครับ',
        contact: 'ยินดีต้อนรับสู่หน้า\nติดต่อเรา ทีมงานพร้อมดูแลครับ',
    },
    EN: {
        about: 'Welcome to\nour company overview page.',
        companyHistory: 'Welcome to\nour company history page.',
        XiaoCMeaning: 'Welcome to\nthe meaning of XiaoC page.',
        qualityProcess: 'Welcome to\nour quality process page.',
        product: 'Welcome to\nthe GINOLR product page.',
        productDataDownload: 'Welcome to\nthe product data and catalogue download page.',
        contact: 'Welcome to\nour contact page. Our team is ready to help.',
    },
    CN: {
        about: '欢迎来到\n公司概览页面。',
        companyHistory: '欢迎来到\n公司历史页面。',
        XiaoCMeaning: '欢迎来到\n小C含义页面。',
        qualityProcess: '欢迎来到\n我们的品质流程页面。',
        product: '欢迎来到\nGINOLR 产品页面。',
        productDataDownload: '欢迎来到\n产品资料和目录下载页面。',
        contact: '欢迎来到\n联系我们页面，我们的团队随时为您服务。',
    },
    LO: {
        about: 'ຍິນດີຕ້ອນຮັບສູ່\nໜ້າພາບລວມຂອງບໍລິສັດ.',
        companyHistory: 'ຍິນດີຕ້ອນຮັບສູ່\nໜ້າປະຫວັດບໍລິສັດ.',
        XiaoCMeaning: 'ຍິນດີຕ້ອນຮັບສູ່\nໜ້າຄວາມໝາຍຂອງ XiaoC.',
        qualityProcess: 'ຍິນດີຕ້ອນຮັບສູ່\nໜ້າຂັ້ນຕອນຄຸນນະພາບ.',
        product: 'ຍິນດີຕ້ອນຮັບສູ່\nໜ້າສິນຄ້າ GINOLR.',
        productDataDownload: 'ຍິນດີຕ້ອນຮັບສູ່\nໜ້າດາວໂຫຼດຂໍ້ມູນສິນຄ້າ ແລະ ແຄດຕາລັອກ.',
        contact: 'ຍິນດີຕ້ອນຮັບສູ່\nໜ້າຕິດຕໍ່ພວກເຮົາ.',
    },
}

const getMascotPage = (pathname: string): MascotPage | null => {
    if (pathname.startsWith('/about/company-history')) return 'companyHistory'
    if (pathname.startsWith('/about/XiaoC-meaning')) return 'XiaoCMeaning'
    if (pathname.startsWith('/about/quality-process')) return 'qualityProcess'
    if (pathname.startsWith('/about')) return 'about'
    if (pathname.startsWith('/product-data-download')) return 'productDataDownload'
    if (pathname.startsWith('/product')) return 'product'
    if (pathname.startsWith('/contact')) return 'contact'

    return null
}

const MainLayout = () => {
    const { i18n } = useTranslation()
    const [page_selected, setPage_selected] = useState<NavMenu>('home')
    const [language_selected, setLanguage_selected] = useState<Language>(() => {
        const saved = localStorage.getItem('user-language')
        const normalized = saved?.toUpperCase() as Language | undefined
        return normalized && supportedLanguages.includes(normalized) ? normalized : 'TH'
    })

    const containerRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation()

    useEffect(() => {
        const langKey = language_selected.toLocaleLowerCase()
        i18n.changeLanguage(langKey)
        localStorage.setItem('user-language', langKey.toLocaleUpperCase())
    }, [i18n, language_selected])

    useEffect(() => {
        containerRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        })
    }, [pathname])

    const isCompanyHistoryPage = pathname.startsWith('/about/company-history')
    const isXiaoCMeaningPage = pathname.startsWith('/about/XiaoC-meaning')
    const isHomePage = pathname.startsWith('/home')
    const shouldShowFooter = !pathname.startsWith('/home') && !pathname.startsWith('/contact') && !isCompanyHistoryPage
    const mascotPage = getMascotPage(pathname)
    const mascotMessage = mascotPage ? mascotPageGreetings[language_selected][mascotPage] : mascotGreetings[language_selected]

    return (
        <div className={`all-screen${isHomePage ? ' home-layout' : ''}${isCompanyHistoryPage ? ' company-history-layout' : ''}${isXiaoCMeaningPage ? ' XiaoC-meaning-layout' : ''}`}>
            <Nav setPage_selected={setPage_selected} page_selected={page_selected} language_selected={language_selected} setLanguage_selected={setLanguage_selected} />
            <div className="container-zone" ref={containerRef}>
                <Outlet context={containerRef} />
                {shouldShowFooter && <Footer />}
            </div>
            <div className="site-mascot" tabIndex={0} aria-label={mascotMessage}>
                <div className="site-mascot-bubble">{mascotMessage}</div>
                <img src={mascotUrl} alt="Chiao Xi" />
            </div>
        </div>
    )
}

export default MainLayout
