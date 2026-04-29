import { useTranslation } from 'react-i18next'
import './CompanyHistory.css'
import officePhoto from '../../assets/image-01.webp'
import factoryPhotoOne from '../../assets/image-05.webp'
import certificationLogos from '../../assets/image-07.webp'
import ginolrLogo from '../../assets/logo/ginolr.webp'
import ctLogo from '../../assets/logo/ct.webp'
import ctpvLogo from '../../assets/logo/ctpv.webp'

const assetImages = import.meta.glob('../../assets/*', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>

const resolveAssetImage = (image: string) => {
    const fileName = image.split('/').pop()
    const matchedImage = Object.entries(assetImages).find(([path]) => path.endsWith(`/${fileName}`))

    return matchedImage?.[1] || image
}

type HistoryTimelineItem = {
    year: string
    title: string
    text: string
}

type ProductionCenter = {
    id: number
    title: string
    markets: string[]
    image: string
    imageAlt: string
    detail: string
    badge?: {
        title: string
        label: string
        items: string[]
    }
}

type ProductionCentersIntro = {
    title: string
    subtitle: string
    backgroundImage: string
}

type FacilityShowcaseItem = {
    title: string
    image: string
    imageAlt: string
}

type FacilityShowcaseProps = {
    items: FacilityShowcaseItem[]
}

const FacilityShowcase = ({ items }: FacilityShowcaseProps) => (
    <section className="facility-showcase">
        <aside className="facility-showcase-sidebar" aria-label="Company brands">
            <img src={ginolrLogo} alt="GINOLR" />
            <img src={ctLogo} alt="CT Electric" />
            <img src={ctpvLogo} alt="CTPV" />
        </aside>

        <div className="facility-showcase-main">
            <div className="facility-card-list">
                {items.map((item) => (
                    <article className="facility-card" key={item.title}>
                        <img src={item.image} alt={item.imageAlt} />
                    </article>
                ))}
            </div>

            <div className="facility-showcase-footer">
                <img className="facility-certifications" src={certificationLogos} alt="Quality certification logos" />
            </div>
        </div>
    </section>
)

const CompanyHistory = () => {
    const { t } = useTranslation('about')
    const timeline = (t('company_history.timeline.items', { returnObjects: true }) || []) as HistoryTimelineItem[]
    const productionIntro = t('company_history.production_centers.intro', { returnObjects: true }) as ProductionCentersIntro
    const productionCenters = (t('company_history.production_centers.centers', { returnObjects: true }) || []) as ProductionCenter[]
    const productionBackgroundImage = resolveAssetImage(productionIntro.backgroundImage)
    const facilityItems: FacilityShowcaseItem[] = [
        {
            title: t('company_history.office.title'),
            image: officePhoto,
            imageAlt: t('company_history.images.office'),
        },
        {
            title: t('company_history.factory_one.title'),
            image: factoryPhotoOne,
            imageAlt: t('company_history.images.factory_one'),
        },
    ]

    return (
        <main className="company-history-page">
            <FacilityShowcase items={facilityItems} />

            <section className="production-centers-section">
                <img className="production-centers-bg" src={productionBackgroundImage} alt="" aria-hidden="true" />
                <div className="production-centers-overlay" />
                <div className="production-centers-content">
                    <div className="production-centers-list" aria-label="5 production centers">
                        {productionCenters.map((center) => {
                            const centerImage = resolveAssetImage(center.image)

                            return (
                                <article
                                    className="production-center-item"
                                    key={center.id}
                                    tabIndex={0}
                                    style={{ backgroundImage: `url(${centerImage})` }}
                                >
                                    <div className="production-center-number">{center.id}</div>
                                    <div className="production-center-copy">
                                        <h3 className="header-font">{center.title}</h3>
                                    </div>
                                    <div className="production-center-arrow" aria-hidden="true" />
                                    <div className="production-center-markets">
                                        {center.markets.map((market) => (
                                            <span key={market}>{market}</span>
                                        ))}
                                    </div>
                                    <div className="production-center-popup">
                                        <div className="production-popup-media">
                                            <img src={centerImage} alt={center.imageAlt} />
                                        </div>
                                        <div className="production-popup-info">
                                            <h4 className="header-font">{center.title}</h4>
                                            <p>{center.detail}</p>
                                            {center.badge && (
                                                <div className="production-popup-badge">
                                                    <strong>{center.badge.title}</strong>
                                                    <div>
                                                        <small>{center.badge.label}</small>
                                                        {center.badge.items.map((item) => (
                                                            <em key={item}>{item}</em>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                    <div className="production-centers-intro">
                        <h2 className="header-font">{productionIntro.title}</h2>
                        <div className="production-centers-rule" />
                        <h3 className="header-font">{productionIntro.subtitle}</h3>
                        <div className="production-centers-logos" aria-hidden="true">
                            <img src={ginolrLogo} alt="" />
                            <span />
                            <img src={ctLogo} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="company-history-timeline">
                <div className="timeline-intro">
                    <p className="history-kicker title-font">{t('company_history.timeline.kicker')}</p>
                    <h2 className="header-font">{t('company_history.timeline.title')}</h2>
                    <p className="subtitle-font">
                        {t('company_history.timeline.subtitle')}
                    </p>
                </div>
                <div className="timeline-list">
                    {timeline.map((item) => (
                        <article className="timeline-item" key={item.year}>
                            <strong>{item.year}</strong>
                            <div>
                                <h3 className="title-font">{item.title}</h3>
                                <p className="subtitle-font">{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default CompanyHistory
