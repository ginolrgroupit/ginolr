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

const pointDetails = [
    { pointIndex: 1, image: partTwo },
    { pointIndex: 4, image: partFive },
    { pointIndex: 7, image: partEight },
    { pointIndex: 3, image: partFour },
    { pointIndex: 8, image: partNine },
    { pointIndex: 0, image: partOne },
    { pointIndex: 5, image: partSix },
    { pointIndex: 2, image: partThree },
    { pointIndex: 6, image: partSeven },
    { pointIndex: 9, image: partTen },
]

const calloutLayout = [
    // Left 1: company logo on Qiaoxi's forehead.
    { x: 100, y: 40, startX: 430, startY: 100, bendX: 680, bendY: 100, endX: 750, endY: 240, side: 'left' },
    // Left 2: lightning eyebrow.
    { x: 40, y: 182, startX: 370, startY: 245, bendX: 560, bendY: 245, endX: 680, endY: 370, side: 'left' },
    // Left 3: open arm.
    { x: 0, y: 330, startX: 330, startY: 410, bendX: 510, bendY: 410, endX: 650, endY: 600, side: 'left' },
    // Left 4: CT logo on shirt.
    { x: 40, y: 525, startX: 370, startY: 590, bendX: 450, bendY: 590, endX: 715, endY: 655, side: 'left' },
    // Left 5: CT belt.
    { x: 100, y: 680, startX: 430, startY: 740, bendX: 570, bendY: 740, endX: 785, endY: 705, side: 'left' },
    // Right 1: CT-shaped hair.
    { x: 1200, y: 58, startX: 1200, startY: 110, bendX: 1150, bendY: 110, endX: 1030, endY: 160, side: 'right' },
    // Right 2: bright eye.
    { x: 1300, y: 186, startX: 1300, startY: 250, bendX: 1200, bendY: 250, endX: 940, endY: 400, side: 'right' },
    // Right 3: safety glove.
    { x: 1350, y: 364, startX: 1350, startY: 430, bendX: 1150, bendY: 430, endX: 970, endY: 550, side: 'right' },
    // Right 4: leaf tail.
    { x: 1300, y: 528, startX: 1300, startY: 585, bendX: 1170, bendY: 585, endX: 1000, endY: 655, side: 'right' },
    // Right 5: cape.
    { x: 1200, y: 654, startX: 1200, startY: 730, bendX: 1010, bendY: 730, endX: 950, endY: 730, side: 'right' },
] as const

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

            <section className="qiaoxi-stage-shell" aria-label={t('mascot_meaning_section.header')}>
                <div className="qiaoxi-stage">
                    <svg className="qiaoxi-lines" width="1600" height="900" viewBox="0 0 1600 900" aria-hidden="true">
                        {calloutLayout.map((item, index) => (
                        <g key={index}>
                            <polyline
                                className="qiaoxi-line-path"
                                points={`${item.startX},${item.startY} ${item.bendX},${item.bendY} ${item.bendX},${item.endY} ${item.endX},${item.endY}`}
                            />
                            <polyline
                                className="qiaoxi-line-light"
                                points={`${item.startX},${item.startY} ${item.bendX},${item.bendY} ${item.bendX},${item.endY} ${item.endX},${item.endY}`}
                            />
                            <circle className="qiaoxi-card-dot" cx={item.startX} cy={item.startY} r="5" />
                            <circle className="qiaoxi-target-dot" cx={item.endX} cy={item.endY} r="5" />
                        </g>
                        ))}
                    </svg>

                    <img src={mascotCenter} alt="Qiaoxi Mascot" className="qiaoxi-mascot-main" />

                    {pointDetails.map((detail, index) => {
                        const layout = calloutLayout[index]
                        const point = qiaoxiPoints[detail.pointIndex]

                        if (!point) return null

                        return (
                            <article
                                className={`qiaoxi-callout qiaoxi-callout-${layout.side}`}
                                key={point.title}
                                style={{
                                    left: `${layout.x}px`,
                                    top: `${layout.y}px`,
                                }}
                            >
                                <div className="qiaoxi-point-circle">
                                    <img src={detail.image} alt="" />
                                </div>
                                <div className="qiaoxi-point-copy">
                                    <p className="qiaoxi-point-title">{point.title}</p>
                                    <p className="qiaoxi-point-description">{point.description}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default QiaoxiMeaning
