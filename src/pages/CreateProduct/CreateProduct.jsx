import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    quantity: '',
  })

  const navigate = useNavigate()

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/products`, formData)
      navigate('/products')
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  return (
    <div>
      <h1>Create a Product</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct
