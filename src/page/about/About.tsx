import './About.css'
import sky_night_view_landing_img from '../../assets/skyline-night-view-landing.jpg'
import many_product from '../../assets/many_product.png'
import category_right1 from '../../assets/product_category_right_section1.png'
import category_right2 from '../../assets/product_category_right_section2.jpg'
import category_right3 from '../../assets/product_category_right_section3.jpg'
import { Trans, useTranslation } from 'react-i18next'

// หมวดโลโก้
import logo_tisi from '../../assets/logo_tisi.png'
import logo_iec from '../../assets/logo_iec.png'
import logo_iecee from '../../assets/logo_iecee.png'
import logo_ukas from '../../assets/logo_ukas.png'
import logo_made_in_th from '../../assets/logo_made_in_th.png'
// หมวดไอคอน
import icon_iso9001 from '../../assets/icon_iso9001.png'
import icon_gears from '../../assets/icon_gears.png'
import icon_globe from '../../assets/icon_globe.png'
import icon_target from '../../assets/icon_target.png'
import icon_premium from '../../assets/icon_premium.png'
// หมวดใบรับรอง
import logo_ilac_cnas from '../../assets/logo_ilac_cnas.png'
import cert_report from '../../assets/cert_report.jpg'
import cert_import1 from '../../assets/cert_import1.jpg'
import logo_iec_iecee from '../../assets/logo_iec_iecee.png'
import cert_electrical from '../../assets/cert_electrical.jpg'
import cert_import2 from '../../assets/cert_import2.jpg'

const About = () => {
    const { t } = useTranslation('about')
    const renderList = (path: string) => {
        const data = t(path, { returnObjects: true });
        const list = Array.isArray(data) ? data : [];

        return (
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    };

    return (
        <div className="about-page">
            <div className="history-section page-section">
                <h3 className='header-font'>
                    {t('history_section.header')}
                </h3>

                <p className='title-font'>
                    <Trans t={t} i18nKey="history_section.content_one">
                        <b>GINORL GROUP</b>
                        ก่อตั้งขึ้นในปี 2547 มุ่งเน้นสร้างความปลอดภัยทางไฟฟ้า โดยให้บริการโซลูชั่นการกระจายพลังงานที่สมบูรณ์แบบ
                        และปรับเปลี่ยนผลิตภัณฑ์เพื่อตอบสนองกับการวิจัยและพัฒนา การผลิต การขาย และบริการไฟฟ้า รวมถึงตู้ไฟฟ้า สายไฟ และสายเคเบิล และผลิตภัณฑ์อื่นๆ
                        <b>GINORL GROUP</b>
                        ได้สร้างความสัมพันธ์ความร่วมมือ และความมั่นคงอย่างต่อเนื่องกับโครงการขนาดใหญ่อย่างโครงการของภาครัฐ รวมถึงเทคโนโลยีที่พักอาศัย และพาณิชยกรรมขนาดใหญ่
                        เช่น โรงงานไฟฟ้า โครงการไฟฟ้าพลังงานลม ระบบอิเล็กทรอนิกส์ การก่อสร้างเชิงอุตสาหกรรม ข้อมูล การสื่อสาร พลังงานใหม่ และการขนส่ง
                        บริษัท ยึดมั่นในนโยบายหลัก
                        <b>"ลูกค้าเป็นศูนย์กลาง"</b>
                        และยืนหยัดดำเนินการวิจัยและพัฒนาผลิตภัณฑ์ตามความต้องการของลูกค้า
                        ศูนย์วิจัยและพัฒนาเทคโนโลยีของบริษัท ใช้ห้องปฏิบัติการระดับประเทศ พร้อมทั้งมีใบรับรองต่างๆ เช่น TISI,MIT, มอก และ CB
                        บริษัทได้รับการรับรองระบบการจัดการ คุณภาพ
                        <b>ISO 9001:2015</b>
                        ความมุ่งมั่นในการจัดหาผลิตภัณฑ์คุณภาพสูงและบริการที่ดี สร้างการเติบโต
                        และพัฒนาองค์กรในยุคใหม่ ๆ อย่างต่อเนื่อง เพื่อให้ลูกค้ามั่นใจ ปลอดภัย และสบายใจกับแบรนด์
                    </Trans>
                    <br />
                    <br />
                    <Trans t={t} i18nKey="history_section.content_two">
                        <b>"CT ELECTRIC"</b>
                        เป็นแบรนด์ที่เหมาะกับทุกสภาพแวดล้อมใน พื้นที่แบบต่างๆ ใช้งานได้หลากหลาย
                        ทั้งพลังงานแสงอาทิตย์ UPS และระบบเดินสาย เราพัฒนาการผลิต การขาย และการให้บริการ เพื่อให้ลูกค้าได้รับประสบการณ์ที่ดี รับการบริการระดับมืออาชีพ ทางบริษัท
                        <b> GINORL GROUP </b>
                        ได้รับการยอมรับจากลูกค้าใน
                        ภูมิภาคต่างๆ “การใช้ไฟฟ้าอย่างปลอดภัยอุปกรณ์การไฟฟ้า”
                    </Trans>
                </p>
            </div>
            <div className='landing-img-section page-section'>
                <img src={sky_night_view_landing_img} alt="Landing View" />
            </div>
            <div className="process-section page-section">
                <svg width="389" height="37" viewBox="0 0 389 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="33.0251" y1="18.6328" x2="121.166" y2="18.6328" stroke="#3C5858" strokeWidth="5" strokeLinecap="round" />
                    <line x1="151.995" y1="18.6328" x2="240.136" y2="18.6328" stroke="#3C5858" strokeWidth="5" strokeLinecap="round" />
                    <line x1="270.182" y1="18.6328" x2="358.323" y2="18.6328" stroke="#3C5858" strokeWidth="5" strokeLinecap="round" />
                    <circle cx="18.3934" cy="18.3934" r="17.8934" fill="#3C5858" stroke="#3C5858" />
                    <circle cx="18.3934" cy="18.3934" r="14.7626" fill="white" stroke="#3C5858" />
                    <circle cx="135.798" cy="18.3934" r="17.8934" fill="#3C5858" stroke="#3C5858" />
                    <circle cx="253.202" cy="18.3934" r="17.8934" fill="#3C5858" stroke="#3C5858" />
                    <circle cx="370.607" cy="18.3934" r="17.8934" fill="#3C5858" stroke="#3C5858" />
                    <circle cx="135.798" cy="18.3934" r="14.7626" fill="white" stroke="#3C5858" />
                    <circle cx="253.202" cy="18.3934" r="14.7626" fill="white" stroke="#3C5858" />
                    <circle cx="370.607" cy="18.3934" r="14.7626" fill="white" stroke="#3C5858" />
                </svg>

                <h3>{t('process_section.header')}</h3>
                <p>{t('process_section.content')}</p>
            </div>

            <div className="product-cateogry-section page-section">
                <div className="header-container">
                    <h3>{t('product_type_section.header')}</h3>
                </div>
                <div className='product-img-container'>
                    <div className="left-side">
                        <img src={many_product} alt="Products" />
                    </div>
                    <div className="right-side">
                        <div className="content">
                            <h3>{t('product_type_section.type_one.header')}</h3>
                            <div className='list-container'>
                                <div className="left-side">
                                    {renderList('product_type_section.type_one.list.left_side')}
                                </div>
                                <div className="right-side">
                                    {renderList('product_type_section.type_one.list.right_side')}
                                </div>
                            </div>
                            <img src={category_right1} alt="Category 1" />
                            <div className="overlay" />
                        </div>
                        <div className="content">
                            <h3>{t('product_type_section.type_two.header')}</h3>
                            <div className='list-container'>
                                <div className="left-side">
                                    {renderList('product_type_section.type_two.list.left_side')}
                                </div>
                                <div className="right-side">
                                    {renderList('product_type_section.type_two.list.right_side')}
                                </div>
                            </div>
                            <img src={category_right2} alt="Category 2" />
                            <div className="overlay" />
                        </div>
                        <div className="content">
                            <h3>{t('product_type_section.type_three.header')}</h3>
                            <div className='list-container'>
                                <div className="left-side">
                                    {renderList('product_type_section.type_three.list.left_side')}
                                </div>
                            </div>
                            <img src={category_right3} alt="Category 3" />
                            <div className="overlay" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info-section page-section">
                <div className="info-box">
                    <div>
                        <svg width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.42 58.0952L20.673 49.381C19.5084 48.8968 18.4174 48.3895 17.4003 47.8589C16.3831 47.3283 15.3388 46.6737 14.2673 45.8952L5.82339 48.5095L0 38.6333L6.6969 32.8238C6.50278 31.5651 6.40573 30.3063 6.40573 29.0476C6.40573 27.7889 6.50278 26.5302 6.6969 25.2714L0 19.4619L5.82339 9.58571L14.2673 12.2C15.3349 11.4254 16.3792 10.7709 17.4003 10.2364C18.4213 9.70191 19.5122 9.19454 20.673 8.71428L22.42 0H34.0668L35.8138 8.71428C36.9785 9.19841 38.0714 9.70771 39.0924 10.2422C40.1134 10.7767 41.1558 11.4293 42.2196 12.2L50.6635 9.58571L56.4869 19.4619L49.79 25.2714C49.9841 26.5302 50.0811 27.7889 50.0811 29.0476C50.0811 30.3063 49.9841 31.5651 49.79 32.8238L56.4869 38.6333L50.6635 48.5095L42.2196 45.8952C41.1519 46.6698 40.1096 47.3244 39.0924 47.8589C38.0753 48.3933 36.9824 48.9007 35.8138 49.381L34.0668 58.0952H22.42ZM28.2434 40.6667C31.4463 40.6667 34.1891 39.5299 36.4719 37.2565C38.7546 34.983 39.8941 32.2467 39.8902 29.0476C39.8863 25.8485 38.7469 23.1142 36.4719 20.8446C34.1969 18.575 31.4541 17.4363 28.2434 17.4286C25.0328 17.4208 22.2919 18.5595 20.0208 20.8446C17.7497 23.1296 16.6083 25.864 16.5967 29.0476C16.585 32.2312 17.7264 34.9675 20.0208 37.2565C22.3152 39.5454 25.0561 40.6822 28.2434 40.6667ZM74.5394 122L71.9189 109.8C70.2689 109.219 68.7412 108.516 67.3358 107.691C65.9305 106.866 64.5464 105.923 63.1838 104.862L51.537 108.638L43.3842 94.6952L52.7017 86.5619C52.5076 84.819 52.4105 83.0762 52.4105 81.3333C52.4105 79.5905 52.5076 77.8476 52.7017 76.1048L43.3842 67.9714L51.537 54.0286L63.1838 57.8048C64.5426 56.7397 65.9266 55.7947 67.3358 54.9697C68.7451 54.1448 70.2728 53.4437 71.9189 52.8667L74.5394 40.6667H90.8449L93.4654 52.8667C95.1153 53.4476 96.645 54.1506 98.0542 54.9755C99.4635 55.8005 100.846 56.7436 102.2 57.8048L113.847 54.0286L122 67.9714L112.683 76.1048C112.877 77.8476 112.974 79.5905 112.974 81.3333C112.974 83.0762 112.877 84.819 112.683 86.5619L122 94.6952L113.847 108.638L102.2 104.862C100.842 105.927 99.4596 106.87 98.0542 107.691C96.6488 108.512 95.1192 109.215 93.4654 109.8L90.8449 122H74.5394ZM82.6921 98.7619C87.5449 98.7619 91.6698 97.0675 95.0668 93.6786C98.4638 90.2897 100.162 86.1746 100.162 81.3333C100.162 76.4921 98.4638 72.377 95.0668 68.9881C91.6698 65.5992 87.5449 63.9048 82.6921 63.9048C77.8393 63.9048 73.7144 65.5992 70.3174 68.9881C66.9204 72.377 65.222 76.4921 65.222 81.3333C65.222 86.1746 66.9204 90.2897 70.3174 93.6786C73.7144 97.0675 77.8393 98.7619 82.6921 98.7619Z" fill="#1C4949" />
                        </svg>
                    </div>
                    <h3>{t('other_info_section.manu.header')}</h3>
                    <p>{t('other_info_section.manu.content')}</p>
                </div>
                <div className="info-box">
                    <div>
                        <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55.0655 0.188535C56.34 -0.0628451 57.6554 -0.0628451 58.9356 0.188535C60.403 0.469146 61.7359 1.16483 62.9753 1.80789L63.2851 1.97158L111.632 26.9927C112.346 27.3624 112.944 27.9211 113.362 28.6077C113.779 29.2944 114 30.0826 114 30.8862V77.0584C114 78.7128 114.012 80.4666 113.456 82.0977C112.968 83.5185 112.18 84.8182 111.147 85.9093C109.949 87.1604 108.382 87.9613 106.92 88.7154L106.552 88.9084L59.0175 113.509C58.3942 113.831 57.7025 114 57.0006 114C56.2986 114 55.607 113.831 54.9837 113.509L7.44911 88.9084L7.08081 88.7154C5.61929 87.9613 4.05253 87.1604 2.85409 85.9093C1.82105 84.8182 1.03366 83.5185 0.544879 82.0977C-0.0104992 80.4608 -0.00465275 78.707 0.00119334 77.0525V30.8862C0.00112818 30.0826 0.221937 29.2944 0.639493 28.6077C1.05705 27.9211 1.65529 27.3624 2.36886 26.9927L50.7102 1.97158L51.02 1.81374C52.2653 1.16483 53.5923 0.469146 55.0655 0.188535ZM56.3867 8.93424C55.8311 9.1966 55.2814 9.47143 54.7382 9.75854L14.137 30.7751L57.0006 51.7508L99.8641 30.7751L59.2572 9.75854C58.7139 9.47143 58.1642 9.1966 57.6086 8.93424L57.2695 8.79394M52.616 102.407V59.3682L8.77033 37.9132V76.6375C8.77033 77.7307 8.77033 78.3562 8.79956 78.8297L8.85218 79.2857C8.92781 79.4899 9.04081 79.6783 9.1854 79.8411C9.21463 79.8645 9.30817 79.9405 9.55955 80.0866C9.95709 80.3322 10.5125 80.6128 11.4771 81.1156L52.616 102.407Z" fill="#1C4949" />
                        </svg>
                    </div>
                    <h3>{t('other_info_section.assembly.header')}</h3>
                    <p>{t('other_info_section.assembly.content')}</p>
                </div>
                <div className="info-box">
                    <div>
                        <svg width="76" height="98" viewBox="0 0 76 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38 0C35.34 0 33.4172 1.10815 32.6572 2.23892C32.2772 2.61585 31.9694 3.39231 31.5894 3.76923H26.6C22.42 3.76923 19 7.16154 19 11.3077H11.4C4.94 11.3077 0 16.2077 0 22.6154V86.6923C0 93.1 4.94 98 11.4 98H64.6C71.06 98 76 93.1 76 86.6923V22.6154C76 16.2077 71.06 11.3077 64.6 11.3077H57C57 7.16154 53.58 3.76923 49.4 3.76923H44.4106C44.0306 3.39231 43.7266 2.61585 43.3466 2.23892C42.5828 1.10815 40.66 0 38 0ZM26.6 11.3077H49.4V18.8462H26.6V11.3077ZM11.4 22.6154H20.1894C21.3294 24.8769 23.94 26.3846 26.6 26.3846H49.4C52.06 26.3846 54.6706 24.8769 55.8144 22.6154H64.6V86.6923H11.4V22.6154ZM51.5394 40.2855C50.825 40.2855 50.1334 40.5418 49.7534 41.1072L33.0144 58.7774L26.6 52.7692C25.46 51.6385 23.56 51.6385 22.8 52.7692L20.1856 55.3625C19.0456 56.4932 19.0456 58.3778 20.1856 59.1317L30.7572 69.0222C32.2772 70.5298 34.58 70.0587 36.1 68.551L56.6428 46.7648C57.4028 46.011 57.4294 44.4769 56.2894 43.3462L53.5534 41.1072C53.0188 40.5783 52.2945 40.2852 51.5394 40.2855Z" fill="#1C4949" />
                        </svg>
                    </div>
                    <h3>{t('other_info_section.inspect.header')}</h3>
                    <p>{t('other_info_section.inspect.content')}</p>
                </div>
                <div className="info-box">
                    <div>
                        <svg width="136" height="98" viewBox="0 0 136 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M105.091 88.8125C110.222 88.8125 114.364 84.7087 114.364 79.625C114.364 74.5413 110.222 70.4375 105.091 70.4375C99.96 70.4375 95.8182 74.5413 95.8182 79.625C95.8182 84.7087 99.96 88.8125 105.091 88.8125ZM114.364 33.6875H98.9091V49H126.48L114.364 33.6875ZM30.9091 88.8125C36.04 88.8125 40.1818 84.7087 40.1818 79.625C40.1818 74.5413 36.04 70.4375 30.9091 70.4375C25.7782 70.4375 21.6364 74.5413 21.6364 79.625C21.6364 84.7087 25.7782 88.8125 30.9091 88.8125ZM117.455 24.5L136 49V79.625H123.636C123.636 89.7925 115.353 98 105.091 98C94.8291 98 86.5455 89.7925 86.5455 79.625H49.4545C49.4545 89.7925 41.1709 98 30.9091 98C20.6473 98 12.3636 89.7925 12.3636 79.625H0V12.25C0 5.45125 5.50182 0 12.3636 0H98.9091V24.5H117.455ZM12.3636 12.25V67.375H17.0618C20.4618 63.6387 25.4073 61.25 30.9091 61.25C36.4109 61.25 41.3564 63.6387 44.7564 67.375H86.5455V12.25H12.3636Z" fill="#1C4949" />
                        </svg>
                    </div>
                    <h3>{t('other_info_section.service.header')}</h3>
                    <p>{t('other_info_section.service.content')}</p>
                </div>
            </div>

            <div className="standart-section page-section">
                <div className="cert-main-header">
                    <h3>{t('standard certification.main_header')}</h3>
                </div>

                <div className="certification-grid">
                    <div className="cert-card">
                        <div className="cert-info">
                            <p className="cert-title">{t('standard certification.report.header')}</p>
                            <img src={logo_ilac_cnas} alt="ilac/CNAS" style={{ height: '100px', objectFit: 'contain' }} />
                        </div>
                        <img src={cert_report} alt="Report" style={{ height: '400px', objectFit: 'contain' }} />
                    </div>
                    <div className="cert-card">
                        <div className="cert-info">
                            <p className="cert-title">{t('standard certification.importstan1.header')}</p>
                        </div>
                        <img src={cert_import2} alt="Import Standard 1" style={{ height: '400px', objectFit: 'contain' }} />
                    </div>
                    <div className="cert-card">
                        <div className="cert-info">
                            <p className="cert-title">{t('standard certification.electricalstan.header')}</p>
                            <img src={logo_iec_iecee} alt="IEC/IECEE" style={{ height: '100px', objectFit: 'contain' }} />
                        </div>
                        <img src={cert_electrical} alt="Electrical Standard" style={{ height: '400px', objectFit: 'contain' }} />
                    </div>
                    <div className="cert-card">
                        <div className="cert-info">
                            <p className="cert-title">{t('standard certification.importstan2.header')}</p>
                        </div>
                        <img src={cert_import1} alt="Import Standard 2" style={{ height: '400px', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            {/* ==========================================
                ส่วนที่เพิ่มใหม่ล่าสุด: Company Commitments (สลับตำแหน่งแล้ว)
                ========================================== */}
            <div className="commitments-section page-section">

                {/* แถวที่ 1 (ย้ายขึ้นมาจากด้านล่าง): 3 เสาหลัก (มอก. / เป้าหมาย / คุณภาพ) */}
                <div className="commitments-pillars">
                    <div className="pillar-box">
                        <img src={icon_globe} alt="globe" style={{ height: '80px', objectFit: 'contain' }} />
                        <p>{t('company_commitments.pillars.tis.content')}</p>
                    </div>
                    <div className="pillar-box">
                        <img src={icon_target} alt="target" style={{ height: '80px', objectFit: 'contain' }} />
                        <p>{t('company_commitments.pillars.target.content')}</p>
                    </div>
                    <div className="pillar-box">
                        <img src={icon_premium} alt="premium" style={{ height: '80px', objectFit: 'contain' }} />
                        <p>{t('company_commitments.pillars.quality.content')}</p>
                    </div>
                </div>



                {/* แถวที่ 3 (ย้ายลงมาจากด้านบน): ข้อมูลบริษัท & ISO */}
                <div className="commitments-top">
                    <div className="commit-box">
                        <img src={icon_gears} alt="gears" style={{ height: '60px', objectFit: 'contain' }} />
                        <p>{t('company_commitments.intro.content')}</p>
                    </div>
                    <div className="commit-box">
                        <img src={icon_iso9001} alt="ISO 9001" style={{ height: '60px', objectFit: 'contain' }} />
                        <p>{t('company_commitments.iso.content')}</p>
                    </div>
                </div>

                {/* แถวที่ 2: โลโก้มาตรฐานต่างๆ */}
                <div className="commitments-logos">
                    <img src={logo_tisi} alt="TISI" style={{ height: '60px', objectFit: 'contain' }} />
                    <img src={logo_iec} alt="IEC" style={{ height: '60px', objectFit: 'contain' }} />
                    <img src={logo_iecee} alt="IECEE" style={{ height: '60px', objectFit: 'contain' }} />

                    {/* ตรงโลโก้ UKAS ลบ div placeholder ทิ้ง แล้วใส่ img แทนแบบนี้ครับ */}
                    <img src={logo_ukas} alt="UKAS" style={{ height: '60px', objectFit: 'contain' }} />

                    <img src={logo_made_in_th} alt="Made in TH" style={{ height: '60px', objectFit: 'contain' }} />
                </div>

            </div>

        </div>
    )
}

export default About
