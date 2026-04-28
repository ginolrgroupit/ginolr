import './ProductDataDownload.css'

const mockCatalogs = [
    {
        id: 'consumer-unit',
        category: 'Circuit Protection',
        title: 'Consumer Unit Catalog',
        fileType: 'PDF',
        fileSize: '12.8 MB',
        updatedAt: 'Coming soon',
    },
    {
        id: 'circuit-breaker',
        category: 'Circuit Protection',
        title: 'Circuit Breaker Catalog',
        fileType: 'PDF',
        fileSize: '9.6 MB',
        updatedAt: 'Coming soon',
    },
    {
        id: 'switch-plug',
        category: 'Wiring Devices',
        title: 'Switch & Plug Catalog',
        fileType: 'PDF',
        fileSize: '8.4 MB',
        updatedAt: 'Coming soon',
    },
    {
        id: 'load-center',
        category: 'Distribution',
        title: 'Load Center Catalog',
        fileType: 'PDF',
        fileSize: '10.2 MB',
        updatedAt: 'Coming soon',
    },
    {
        id: 'surge-protection',
        category: 'Protection Devices',
        title: 'Surge Protection Catalog',
        fileType: 'PDF',
        fileSize: '6.1 MB',
        updatedAt: 'Coming soon',
    },
    {
        id: 'industrial-plug',
        category: 'Industrial Devices',
        title: 'Industrial Plug Catalog',
        fileType: 'PDF',
        fileSize: '7.5 MB',
        updatedAt: 'Coming soon',
    },
]

const ProductDataDownload = () => {
    return (
        <main className="product-data-download-page">
            <section className="product-data-download-header">
                <p className="title-font">Product Data Download</p>
                <h1 className="header-font">Catalog Product</h1>
            </section>

            <section className="catalog-download-section" aria-label="Catalog product downloads">
                <div className="catalog-toolbar">
                    <p className="subtitle-font">Mock catalog files are shown as placeholders until the real documents are ready.</p>
                </div>

                <div className="catalog-grid">
                    {mockCatalogs.map((catalog) => (
                        <article className="catalog-card" key={catalog.id}>
                            <div>
                                <span className="catalog-category">{catalog.category}</span>
                                <h2 className="header-font">{catalog.title}</h2>
                            </div>
                            <div className="catalog-meta">
                                <span>{catalog.fileType}</span>
                                <span>{catalog.fileSize}</span>
                                <span>{catalog.updatedAt}</span>
                            </div>
                            <button type="button" disabled>
                                Download
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default ProductDataDownload
