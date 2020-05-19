import './ProductList.css'
import React from 'react'
import products from '../../data/products'

export default (props) => {

    const rows = products.map(product =>{
        return(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
            </tr>
        )
    })

    return(
        <div className="productList">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço(U$)</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}