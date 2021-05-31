/* eslint-disable no-mixed-spaces-and-tabs */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

const App = () => {
  const [products, setproducts] = useState([])
  const [productName, setproductName] = useState('')
  const [supplierID, setsupplierID] = useState('')
  const [categoryID, setcategoryID] = useState('')
  const [quantityPerUnit, setquantityPerUnit] = useState('')
  const [unitPrice, setunitPrice] = useState('')
  const [unitsInStock, setunitsInStock] = useState('')
  const [unitsOnOrder, setunitsOnOrder] = useState('')
  const [reorderLevel, setreorderLevel] = useState('')
  const [discontinued, setdiscontinued] = useState('')

  const productsList = async () => {
    const { data } = await axios.get('/api/products')
    setproducts(data)
  }

  useEffect(() => {
    productsList()
  }, [])

  const handleChange = (value) => {
    products.map((product) => {
      if (+value === product.productID) {
        setproductName(product.productName)
        setsupplierID(product.supplierID)
        setcategoryID(product.categoryID)
        setquantityPerUnit(product.quantityPerUnit)
        setunitPrice(product.unitPrice)
        setunitsInStock(product.unitsInStock)
        setunitsOnOrder(product.unitsOnOrder)
        setreorderLevel(product.reorderLevel)
        setdiscontinued(product.discontinued)
      }
    })
  }
  console.log(products)

  return (
    <section className='section'>
      <div className='container is-fluid'>
        <table>
          <caption>
            <strong>PRODUCT QUERY TABLE</strong>
          </caption>
          <thead>
            <tr>
              <th>PRODUCT ID</th>
              <th>PRODUCT NAME</th>
              <th>SUPPLIER ID</th>
              <th>CATEGORY ID</th>
              <th>QUANTITY PER UNIT</th>
              <th>UNIT PRICE</th>
              <th>UNITS IN STOCK</th>
              <th>UNITS ON ORDER</th>
              <th>REORDER LEVEL</th>
              <th>DISCONTINUED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='select'>
                  <select
                    onChange={(e) =>
                      handleChange(e.target.value)
                    }>
                    {products.map((product) => (
                      <option
                        key={product.productID}
                        value={product.productID}>
                        {product.productID}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
              <td>{productName}</td>
              <td>{supplierID}</td>
              <td>{categoryID}</td>
              <td>{quantityPerUnit}</td>
              <td>{unitPrice}</td>
              <td>{unitsInStock}</td>
              <td>{unitsOnOrder}</td>
              <td>{reorderLevel}</td>
              <td>{discontinued}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
