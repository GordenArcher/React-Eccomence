import { useState, useEffect } from 'react'
import './App.css'
import Loader from './components/loader'
import ProductsData from './components/productsData'

function App() {

  const [products, setProducts] = useState([])
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    fetch('https://betafullstack.pythonanywhere.com/products')
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      return res.json()
    })
    .then(data => {
      setProducts(data)
      setShowLoader(false)
    }
    )
    .catch(error => console.error('Error:', error))
  }, [])

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        
        <div>
          {showLoader == true ? <Loader /> : null}
          {!showLoader && (
            <div className='itmes_rendered'>
              {products.map(product => <ProductsData {...product} /> )}   
            </div>
          )} 
        </div>
      </header>
    </div>


    {/* <Loader />  */}
    
    </>
  )
}

export default App
