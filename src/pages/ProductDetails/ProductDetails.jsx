import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import axios from 'axios'

function ProductDetails() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  async function getProduct() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching product details:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProduct()
  }, [productId])

  if (loading) {
    return <h2>Loading product details...</h2>
  }

  if (!product) {
    return <h2>Product not found.</h2>
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Title: {product.title}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <br />
      <Link to="/products">Back to Products</Link>
    </div>
  )
}

export default ProductDetails
