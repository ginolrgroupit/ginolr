import { useTranslation } from 'react-i18next'
import './QualityProcess.css'
import qualityImageOne from '../../assets/qualityimage/1.webp'
import qualityImageTwo from '../../assets/qualityimage/2.webp'
import qualityImageThree from '../../assets/qualityimage/3.webp'
import qualityImageFour from '../../assets/qualityimage/4.webp'
import qualityImageFive from '../../assets/qualityimage/5.webp'

type QualityProcessItem = {
    id: string
    title: string
    description: string
    imageAlt: string
}

const qualityImages = [
    qualityImageOne,
    qualityImageTwo,
    qualityImageThree,
    qualityImageFour,
    qualityImageFive,
]

const QualityProcess = () => {
    const { t } = useTranslation('about')
    const processItems = (t('quality_process.items', { returnObjects: true }) || []) as QualityProcessItem[]

    return (
        <main className="quality-process-page">
            <section className="quality-process-hero">
                <h1 className="header-font">{t('quality_process.title')}</h1>
            </section>

            <section className="quality-process-list" aria-label={t('quality_process.title')}>
                {processItems.map((item, index) => (
                    <article className="quality-process-item" key={item.id}>
                        <div className="quality-process-media">
                            {qualityImages[index] ? (
                                <img src={qualityImages[index]} alt={item.imageAlt} />
                            ) : (
                                <div className="quality-process-placeholder" aria-label={item.imageAlt}>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                </div>
                            )}
                        </div>

                        <div className="quality-process-copy">
                            <span className="quality-process-number">{String(index + 1).padStart(2, '0')}</span>
                            <h2 className="header-font">{item.title}</h2>
                            <p className="subtitle-font">{item.description}</p>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default QualityProcess
