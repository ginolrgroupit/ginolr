import { useTranslation } from 'react-i18next'
import './XiaoCMeaning.css'

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
    // Left 1: company logo on XiaoC's forehead.
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
    { x: 1200, y: 58, startX: 1200, startY: 110, bendX: 1150, bendY: 110, endX: 1090, endY: 160, side: 'right' },
    // Right 2: bright eye.
    { x: 1300, y: 186, startX: 1300, startY: 250, bendX: 1200, bendY: 250, endX: 940, endY: 400, side: 'right' },
    // Right 3: safety glove.
    { x: 1350, y: 364, startX: 1350, startY: 430, bendX: 1150, bendY: 430, endX: 970, endY: 550, side: 'right' },
    // Right 4: leaf tail.
    { x: 1300, y: 528, startX: 1300, startY: 585, bendX: 1170, bendY: 585, endX: 1000, endY: 655, side: 'right' },
    // Right 5: cape.
    { x: 1200, y: 654, startX: 1200, startY: 730, bendX: 1010, bendY: 730, endX: 950, endY: 730, side: 'right' },
] as const

// วงกลมสีแดงสำหรับชี้ตำแหน่งบนตัว XiaoC:
// ขยับวงกลมได้โดยแก้ค่า x และ y (หน่วยเป็น px บน stage ขนาด 1600x900)
// x = ระยะจากขอบซ้ายของ stage, y = ระยะจากขอบบนของ stage, size = ขนาดเส้นผ่านศูนย์กลางของวงกลม
const XiaoCHighlightCircle = {
    x: 890,
    y: 75,
    size: 200,
}

type XiaoCPoint = {
    title: string
    description: string
}

type CharacterDetail = {
    title: string
    description: string
}

type XiaoCCharacter = {
    title: string
    intro: {
        title: string
        description: string
    }
    traitsTitle: string
    traits: CharacterDetail[]
    gimmicksTitle: string
    gimmicks: CharacterDetail[]
    signatureTitle: string
    signatureDescription: string
    uspTitle: string
    uspName: string
    uspDescription: string
}

const XiaoCMeaning = () => {
    const { t } = useTranslation('about')
    const points = t('mascot_meaning_section.points', { returnObjects: true })
    const XiaoCPoints = Array.isArray(points) ? (points as XiaoCPoint[]) : []
    const character = t('mascot_meaning_section.character', { returnObjects: true }) as XiaoCCharacter

    return (
        <div className="XiaoC-page">
            <h1 className="XiaoC-main-title">{t('mascot_meaning_section.header')}</h1>
            <p className="XiaoC-character-name">{t('mascot_meaning_section.name')}</p>

            <section className="XiaoC-stage-shell" aria-label={t('mascot_meaning_section.header')}>
                <div className="XiaoC-stage">
                    <svg className="XiaoC-lines" width="1600" height="900" viewBox="0 0 1600 900" aria-hidden="true">
                        {calloutLayout.map((item, index) => (
                        <g key={index}>
                            <polyline
                                className="XiaoC-line-path"
                                points={`${item.startX},${item.startY} ${item.bendX},${item.bendY} ${item.bendX},${item.endY} ${item.endX},${item.endY}`}
                            />
                            <polyline
                                className="XiaoC-line-light"
                                points={`${item.startX},${item.startY} ${item.bendX},${item.bendY} ${item.bendX},${item.endY} ${item.endX},${item.endY}`}
                            />
                            <circle className="XiaoC-card-dot" cx={item.startX} cy={item.startY} r="5" />
                            <circle className="XiaoC-target-dot" cx={item.endX} cy={item.endY} r="5" />
                        </g>
                        ))}
                    </svg>

                    <img src={mascotCenter} alt="XiaoC Mascot" className="XiaoC-mascot-main" />

                    <div
                        className="XiaoC-highlight-circle"
                        aria-hidden="true"
                        style={{
                            left: `${XiaoCHighlightCircle.x}px`,
                            top: `${XiaoCHighlightCircle.y}px`,
                            width: `${XiaoCHighlightCircle.size}px`,
                            height: `${XiaoCHighlightCircle.size}px`,
                        }}
                    />

                    {pointDetails.map((detail, index) => {
                        const layout = calloutLayout[index]
                        const point = XiaoCPoints[detail.pointIndex]

                        if (!point) return null

                        return (
                            <article
                                className={`XiaoC-callout XiaoC-callout-${layout.side}`}
                                key={point.title}
                                style={{
                                    left: `${layout.x}px`,
                                    top: `${layout.y}px`,
                                }}
                            >
                                <div className="XiaoC-point-circle">
                                    <img src={detail.image} alt="" />
                                </div>
                                <div className="XiaoC-point-copy">
                                    <p className="XiaoC-point-title">{point.title}</p>
                                    <p className="XiaoC-point-description">{point.description}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            <section className="XiaoC-character-section" aria-labelledby="XiaoC-character-heading">
                <div className="XiaoC-character-inner">
                    <div className="XiaoC-character-heading-block">
                        <p className="XiaoC-character-kicker">{character.uspName}</p>
                        <h2 className="XiaoC-character-heading" id="XiaoC-character-heading">{character.title}</h2>
                    </div>

                    <article className="XiaoC-character-feature">
                        <p className="XiaoC-character-feature-title">{character.intro.title}</p>
                        <p className="XiaoC-character-feature-text">{character.intro.description}</p>
                    </article>

                    <div className="XiaoC-character-grid">
                        <div className="XiaoC-character-group">
                            <h3 className="XiaoC-character-group-title">{character.traitsTitle}</h3>
                            {character.traits.map((item) => (
                                <article className="XiaoC-character-card" key={item.title}>
                                    <p className="XiaoC-character-card-title">{item.title}</p>
                                    <p className="XiaoC-character-card-text">{item.description}</p>
                                </article>
                            ))}
                        </div>

                        <div className="XiaoC-character-group">
                            <h3 className="XiaoC-character-group-title">{character.gimmicksTitle}</h3>
                            {character.gimmicks.map((item) => (
                                <article className="XiaoC-character-card" key={item.title}>
                                    <p className="XiaoC-character-card-title">{item.title}</p>
                                    <p className="XiaoC-character-card-text">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <article className="XiaoC-signature-card">
                        <div>
                            <p className="XiaoC-signature-title">{character.signatureTitle}</p>
                            <p className="XiaoC-signature-text">{character.signatureDescription}</p>
                        </div>
                    </article>

                    <article className="XiaoC-usp-panel">
                        <p className="XiaoC-usp-kicker">{character.uspTitle}</p>
                        <h3 className="XiaoC-usp-title">{character.uspName}</h3>
                        <p className="XiaoC-usp-text">{character.uspDescription}</p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default XiaoCMeaning
