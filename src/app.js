/* eslint-disable no-mixed-spaces-and-tabs */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const tableStyle = {
  border: '1px solid black',
  padding: '10px'
}

const fullTableStyle = {
  width: '103%'
}

const tableTitle = {
  textAlign: 'center'
}

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
        <h3 style={tableTitle}>
          <strong>PRODUCT QUERY TABLE</strong>
        </h3>
        <table style={fullTableStyle}>
          <thead style={tableStyle}>
            <tr>
              <th style={tableStyle}>PRODUCT ID</th>
              <th style={tableStyle}>PRODUCT NAME</th>
              <th style={tableStyle}>SUPPLIER ID</th>
              <th style={tableStyle}>CATEGORY ID</th>
              <th style={tableStyle}>QUANTITY PER UNIT</th>
              <th style={tableStyle}>UNIT PRICE</th>
              <th style={tableStyle}>UNITS IN STOCK</th>
              <th style={tableStyle}>UNITS ON ORDER</th>
              <th style={tableStyle}>REORDER LEVEL</th>
              <th style={tableStyle}>DISCONTINUED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableStyle}>
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
              <td style={tableStyle}>{productName}</td>
              <td style={tableStyle}>{supplierID}</td>
              <td style={tableStyle}>{categoryID}</td>
              <td style={tableStyle}>{quantityPerUnit}</td>
              <td style={tableStyle}>{unitPrice}</td>
              <td style={tableStyle}>{unitsInStock}</td>
              <td style={tableStyle}>{unitsOnOrder}</td>
              <td style={tableStyle}>{reorderLevel}</td>
              <td style={tableStyle}>{discontinued}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
