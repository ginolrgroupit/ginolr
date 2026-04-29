import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import './Nav.css'
import type { Language, NavMenu } from '../type'
import { Dropdown, type MenuProps } from 'antd'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface getE {
    setPage_selected: Dispatch<SetStateAction<NavMenu>>
    page_selected: NavMenu
    language_selected: Language
    setLanguage_selected: Dispatch<SetStateAction<Language>>
}

const Nav = ({ setPage_selected, page_selected, language_selected, setLanguage_selected }: getE) => {
    const { t, i18n } = useTranslation(['home', 'productCategory', 'about'])

    const [product_hover, setProduct_hover] = useState<boolean>(false)
    const [about_hover, setAbout_hover] = useState<boolean>(false)
    const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const aboutTimeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const location = useLocation()
    const { category_name } = useParams()
    
    useEffect(() => {
        if (location.pathname.startsWith('/home')) {
            setPage_selected('home')
        }
        if (location.pathname.startsWith('/about')) {
            setPage_selected('about')
        }
        if (location.pathname.startsWith('/product')) {
            setPage_selected('product')
        }
        if (location.pathname.startsWith('/product-data-download')) {
            setPage_selected('product-data-download')
        }
        if (location.pathname.startsWith('/contact')) {
            setPage_selected('contact')
        }
    }, [location])

    const navigate = useNavigate()
    const navHandler = (page: NavMenu) => {
        setPage_selected(page)
        navigate(page)
    }

    const languageHandler = (language: Language) => {
        setLanguage_selected(language)
        i18n.changeLanguage(language.toLowerCase())
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className='language-option' onClick={() => languageHandler('TH' as Language)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="24" >
                        <g fill="none"><path fill="#f50101" fillRule="evenodd" d="M0 16h32v8H0zM0 0h32v6H0z" clipRule="evenodd" />
                            <path fill="#3d58db" stroke="#fff" strokeWidth="3" d="M0 6.5h-1.5v11h35v-11z" />
                        </g>
                    </svg>
                    TH
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className='language-option' onClick={() => languageHandler('EN' as Language)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="24" >
                        <g fill="none"><path fill="#2e42a5" fillRule="evenodd" d="M0 0v24h32V0z" clipRule="evenodd" /><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" >
                            <path fill="#fff" fillRule="evenodd" d="M0 0v24h32V0z" clipRule="evenodd" /></mask>
                            <g mask="url(#SVGcFaS5cXn)"><path fill="#fff" d="m-3.563 22.285l7.042 2.979l28.68-22.026l3.715-4.426l-7.53-.995l-11.698 9.491l-9.416 6.396z" /><path fill="#f50100" d="M-2.6 24.372L.989 26.1L34.54-1.599h-5.037z" /><path fill="#fff" d="m35.563 22.285l-7.042 2.979L-.159 3.238l-3.715-4.426l7.53-.995l11.698 9.491l9.416 6.396z" /><path fill="#f50100" d="m35.323 23.783l-3.588 1.728l-14.286-11.86l-4.236-1.324l-17.445-13.5H.806l17.434 13.18l4.631 1.588z" /><mask id="SVGJs2PNeaY" fill="#fff"><path fillRule="evenodd" d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z" clipRule="evenodd" /></mask><path fill="#f50100" fillRule="evenodd" d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z" clipRule="evenodd" /><path fill="#fff" d="M12.222-2v-2h-2v2zm7.556 0h2v-2h-2zM12.222 8v2h2V8zM-1.972 8V6h-2v2zm0 8h-2v2h2zm14.194 0h2v-2h-2zm0 10h-2v2h2zm7.556 0v2h2v-2zm0-10v-2h-2v2zm14.25 0v2h2v-2zm0-8h2V6h-2zm-14.25 0h-2v2h2zm-7.556-8h7.556v-4h-7.556zm2 8V-2h-4V8zm-16.194 2h14.194V6H-1.972zm2 6V8h-4v8zm12.194-2H-1.972v4h14.194zm2 12V16h-4v10zm5.556-2h-7.556v4h7.556zm-2-8v10h4V16zm16.25-2h-14.25v4h14.25zm-2-6v8h4V8zm-12.25 2h14.25V6h-14.25zm-2-12V8h4V-2z" mask="url(#SVGJs2PNeaY)" /></g>
                        </g>
                    </svg>
                    EN
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className='language-option' onClick={() => languageHandler('CN' as Language)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="24">
                        <g fill="none" fillRule="evenodd" clipRule="evenodd"><path fill="#e31d1c" d="M0 0h32v24H0z" />
                            <path fill="#feca00" d="m15.016 4.548l-1.01.61l.23-1.19l-.841-.89l1.139-.049l.482-1.11l.482 1.11h1.137l-.84.94l.253 1.19zM7.018 9.607l-2.881 1.551l.657-3.026l-2.4-2.265l3.25-.123l1.374-2.826l1.374 2.826h3.243L9.24 8.132l.72 3.026zm9.998-1.059l-1.01.61l.23-1.19l-.841-.89l1.139-.049l.482-1.11l.482 1.11h1.137l-.84.94l.253 1.19zm-1 4l-1.01.61l.23-1.19l-.841-.89l1.139-.049l.482-1.11l.482 1.11h1.137l-.84.94l.253 1.19zm-3 3l-1.01.61l.23-1.19l-.841-.89l1.139-.049l.482-1.11l.482 1.11h1.137l-.84.94l.253 1.19z" />
                        </g>
                    </svg>
                    CN
                </div>
            ),
        },
        {
            key: '4',
            label: (
                <div className='language-option' onClick={() => languageHandler('LO' as Language)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="24">
                        <path fill="#ce1126" d="M0 0h32v6H0zM0 18h32v6H0z" />
                        <path fill="#002868" d="M0 6h32v12H0z" />
                        <circle cx="16" cy="12" r="5" fill="#fff" />
                    </svg>
                    LO
                </div>
            ),
        },
    ]

    const handleMouseEnter = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }
        setProduct_hover(true)
    }

    const handleMouseLeave = () => {
        timeOutRef.current = setTimeout(() => {
            setProduct_hover(false)
        }, 200)
    }

    const handleAboutMouseEnter = () => {
        if (aboutTimeOutRef.current) {
            clearTimeout(aboutTimeOutRef.current)
        }
        setAbout_hover(true)
    }

    const handleAboutMouseLeave = () => {
        aboutTimeOutRef.current = setTimeout(() => {
            setAbout_hover(false)
        }, 200)
    }

    const productData = (t('data', { ns: 'productCategory', returnObjects: true }) || []) as any[]

    // 🌟 กรองเอาเฉพาะข้อมูลที่มีชื่อจริงๆ ป้องกันการสร้างคอลัมน์จากช่องว่างใน JSON
    const category_list = (Array.isArray(productData) ? productData : [])
        .map(cat => ({
            name: cat.category_name,
            path: cat.path
        }))
        .filter(item => item.name && item.name.trim() !== '');

    const column: number = 3
    const start_quantity: number = Math.floor(category_list.length / column)
    const add_on: number = category_list.length % column

    let currentIndex = 0
    const result: any[] = []

    for (let i = 0; i < column; i++) {
        let size = (i < add_on) ? start_quantity + 1 : start_quantity
        let chunk = category_list.slice(currentIndex, currentIndex + size)
        result.push(chunk);
        currentIndex += size
    }

    const mapListToColumn = (colIndex: number) => {
        return result[colIndex]?.map((item: any, index: any) => {
            return (
                <p key={index} className={`category-item ${item.path === category_name ? 'active' : 'inactive'}`} onClick={() => { navigate(`/product/${item.path}/all`); setProduct_hover(false) }}>
                    {item.name}
                </p>
            )
        });
    }

    return (
        <nav className="nav">
            <div className='left-side'>
                <div className="logo" />
                <div className='nav-btn-container'>

                    <input type='radio' name='nav-btn' id='home' className="nav-btn title-font" checked={page_selected === 'home'} onChange={() => navHandler('home')} />
                    <label htmlFor="home" className='title-font'>Home</label>

                    <input type='radio' name='nav-btn' id='about' className="nav-btn title-font" checked={page_selected === 'about'} readOnly />
                    <label
                        htmlFor="about"
                        className='title-font'
                        onMouseEnter={handleAboutMouseEnter}
                        onMouseLeave={handleAboutMouseLeave}
                        onClick={() => {
                            navigate('/about')
                            setAbout_hover(false)
                        }}
                    >
                        About
                    </label>

                    <input type='radio' name='nav-btn' id='product' className="nav-btn title-font" checked={page_selected === 'product'} readOnly />
                    <label
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {
                            navigate('/product')
                            setProduct_hover(false)
                        }}
                        htmlFor="product"
                        className='title-font'
                    >
                        Product
                    </label>

                    <input type='radio' name='nav-btn' id='product-data-download' className="nav-btn title-font" checked={page_selected === 'product-data-download'} onChange={() => navHandler('product-data-download')} />
                    <label htmlFor="product-data-download" className='title-font'>Product Data Download</label>

                    <input type='radio' name='nav-btn' id='contact' className="nav-btn title-font" checked={page_selected === 'contact'} onChange={() => navHandler('contact')} />
                    <label htmlFor="contact" className='title-font'>Contact</label>
                    <span className='nav-btn-active-filter' />

                </div>
            </div>

            <div className="right-side">
                <div className='other'>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <button className='language-btn'>
                            {language_selected.toLocaleUpperCase()}
                        </button>
                    </Dropdown>
                </div>
            </div>

            <div className='product-category-list' style={product_hover ? {} : { display: 'none' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button
                    className="product-category-heading title-font"
                    type="button"
                    onClick={() => {
                        navigate('/product')
                        setProduct_hover(false)
                    }}
                >
                    {t('product_all.title', { ns: 'home' })}
                </button>
                <div className="list">
                    {result.map((_, colIndex) => (
                        <div key={colIndex} className="column">
                            {mapListToColumn(colIndex)}
                        </div>
                    ))}
                </div>
            </div>

            <div className='about-menu-list' style={about_hover ? {} : { display: 'none' }} onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
                <button
                    className='title-font'
                    type='button'
                    onClick={() => {
                        navigate('/about')
                        setAbout_hover(false)
                    }}
                >
                    {t('company_history.menu.overview', { ns: 'about' })}
                </button>
                <button
                    className='title-font'
                    type='button'
                    onClick={() => {
                        navigate('/about/company-history')
                        setAbout_hover(false)
                    }}
                >
                    {t('company_history.menu.company_history', { ns: 'about' })}
                </button>
                <button
                    className='title-font'
                    type='button'
                    onClick={() => {
                        navigate('/about/qiaoxi-meaning')
                        setAbout_hover(false)
                    }}
                >
                    {t('company_history.menu.qiaoxi_meaning', { ns: 'about' })}
                </button>
                <button
                    className='title-font'
                    type='button'
                    onClick={() => {
                        navigate('/about/quality-process')
                        setAbout_hover(false)
                    }}
                >
                    {t('company_history.menu.quality_process', { ns: 'about' })}
                </button>
            </div>
        </nav>
    )
}

export default Nav
