import { useEffect, useMemo, useState } from 'react'
import { FiDownload, FiFileText } from 'react-icons/fi'
import manyProduct from '../../assets/many_product.webp'
import './ProductDataDownload.css'

const bannerImages = [
    '/product-landing-img/circuit-breaker.webp',
    '/product-landing-img/consumer.webp',
    '/product-landing-img/fuse.webp',
    '/product-landing-img/load-center.webp',
    '/product-landing-img/mccb-breaker.webp',
    '/product-landing-img/surge-protection-device.webp',
]

const catalogDownloads = [
    {
        id: 'surge-protection-device',
        title: 'GINOLR Surge Protection Device (SPD) Catalogue-2025',
        downloadUrl: '#',
    },
    {
        id: 'fuse',
        title: 'GINOLR Fuse Catalogue-2025',
        downloadUrl: '#',
    },
    {
        id: 'miniature-circuit-breakers',
        title: 'GINOLR Miniature Circuit Breakers (MCB) Catalogue-2025',
        downloadUrl: '#',
    },
]

const ITEMS_PER_PAGE = 3
const BANNER_INTERVAL_MS = 4200

const ProductDataDownload = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [activeBannerIndex, setActiveBannerIndex] = useState(0)
    const pageCount = Math.ceil(catalogDownloads.length / ITEMS_PER_PAGE)
    const visibleCatalogs = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
        return catalogDownloads.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    }, [currentPage])

    useEffect(() => {
        const bannerTimer = window.setInterval(() => {
            setActiveBannerIndex((currentIndex) => (currentIndex + 1) % bannerImages.length)
        }, BANNER_INTERVAL_MS)

        return () => window.clearInterval(bannerTimer)
    }, [])

    const goToPage = (page: number) => {
        setCurrentPage(Math.min(Math.max(page, 1), pageCount))
    }

    return (
        <main className="product-data-download-page">
            <section className="product-data-download-banner" aria-label="Product catalog banner">
                {bannerImages.map((image, index) => (
                    <img
                        className={index === activeBannerIndex ? 'active' : ''}
                        src={image}
                        alt=""
                        aria-hidden={index !== activeBannerIndex}
                        key={image}
                    />
                ))}
            </section>

            <section className="product-data-download-header">
                <p className="title-font">Product Data Download</p>
                <h1 className="header-font">Catalog Product</h1>
            </section>

            <section className="catalog-download-section" aria-label="Catalog product downloads">
                <div className="catalog-help-card">
                    <img src={manyProduct} alt="Product catalog support" />
                </div>

                <div className="catalog-list-wrap">
                    <div className="catalog-list">
                        {visibleCatalogs.map((catalog) => (
                            <article className="catalog-download-row" key={catalog.id}>
                                <FiFileText className="catalog-file-icon" aria-hidden="true" />
                                <h2 className="header-font">{catalog.title}</h2>
                                <a className="catalog-download-button" href={catalog.downloadUrl} aria-label={`Download ${catalog.title}`}>
                                    <FiDownload aria-hidden="true" />
                                    <span>Download</span>
                                </a>
                            </article>
                        ))}
                    </div>

                    {pageCount > 1 && (
                        <nav className="catalog-pagination" aria-label="Catalog pagination">
                            <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                                Previous
                            </button>
                            {Array.from({ length: pageCount }, (_, index) => {
                                const page = index + 1

                                return (
                                    <button
                                        type="button"
                                        className={currentPage === page ? 'active' : ''}
                                        onClick={() => goToPage(page)}
                                        aria-current={currentPage === page ? 'page' : undefined}
                                        key={page}
                                    >
                                        {page}
                                    </button>
                                )
                            })}
                            <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pageCount}>
                                Next
                            </button>
                        </nav>
                    )}

                </div>
            </section>
        </main>
    )
}

export default ProductDataDownload
