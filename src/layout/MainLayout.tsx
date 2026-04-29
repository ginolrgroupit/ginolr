import { Outlet, useLocation } from "react-router-dom"
import './MainLayout.css'
import Nav from "../nav/Nav"
import type { Language, NavMenu } from "../type"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import mascotUrl from "../assets/logo/chiao-xi-01.svg"

const supportedLanguages: Language[] = ['TH', 'EN', 'CN', 'LO']

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
    const isQiaoxiMeaningPage = pathname.startsWith('/about/qiaoxi-meaning')

    return (
        <div className={`all-screen${isCompanyHistoryPage ? ' company-history-layout' : ''}${isQiaoxiMeaningPage ? ' qiaoxi-meaning-layout' : ''}`}>
            <Nav setPage_selected={setPage_selected} page_selected={page_selected} language_selected={language_selected} setLanguage_selected={setLanguage_selected} />
            <div className="container-zone" ref={containerRef}>
                <Outlet context={containerRef} />
            </div>
            <img className="site-mascot" src={mascotUrl} alt="Chiao Xi" />
        </div>
    )
}

export default MainLayout
