import React, { useState } from 'react'

function Products({ 
    setProductTotal, 
    productTotal, 
    setPlopperCount, 
    plopperCount, 
    setJigCount, 
    jigCount,
    setSpoonCount,
    spoonCount }) {

    const plopperPrice = 25.99
    const plopperTotal = Number((plopperPrice * plopperCount).toFixed(2))

    const jigPrice = 20.99
    const jigTotal = Number((jigPrice * jigCount).toFixed(2))

    const spoonPrice = 15.99
    const spoonTotal = Number((spoonPrice * spoonCount).toFixed(2))

    const subTotal = Number((plopperTotal + jigTotal + spoonTotal).toFixed(2))
    const stateTax = Number((subTotal * .06).toFixed(2))
    const grandTotal = Number((subTotal + Number(stateTax)).toFixed(2))
    setProductTotal(subTotal)

    const Products = [
        {
            "name": "Whopper Plopper",
            "price": 25.99,
            "minus": ()=>setPlopperCount(prevPlopperCount =>prevPlopperCount - 1),
            "plus": ()=>setPlopperCount(prevPlopperCount =>prevPlopperCount + 1),
            "count": plopperCount,
            "total": plopperTotal
        },
        {
            "name": "Spin Jig",
            "price": 20.99,
            "minus": ()=>setJigCount(prevjig => prevjig - 1),
            "plus": ()=>setJigCount(prevjig => prevjig + 1),
            "count": jigCount,
            "total": jigTotal
        },
        {
            "name": "Jiggin' Spoon",
            "price": spoonPrice,
            "minus": ()=>setSpoonCount(prevSpoon => prevSpoon - 1),
            "plus": ()=>setSpoonCount(prevSpoon => prevSpoon + 1),
            "count": spoonCount,
            "total": spoonTotal
        },
    ]

    return (
        <div>
            <h1 className="bg-success text-white text-center">🐟Products🐟</h1>
            <ul className="list-group">
                {Products.map((item, i) =>
                    <li key={i} id={i} className="list-group-item d-flex justify-content-between text-center">{item.name}({item.price})
                    <div className="d-flex align-items-center">
                            <button onClick={item.minus} className="btn-fluid btn-success">-</button>
                            <p className="align-self-center"><b>{item.count}</b></p>
                            <button onClick={() => item.plus()} className="btn-fluid btn-success">+</button>
                        </div>
                        <p>${item.total}</p>
                    </li>
                )}

            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-right">Order Subtotal ${subTotal}</li>
                <li className="list-group-item text-right">KY Sales Tax ${stateTax}</li>
                <li className="list-group-item text-right">Grand Total ${grandTotal}</li>
            </ul>
        </div>
    )
}

export default Products