const ViewCartProduct = (props) => {
    console.log(props);
  return (
    <div className="side_bar">
        <div className="close_btn">
            <button onClick={props.HideCartSideFunction}>
                <i className="bi bi-x"></i>
            </button>
        </div>
        <h2>Cart</h2>
        {/* Add Cart Items */}
        <p>No items in cart.</p>
    </div>
  )
}

export default ViewCartProduct