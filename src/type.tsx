export type NavMenu = 'home' | 'product' | 'about' | 'product-data-download' | 'contact'

export type Language = 'TH' | 'EN' | 'CN'

export type Company = 'CT' | 'GINOLR'

export interface Category {
    category_id: number
    category_name: string
    path: string
    group: Group[]
}

export interface Group {
    group_id: number
    group_name: string
    product: Product[]
    title?: string
}

export interface Product {
    product_id: number
    product_name: string
    img_path: string
    property?: string[]
    spec: Spec[]
}

export interface Spec {
    spec_id: number
    spec_name: string
    detail?: SpecDetail
    list: List[]
}

export interface List {
    list_id: number
    list_name: string
}

interface SpecDetail {
    name: string,
    category: string,
    material: string,
    color: string[],
    size: string,
    used: string,
    setup: string,
    spec_img: string
}
