import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  async function getAllProducts() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/products/${productId}`)
      getAllProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  if (loading) {
    return <h2>Loading products...</h2>
  }

  return (
    <div>
      <h1>Product List</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div key={product._id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <p><strong>Title:</strong> {product.title}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p>
              <Link to={`/products/${product._id}`}>View Details</Link>
            </p>
            <button onClick={() => deleteProduct(product._id)}>Delete Product</button>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductList
