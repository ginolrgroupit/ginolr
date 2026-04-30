import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { SiLine, SiShopee, SiTiktok } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import './Footer.css'

const Footer = () => {
    const socialLinks = [
        { label: 'Facebook', href: 'https://www.facebook.com/GinolrGroup/?_rdc=2&_rdr', icon: <FaFacebookF /> },
        { label: 'TikTok', href: 'https://www.tiktok.com/@ctelectric', icon: <SiTiktok /> },
        { label: 'LINE', href: 'https://lin.ee/XHk4ppg', icon: <SiLine /> },
        { label: 'Shopee', href: 'https://shopee.co.th/CT.ELECTRICshop?is_from_signup=true', icon: <SiShopee /> },
        { label: 'Lazada', href: 'https://www.lazada.co.th/shop/ct-electric/?path=index.htm', text: 'Laz' },
    ]

    return (
        <footer className="site-footer">
            <div className="site-footer-inner">
                <section className="footer-brand" aria-label="GINOLR GROUP social links">
                    <h2>GINOLR GROUP</h2>
                    <div className="footer-social-list">
                        {socialLinks.map((item) => (
                            <a
                                className="footer-social-link"
                                href={item.href}
                                aria-label={item.label}
                                target="_blank"
                                rel="noreferrer"
                                key={item.label}
                            >
                                {item.icon ?? <span>{item.text}</span>}
                            </a>
                        ))}
                    </div>
                </section>

                <section className="footer-contact" aria-label="Contact information">
                    <h2>ติดต่อเรา</h2>
                    <div className="footer-contact-row">
                        <span className="footer-contact-icon">
                            <FaPhoneAlt />
                        </span>
                        <span>034-496-686</span>
                    </div>
                    <div className="footer-contact-row footer-address-row">
                        <span className="footer-contact-icon">
                            <FaMapMarkerAlt />
                        </span>
                        <address>
                            49/3 Moo 8 Nadee Subdistrict, Mueang Samut Sakhon District
                            <br />
                            Samut Sakhon, Thailand
                        </address>
                    </div>
                </section>

                <section className="footer-email" aria-label="Email">
                    <div className="footer-contact-row">
                        <span className="footer-contact-icon footer-email-icon">
                            <MdEmail />
                        </span>
                        <a href="mailto:ctthai@hotmail.com">ctthai@hotmail.com</a>
                    </div>
                </section>
            </div>

            <p className="footer-copyright">
                &copy; 2026 GINOLR GROUP CT ELECTRIFICATION Co., Ltd.
            </p>
        </footer>
    )
}

export default Footer
