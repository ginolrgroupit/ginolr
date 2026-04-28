import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './page/home/Home'
import MainLayout from './layout/MainLayout'
import About from './page/about/About'
import CompanyHistory from './page/about/CompanyHistory'
import QiaoxiMeaning from './page/about/QiaoxiMeaning'
import QualityProcess from './page/about/QualityProcess'
import Contact from './page/contact/Contact'
import ProductAll from './page/product/ProductAll'
import ProductList from './page/product/Product'
import ProductDetail from './page/product/Product-detail'
import ProductDataDownload from './page/product-data-download/ProductDataDownload'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/company-history" element={<CompanyHistory />} />
        <Route path="about/qiaoxi-meaning" element={<QiaoxiMeaning />} />
        <Route path="about/quality-process" element={<QualityProcess />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<ProductAll />} />
        <Route path="product-data-download" element={<ProductDataDownload />} />
        <Route path="product/:category_name/:group_id1" element={<ProductList />} />
        <Route path="product/:category_name/:group_id1/:product_id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}
