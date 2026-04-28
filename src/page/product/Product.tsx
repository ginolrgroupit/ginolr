import './Product.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANDING_IMG_PATH = '/product-landing-img/';
const PRODUCT_IMG_PATH = '/product_img/';

const ProductList = () => {
    const navigate = useNavigate()
    const { category_name, group_id1 } = useParams()
    const { t } = useTranslation(['productCategory', 'home'])

    // 1. ใช้ State เก็บ URL รูปภาพที่ "พร้อมแสดงผล" แยกออกมา
    const [currentImg, setCurrentImg] = useState<string>("");
    const [fadeStatus, setFadeStatus] = useState(false);

    // 2. ดักจับการเปลี่ยน category_name
    useEffect(() => {
        // เมื่อเปลี่ยนหัวข้อ ให้สั่งจางหายก่อน (ถ้าต้องการ fade-out) 
        // หรือรีเซ็ตสถานะโหลดทันที
        setFadeStatus(false);
        
        // สร้าง URL รูปใหม่
        const newImgUrl = `${LANDING_IMG_PATH}${category_name}.png`;
        setCurrentImg(newImgUrl);
    }, [category_name]);

    const product_data = (t('data', { ns: 'productCategory', returnObjects: true }) || []) as any[]
    const categoryObj = useMemo(() => product_data.find(e => e.path === category_name), [category_name, product_data])

    const productObj = useMemo(() => {
        if (!categoryObj || !categoryObj.group) return []
        if (group_id1 === 'all') {
            return categoryObj.group?.flatMap((group: any) =>
                group.product?.map((p: any) => ({ ...p, group_id: group.group_id })) || []
            ) || []
        }
        const targetId = Number(group_id1)
        const currentGroup = categoryObj.group?.find((e: any) => e.group_id === targetId)
        return currentGroup?.product?.map((p: any) => ({ ...p, group_id: currentGroup.group_id })) ?? []
    }, [categoryObj, group_id1])

    return (
        <div className="product-page">
            <section className='promote-img-section'>
                <div className='promote-img' style={{ backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
                    {/* 3. ใช้ key ผูกกับชื่อรูป เพื่อให้ React สร้าง Image Element ใหม่ทุกครั้งที่เปลี่ยนหมวด */}
                    <img
                        key={currentImg} 
                        src={currentImg}
                        alt={categoryObj?.category_name}
                        onLoad={() => setFadeStatus(true)}
                        style={{
                            opacity: fadeStatus ? 3 : 0,
                            transition: 'opacity 1.2s ease-in-out',
                            width: '100%',
                            display: 'block'
                        }}
                    />
                </div>
                <div className="landing-footer">
                    <h2 className='title-font category-header'>
                        {categoryObj?.category_name}
                    </h2>
                </div>
            </section>

            <section className='product-list-container'>
                <aside className='group-list'>
                    <h3 className={group_id1 === 'all' ? 'activate' : ''} onClick={() => navigate(`/product/${category_name}/all`)}>
                        {t('product_list.all', { ns: 'home' })}
                    </h3>
                    {categoryObj?.group?.map((group: any) => (
                        <h3
                            key={group.group_id}
                            className={group.group_id === Number(group_id1) ? 'activate' : ''}
                            onClick={() => navigate(`/product/${category_name}/${group.group_id}`)}
                        >
                            {group.group_name}
                        </h3>
                    ))}
                </aside>

                <div className='product-list'>
                    {productObj?.map((e: any) => (
                        <div
                            key={`${category_name}-${e.group_id}-${e.product_id}`}
                            className='product-card'
                            onClick={() => navigate(`/product/${category_name}/${e.group_id ?? group_id1}/${e.product_id}`)}
                        >
                            <img className='product-img' src={`${PRODUCT_IMG_PATH}${e.img_path}.png`} alt={e.product_name} />
                            <div className='product-name-container'>
                                <h3>{e.product_name}</h3>
                                <h4>{e.subtitle || ''}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ProductList
