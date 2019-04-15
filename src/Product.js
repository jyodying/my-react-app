import React from "react"

function Product(props) {
    return (
        <div className="product">
            <h3 style={{ display: props.product.name ? "block" : "none" }}>Name: {props.product.name}</h3>
            <p style={{ color: !props.product.price && "#888" }}>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
            <hr />
        </div>
    )
}

export default Product