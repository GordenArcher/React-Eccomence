import { useState } from "react"

const ProductsData = (props) => {
  return (
    <div>
        <div key={props.id} className="Items_container" >
            <img src={props.product_img} alt='product image' />
            <h2>{props.product_name}</h2>
            <p>${props.product_price}</p>
            <button
            onClick={() => props.handleAddToCartFunction(props.id)}
            >Add to Cart</button>

        </div>
    </div>
  )
}


export default ProductsData