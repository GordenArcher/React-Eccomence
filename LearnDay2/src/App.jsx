import { useState, useEffect } from 'react'
import './App.css'
import Loader from './components/loader'
import ProductsData from './components/productsData'
import ViewCartProduct from './components/ViewCartProduct'

function App() {

  const [products, setProducts] = useState([])
  const [showLoader, setShowLoader] = useState(true)
  const [toggleCartSide, setToggleCartSide] = useState(false)

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

  function handleAddToCartFunction(id) {
    alert(id)
  }

  const showCartSideFunction = () => {
    setToggleCartSide(true)
  }

  const HideCartSideFunction = () => {
    setToggleCartSide(false)
  }

  return (
    <>
    <div className="App">
      <div className="head">
        <header className="App-header">
          <h1>Product List</h1>

          <p>This is a simple product list application.</p>
        </header>

        <div className="cartBag">
          <button
          onClick={showCartSideFunction}
          >
            <i className="bi bi-cart"></i>
          </button>
          <h3 className='tooltip'>View Cart</h3>
        </div>
      </div>

      <div>
          {showLoader == true ? <Loader /> : null}
          {!showLoader && (
            <div className='itmes_rendered'>
              {products.map((product, index) => {
                return (
                  <ProductsData
                    key={index}
                    {...product}
                    handleAddToCartFunction={handleAddToCartFunction}
                  />
                )
              } )}   
            </div>
          )} 
        </div>
    </div>

    {toggleCartSide && <ViewCartProduct 
    toggleCartSide={toggleCartSide} 
    HideCartSideFunction={HideCartSideFunction} 
    />}
    
    </>
  )
}

export default App
