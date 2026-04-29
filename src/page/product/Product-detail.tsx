import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Breadcrumb, Descriptions, type DescriptionsProps } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import type { Category } from '../../type'

import './Product-detail.css'
import lazada_icon from '../../assets/logo/lazada.webp'

const show_detail_nav = ['spec', 'standart'] as const
type SHOW_DETAIL_NAV = typeof show_detail_nav[number]

const ProductDetail = () => {
    const navigate = useNavigate()
    const { category_name, group_id1, product_id } = useParams()
    const { t } = useTranslation(['productCategory', 'home'])

    const product_data = (t('data', { ns: 'productCategory', returnObjects: true }) || []) as Category[]
    const [spec_selected, setSpec_selected] = useState<number>(1)
    const [show_detail, setShow_detail] = useState<SHOW_DETAIL_NAV>('spec')

    const categoryObj = useMemo(() => {
        return product_data.find(e => e.path === category_name)
    }, [category_name, product_data])

    const groupObj = useMemo(() => {
        return categoryObj?.group?.find(e => e.group_id === Number(group_id1))
    }, [categoryObj, group_id1])

    const productObj = useMemo(() => {
        return groupObj?.product.find(e => e.product_id === Number(product_id))
    }, [groupObj, product_id])

    useEffect(() => {
        const firstSpecId = productObj?.spec?.[0]?.spec_id
        if (firstSpecId && !productObj?.spec?.some(e => e.spec_id === spec_selected)) {
            setSpec_selected(firstSpecId)
        }
    }, [productObj, spec_selected])

    const specObj = useMemo(() => {
        return productObj?.spec?.find(e => e.spec_id === spec_selected)
    }, [productObj, spec_selected])

    const left_description_items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: t('product_detail.labels.product_name', { ns: 'home' }),
            children: specObj?.detail?.name
        },
        {
            key: '2',
            label: t('product_detail.labels.category', { ns: 'home' }),
            children: specObj?.detail?.category
        },
        {
            key: '3',
            label: t('product_detail.labels.material', { ns: 'home' }),
            children: specObj?.detail?.material
        },
        {
            key: '4',
            label: t('product_detail.labels.color', { ns: 'home' }),
            children: specObj?.detail?.color?.map(e => <div key={e} className={`color ${e}`} />)
        }
    ]

    const right_description_items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: t('product_detail.labels.size', { ns: 'home' }),
            children: specObj?.detail?.size
        },
        {
            key: '2',
            label: t('product_detail.labels.usage', { ns: 'home' }),
            children: specObj?.detail?.used
        },
        {
            key: '3',
            label: t('product_detail.labels.installation', { ns: 'home' }),
            children: specObj?.detail?.setup
        }
    ]

    const [imgShowPath, setImgShowPath] = useState<string>('')
    const [isZooming, setIsZooming] = useState(false)
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - left) / width) * 100
        const y = ((e.clientY - top) / height) * 100
        setZoomPos({ x, y })
    }

    useEffect(() => {
        setImgShowPath(specObj?.detail?.spec_img ? `/spec_img/${specObj.detail.spec_img}/01.webp` : '')
    }, [specObj?.detail?.spec_img])

    const handleSpecSelected = (spec_id: number) => {
        if (spec_id === spec_selected) return
        setSpec_selected(spec_id)
    }

    const productNavBtnHandle = (navKey: SHOW_DETAIL_NAV) => {
        setShow_detail(navKey)
    }

    return (
        <div className='product-detail-page'>
            <section className="product-info-section">
                <div className="menu">
                    <Breadcrumb
                        items={[
                            { title: t('product_detail.breadcrumb_product', { ns: 'home' }) },
                            {
                                title: <a onClick={() => navigate(`/product/${categoryObj?.path}/${groupObj?.group_id}`)}>{groupObj?.group_name}</a>
                            },
                            { title: productObj?.product_name }
                        ]}
                    />
                </div>
                <div className="section-content">
                    <div
                        className='img-container main-img-zoom-container'
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsZooming(true)}
                        onMouseLeave={() => setIsZooming(false)}
                    >
                        <img
                            className='product-show'
                            src={imgShowPath}
                            style={{ opacity: isZooming ? 0 : 1, transition: 'opacity 0.2s' }}
                            alt={productObj?.product_name || 'product'}
                        />
                        {isZooming && (
                            <div
                                className="zoom-overlay"
                                style={{
                                    backgroundImage: `url(${imgShowPath})`,
                                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                                }}
                            />
                        )}
                    </div>

                    <div className='product-detail'>
                        <div className="detail">
                            <h3>{productObj?.product_name}</h3>
                            <p>{groupObj?.title}</p>
                        </div>
                        <h3>{t('product_detail.products', { ns: 'home' })}</h3>
                        <div className="product-list-container">
                            {productObj?.spec?.map(e => (
                                <div
                                    key={e.spec_id}
                                    onClick={() => handleSpecSelected(e.spec_id)}
                                    className={`spec-list ${spec_selected === e.spec_id ? 'activate' : ''}`}
                                >
                                    {e.spec_name}
                                </div>
                            ))}
                        </div>

                        {specObj?.list && specObj.list.length !== 0 && (
                            <>
                                <h3>{t('product_detail.specifications', { ns: 'home' })}</h3>
                                <div className='spec-list-container'>
                                    {specObj?.list.map(e => (
                                        <div key={e.list_name} className='spec-list' style={{ cursor: 'default' }}>
                                            {e.list_name}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        <h3>{t('product_detail.features', { ns: 'home' })}</h3>
                        <div className="property-list-container">
                            {productObj?.property?.map((e, index) => (
                                <p key={index} className='property-list'> - {e}</p>
                            ))}
                        </div>
                    </div>

                    <div className='img-list'>
                        <div className='img-container'>
                            {[1, 2, 3, 4].map((num) => {
                                const imgPath = `/spec_img/${specObj?.detail?.spec_img}/0${num}.webp`
                                return (
                                    <img
                                        key={`${specObj?.detail?.spec_img}-${num}`}
                                        className={imgShowPath === imgPath ? 'active' : ''}
                                        src={imgPath}
                                        onClick={() => setImgShowPath(imgPath)}
                                        onLoad={(e) => { e.currentTarget.style.display = 'block' }}
                                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                                        alt={`${productObj?.product_name || 'product'} ${num}`}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    <div className='shop-container'>
                        <button className='shop-btn shopee'>
                            <svg stroke="currentColor" fill="white" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z" />
                            </svg>
                            Shopee
                        </button>
                        <button className='shop-btn lazada'>
                            <img src={lazada_icon} alt="lazada" />
                            Lazada
                        </button>
                    </div>
                </div>
            </section>

            <section className="product-spec-section">
                <div className='header'>
                    <input name='product-detail-nav' id='spec' type='radio' checked={show_detail === 'spec'} onChange={() => { productNavBtnHandle('spec') }} />
                    <label htmlFor="spec" className='nav-btn'>{t('product_detail.product_specs', { ns: 'home' })}</label>
                    <div className='hover' />
                </div>
                <div className='product-description-container'>
                    <Descriptions
                        labelStyle={{ width: '120px', minWidth: '120px' }}
                        contentStyle={{ whiteSpace: 'pre-wrap' }}
                        items={left_description_items}
                        className='left-description ant-description'
                        column={1}
                    />
                    <Descriptions
                        labelStyle={{ width: '150px', minWidth: '150px' }}
                        items={right_description_items}
                        className='right-description ant-description'
                        column={1}
                    />
                </div>
            </section>

            <section className="product-recommend-section">
                <h4 className='recommend-label'>{t('product_detail.recommend', { ns: 'home' })}</h4>
                <div className='recommend-card-container'>
                    <div className='recommend-card'>
                        <div className='img-container'></div>
                        <div className='content' style={{ WebkitBoxOrient: 'vertical' }}>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <div className='footer'>
                            <div className="color-container">
                                <div className='color-list red' />
                                <div className='color-list white' />
                                <div className='color-list black' />
                            </div>
                            <button className='view-product-btn'>
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
