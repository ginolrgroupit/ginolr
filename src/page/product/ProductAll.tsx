import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Category } from '../../type'
import './ProductAll.css'

const LANDING_IMG_PATH = '/product-landing-img/'

const ProductAll = () => {
    const navigate = useNavigate()
    const { t } = useTranslation(['productCategory', 'home'])
    const productData = (t('data', { ns: 'productCategory', returnObjects: true }) || []) as Category[]

    const categoryList = useMemo(() => {
        return productData
            .filter((category) => category.category_name && category.path)
            .map((category) => ({
                ...category,
                productCount: category.group?.reduce((total, group) => total + (group.product?.length ?? 0), 0) ?? 0,
            }))
    }, [productData])

    return (
        <div className="product-all-page">
            <section className="product-all-hero">
                <h1 className="header-font">{t('product_all.title', { ns: 'home' })}</h1>
                <p className="subtitle-font">{t('product_all.subtitle', { ns: 'home' })}</p>
            </section>

            <section className="product-category-grid" aria-label="Product categories">
                {categoryList.map((category) => (
                    <button
                        key={category.path}
                        className="product-category-card"
                        type="button"
                        onClick={() => navigate(`/product/${category.path}/all`)}
                    >
                        <div className="product-category-image">
                            <img
                                src={`${LANDING_IMG_PATH}${category.path}.png`}
                                alt={category.category_name}
                                loading="lazy"
                                onError={(event) => {
                                    event.currentTarget.style.display = 'none'
                                }}
                            />
                        </div>
                        <div className="product-category-content">
                            <h2 className="title-font">{category.category_name}</h2>
                            <p className="subtitle-font">
                                {category.productCount} {t('product_all.product_count', { ns: 'home' })}
                            </p>
                            <span>{t('product_all.view', { ns: 'home' })}</span>
                        </div>
                    </button>
                ))}
            </section>
        </div>
    )
}

export default ProductAll
