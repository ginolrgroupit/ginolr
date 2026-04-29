import { useTranslation } from 'react-i18next'
import './QiaoxiMeaning.css'

import mascotCenter from '../../assets/logo/chiao-xi-02.svg'
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

const calloutLayout = [
    { x: 0, y: 24, startX: 330, startY: 78, bendX: 520, bendY: 78, endX: 598, endY: 140 },
    { x: 0, y: 170, startX: 330, startY: 224, bendX: 486, bendY: 224, endX: 496, endY: 330 },
    { x: 0, y: 316, startX: 330, startY: 370, bendX: 476, bendY: 370, endX: 424, endY: 438 },
    { x: 0, y: 462, startX: 330, startY: 516, bendX: 502, bendY: 516, endX: 582, endY: 520 },
    { x: 0, y: 608, startX: 330, startY: 662, bendX: 512, bendY: 662, endX: 606, endY: 642 },
    { x: 960, y: 24, startX: 960, startY: 78, bendX: 780, bendY: 78, endX: 678, endY: 136 },
    { x: 960, y: 170, startX: 960, startY: 224, bendX: 810, bendY: 224, endX: 724, endY: 330 },
    { x: 960, y: 340, startX: 960, startY: 394, bendX: 828, bendY: 394, endX: 804, endY: 438 },
    { x: 960, y: 508, startX: 960, startY: 562, bendX: 800, bendY: 562, endX: 670, endY: 520 },
    { x: 960, y: 654, startX: 960, startY: 708, bendX: 780, bendY: 708, endX: 732, endY: 605 },
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

            <section className="qiaoxi-stage" aria-label={t('mascot_meaning_section.header')}>
                <svg className="qiaoxi-lines" viewBox="0 0 1280 820" aria-hidden="true">
                    {calloutLayout.map((item, index) => (
                        <g key={index}>
                            <polyline
                                points={`${item.startX},${item.startY} ${item.bendX},${item.bendY} ${item.bendX},${item.endY} ${item.endX},${item.endY}`}
                            />
                            <circle className="qiaoxi-card-dot" cx={item.startX} cy={item.startY} r="5" />
                            <circle className="qiaoxi-target-dot" cx={item.endX} cy={item.endY} r="5" />
                        </g>
                    ))}
                </svg>

                <img src={mascotCenter} alt="Qiaoxi Mascot" className="qiaoxi-mascot-main" />

                {qiaoxiPoints.slice(0, calloutLayout.length).map((point, index) => {
                    const layout = calloutLayout[index]

                    return (
                        <article
                            className="qiaoxi-callout"
                            key={point.title}
                            style={{
                                left: `${layout.x}px`,
                                top: `${layout.y}px`,
                            }}
                        >
                            <div className="qiaoxi-point-circle">
                                <img src={partImages[index]} alt="" />
                            </div>
                            <div className="qiaoxi-point-copy">
                                <p className="qiaoxi-point-title">{point.title}</p>
                                <p className="qiaoxi-point-description">{point.description}</p>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default QiaoxiMeaning
