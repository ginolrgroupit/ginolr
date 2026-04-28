import { useTranslation } from 'react-i18next'
import './QiaoxiMeaning.css'

import mascotFront from '../../assets/เฉี่ยวซีFont.png'
import mascotBack from '../../assets/เฉี่ยวซีback.png'
import partOne from '../../assets/เฉี่ยวซีชิ้นส่วน/1.png'
import partTwo from '../../assets/เฉี่ยวซีชิ้นส่วน/2.png'
import partThree from '../../assets/เฉี่ยวซีชิ้นส่วน/3.png'
import partFour from '../../assets/เฉี่ยวซีชิ้นส่วน/4.png'
import partFive from '../../assets/เฉี่ยวซีชิ้นส่วน/5.png'
import partSix from '../../assets/เฉี่ยวซีชิ้นส่วน/6.png'
import partSeven from '../../assets/เฉี่ยวซีชิ้นส่วน/7.png'
import partEight from '../../assets/เฉี่ยวซีชิ้นส่วน/8.png'
import partNine from '../../assets/เฉี่ยวซีชิ้นส่วน/9.png'
import partTen from '../../assets/เฉี่ยวซีชิ้นส่วน/10.png'

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
