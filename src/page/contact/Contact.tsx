import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SiLine, SiShopee } from "react-icons/si";
import "./Contact.css"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import ThailandMap from "./Map"
import { useEffect, useRef, useState } from "react"
import lazadaIcon from "../../assets/lazada-icon.webp"
import { motion } from 'framer-motion'
import { card_variants, header_variants, section } from "../motion/normal";
import { useTranslation } from "react-i18next";

interface Point {
    card_x: number
    card_y: number
    map_x: number
    map_y: number
}

interface Seller {
    name: string;
    call: string;
}

interface RegionData {
    label: string;
    seller_list: Seller[];
}

const ZONES: Record<
    string,
    {
        label: string
        mapStyle: React.CSSProperties
        cardStyle: React.CSSProperties
        card_offsetX?: number
        card_offsetY?: number
    }
> = {
    bangkok: {
        label: "Bangkok",
        mapStyle: { top: "44.7%", left: "49.1%" },
        cardStyle: { top: "75%", left: "55%" },
        card_offsetX: -160,
        card_offsetY: -60,
    },
    northern_upper: {
        label: "Northern Upper Region",
        mapStyle: { top: "12%", left: "45%" },
        cardStyle: { top: "2%", left: "15%" },
        card_offsetX: 157,
        card_offsetY: -63,
    },
    northern_lower: {
        label: "Northern Lower Region",
        mapStyle: { top: "25%", left: "45%" },
        cardStyle: { top: "26.5%", left: "5%" },
        card_offsetX: 155,
        card_offsetY: -60,
    },
    southern_upper: {
        label: "Southern Upper Region",
        mapStyle: { top: "73%", left: "44%" },
        cardStyle: { top: "51%", left: "5%" },
        card_offsetX: 155,
        card_offsetY: -60,
    },
    southern_lower: {
        label: "Southern Lower Region",
        mapStyle: { top: "89%", left: "48%" },
        cardStyle: { top: "75%", left: "15%" },
        card_offsetX: 160,
        card_offsetY: -60,
    },
    northeastern_upper: {
        label: "Northeast Upper Region",
        mapStyle: { top: "21%", left: "56%" },
        cardStyle: { top: "2%", left: "65%" },
        card_offsetX: -160,
        card_offsetY: -60,
    },
    northeastern_lower: {
        label: "Northeast Lower Region",
        mapStyle: { top: "32%", left: "55%" },
        cardStyle: { top: "25%", left: "75%" },
        card_offsetX: -160,
        card_offsetY: -65,
    },
    center: {
        label: "Center Region",
        mapStyle: { top: "47%", left: "52%" },
        cardStyle: { top: "50%", left: "75%" },
        card_offsetX: -160,
        card_offsetY: -60,
    },
}

const Contact = () => {
    const { t } = useTranslation('contact')
    const containerRef = useRef<HTMLDivElement | null>(null)

    // refs ของ card และ map point
    const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const mapRefs = useRef<Record<string, HTMLDivElement | null>>({})

    // เก็บตำแหน่งเส้น
    const [points, setPoints] = useState<Record<string, Point>>({})

    const sellerSection = t('seller_section', { returnObjects: true }) as Record<string, RegionData>;

    const updateAllPoints = () => {
        if (!containerRef.current) return

        const containerRect = containerRef.current.getBoundingClientRect()
        const newPoints: Record<string, Point> = {}

        Object.keys(ZONES).forEach((key) => {
            const cardEl = cardRefs.current[key]
            const mapEl = mapRefs.current[key]
            const zone = ZONES[key]

            if (!cardEl || !mapEl) return

            const cardRect = cardEl.getBoundingClientRect()
            const mapRect = mapEl.getBoundingClientRect()

            newPoints[key] = {
                card_x: cardRect.left - containerRect.left + cardRect.width / 2 + (zone.card_offsetX || 0),
                card_y: cardRect.top - containerRect.top + cardRect.height / 2 + (zone.card_offsetY || 0),

                map_x: (mapRect.left - containerRect.left),
                map_y: (mapRect.top - containerRect.top),
            }
        })

        setPoints(newPoints)
    }

    useEffect(() => {
        updateAllPoints()
        window.addEventListener("resize", updateAllPoints)
        return () => window.removeEventListener("resize", updateAllPoints)
    }, [])

    return (
        <div className="contact-page">
            <section className="sale-contact-section" ref={containerRef} >
                <div className="map-container" >
                    {Object.entries(ZONES).map(([key, zone]) => (
                        <div
                            key={key}
                            ref={(el) => {
                                mapRefs.current[key] = el
                            }}
                            style={{
                                position: "absolute",
                                width: 1,
                                height: 1,
                                ...zone.mapStyle,
                            }}
                        />
                    ))}

                    <ThailandMap />
                </div>


                <div className="overlay">
                    {/* Contact Cards */}

                    {Object.entries(ZONES).map(([key, zone]) => {
                        // 1. ดึงข้อมูลจาก JSON ตาม key
                        const regionData = sellerSection[key];
                        // 2. ถ้าไม่มีข้อมูลใน JSON ให้ใช้ label จาก ZONES เป็น default
                        const label = regionData?.label || zone.label;


                        return (
                            <div
                                key={key}
                                className={`contact-card ${key}`}
                                ref={(el) => {
                                    cardRefs.current[key] = el
                                }}
                                style={{
                                    position: "absolute",
                                    ...zone.cardStyle,
                                }}
                            >
                                <div className="header-zone">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <h3 className="title-font">{label}</h3>
                                </div>

                                
                            </div>
                        )
                    })}

                    {/* SVG Lines */}
                    <svg
                        className="svg-overlay"
                        width="100%"
                        height="100%"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            pointerEvents: "none",
                        }}
                    >
                        {Object.keys(ZONES).map((key) => {
                            const p = points[key]
                            if (!p) return null

                            const x1 = p.map_x
                            const y1 = p.map_y
                            const x2 = p.card_x
                            const y2 = p.card_y

                            const midX = (x1 + x2) / 2

                            // สร้าง Path data ไว้ในตัวแปรเพื่อใช้ซ้ำ
                            const pathData = key !== 'bangkok'
                                ? `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`
                                : `M ${x1} ${y1} L ${x1} ${y2} L ${x2} ${y2}`;

                            return (
                                <g key={key}>
                                    {/* 1. เส้นพื้นหลัง (เส้นเดิมของคุณ) */}
                                    <path
                                        d={pathData}
                                        className="line-path"
                                        fill="none"
                                        stroke="#1677ffca"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />

                                    {/* 2. เส้นแสงวิ่ง (เพิ่มเข้าไปใหม่) */}
                                    <path
                                        d={pathData}
                                        className="line-light"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        style={{ filter: "drop-shadow(0 0 5px #fff)" }}
                                    />

                                    {/* วงกลมจุดเริ่มและปลาย */}
                                    <circle cx={x1} cy={y1} r={5} fill="rgb(191,240,250)" />
                                    <circle cx={x2} cy={y2} r={5} fill="#1677ff" />
                                </g>
                            )
                        })}
                    </svg>

                </div>
            </section >

            <motion.section
                variants={section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="office-contact-section"
            >
                <div className="header-of-section">
                    <motion.h3 variants={header_variants} className="title-font contact-us">{t('contact_section.contact_us')}</motion.h3>
                    <motion.h1 variants={header_variants} className="title-font title">
                        {t('contact_section.header')}
                    </motion.h1>
                    <motion.p variants={header_variants} className="subtitle-font subtitle">
                        {t('contact_section.title')}
                    </motion.p>
                </div>

                <motion.div variants={card_variants} className="contact-card-container">
                    <div className="contact-card email">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <h3>{t('contact_section.email.title')}</h3>
                        <p className="subtitle-font">{t('contact_section.email.subtitle')}</p>
                        <h4>{t('contact_section.email.contact')}</h4>
                    </div>

                    <div className="contact-card location">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <h3>{t('contact_section.location.title')}</h3>
                        <p className="subtitle-font">{t('contact_section.location.subtitle')}</p>
                        <h4>
                            {t('contact_section.location.contact')}
                        </h4>
                    </div>

                    <div className="contact-card phone">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <h3>{t('contact_section.phone.title')}</h3>
                        <p className="subtitle-font">{t('contact_section.phone.subtitle')}</p>
                        <h4>{t('contact_section.phone.call')}</h4>
                    </div>
                </motion.div>
            </motion.section>

            <motion.section
                variants={section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="social-contact-section"
            >
                <div className="header-of-section">
                    <motion.h3 variants={header_variants} className="title-font social-media">{t('social_media_section.social_media')}</motion.h3>
                    <motion.h1 variants={header_variants} className="title-font title">
                        {t('social_media_section.header')}
                    </motion.h1>
                    <motion.p variants={header_variants} className="subtitle-font subtitle">
                        {t('social_media_section.title')}
                    </motion.p>
                </div>
                <motion.div variants={card_variants} className="social-media-card-container">
                    <div className="social-media-card facebook" onClick={() => window.open('https://www.facebook.com/GinolrGroup/?_rdc=2&_rdr', '_blank')}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" >
                                <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z" fill="rgb(20, 86, 249)" />
                            </svg>
                        </div>
                        <div className="label-container">
                            <h3 className="title-font">{t('social_media_section.facebook.title')}</h3>
                            <h4 className="title-font">{t('social_media_section.facebook.contact')}</h4>
                        </div>
                    </div>

                    <div className="social-media-card tiktok" onClick={() => window.open('https://www.tiktok.com/@ctelectric', '_blank')}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
                                <g className="nc-icon-wrapper" fill="black">
                                    <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z" />
                                </g>
                            </svg>
                        </div>
                        <div className="label-container">
                            <h3 className="title-font">{t('social_media_section.tiktok.title')}</h3>
                            <h4 className="title-font">{t('social_media_section.tiktok.contact')}</h4>
                        </div>
                    </div>

                    <div className="social-media-card line" onClick={() => window.open('https://lin.ee/XHk4ppg', '_blank')}>
                        <div className="icon">
                            <SiLine size={32} color="rgb(6,199,85)" />
                        </div>
                        <div className="label-container">
                            <h3 className="title-font">{t('social_media_section.line.title')}</h3>
                            <h4 className="title-font">{t('social_media_section.line.contact')}</h4>
                        </div>
                    </div>

                    <div className="social-media-card lazada" onClick={() => window.open('https://www.lazada.co.th/shop/ct-electric/?path=index.htm', '_blank')}>
                        <div className="icon">
                            <img src={lazadaIcon} />
                        </div>
                        <div className="label-container">
                            <h3 className="title-font">{t('social_media_section.lazada.title')}</h3>
                            <h4 className="title-font">{t('social_media_section.lazada.contact')}</h4>
                        </div>
                    </div>

                    <div className="social-media-card shopee" onClick={() => window.open('https://shopee.co.th/CT.ELECTRICshop?is_from_signup=true', '_blank')}>
                        <div className="icon">
                            <SiShopee size={32} color="rgb(247,60,50)" />
                        </div>
                        <div className="label-container">
                            <h3 className="title-font">{t('social_media_section.shopee.title')}</h3>
                            <h4 className="title-font">{t('social_media_section.shopee.sub_title')}</h4>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        </div >
    )
}

export default Contact
