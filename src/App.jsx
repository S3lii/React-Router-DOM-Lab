import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import Homepage from './pages/Homepage/Homepage'
import ProductList from './pages/ProductList/ProductList'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import CreateProduct from './pages/CreateProduct/CreateProduct'

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/new-product" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
