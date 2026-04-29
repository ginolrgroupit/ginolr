import { useTranslation } from 'react-i18next'
import './QiaoxiMeaning.css'

import mascotFront from '../../assets/chiao-xi-front.webp'
import mascotBack from '../../assets/chiao-xi-back.webp'
import partOne from '../../assets/chiao-xi-parts/part-01.webp'
import partTwo from '../../assets/chiao-xi-parts/part-02.webp'
import partThree from '../../assets/chiao-xi-parts/part-03.webp'
import partFour from '../../assets/chiao-xi-parts/part-04.webp'
import partFive from '../../assets/chiao-xi-parts/part-05.webp'
import partSix from '../../assets/chiao-xi-parts/part-06.webp'
import partSeven from '../../assets/chiao-xi-parts/part-07.webp'
import partEight from '../../assets/chiao-xi-parts/part-08.webp'
import partNine from '../../assets/chiao-xi-parts/part-09.webp'
import partTen from '../../assets/chiao-xi-parts/part-10.webp'

const partImages = [
    partOne,
    partTwo,
    partThree,
    partFour,
    partFive,
    partSix,
    partSeven,
    partEight,
    partNine,
    partTen,
]

type QiaoxiPoint = {
    title: string
    description: string
}

const QiaoxiMeaning = () => {
    const { t } = useTranslation('about')
    const points = t('mascot_meaning_section.points', { returnObjects: true })
    const qiaoxiPoints = Array.isArray(points) ? (points as QiaoxiPoint[]) : []

    return (
        <div className="qiaoxi-page">
            <h1 className="qiaoxi-main-title">{t('mascot_meaning_section.header')}</h1>

            <section className="qiaoxi-hero">
                <div className="qiaoxi-visual">
                    <img src={mascotFront} alt="Qiaoxi Front" className="qiaoxi-mascot-img" />
                    <img src={mascotBack} alt="Qiaoxi Back" className="qiaoxi-mascot-img" />
                </div>

                <div className="qiaoxi-content">
                    <div className="qiaoxi-point-grid">
                        {partImages.map((image, index) => {
                            const point = qiaoxiPoints[index] ?? { title: '', description: '' }

                            return (
                            <div className="qiaoxi-point" key={index}>
                                <div className="qiaoxi-point-circle">
                                    <img src={image} alt={`Qiaoxi part ${index + 1}`} />
                                </div>
                                <div className="qiaoxi-point-box">
                                    <p className="qiaoxi-point-title">{point.title}</p>
                                    <p className="qiaoxi-point-description">{point.description}</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QiaoxiMeaning
