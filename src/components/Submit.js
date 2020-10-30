import React, { useState } from 'react'

function Submit({
    grandTotal,
    extrasTotal,
    productTotal,
    shippingPrice,
    plopperCount,
    jigCount,
    spoonCount,
    biteMeCount,
    showBobsCount,
    beerCount
}) {
    const orders = [
        { "price": 25.99, "name": "   Whopper Plopper", "count": plopperCount },
        { "price": 20.99, "name": "   Spin Jig", "count": jigCount },
        { "price": 15.99, "name": "   Jiggin' Spoon", "count": spoonCount },
        { "price": 29.99, "name": "   Bite Me Shirt", "count": biteMeCount },
        { "price": 39.99, "name": "   Show Your Bobbers Shirt", "count": showBobsCount },
        { "price": 19.99, "name": "   Beer Opener", "count": beerCount }
    ]

    console.log(orders);
    return (
        <div>
            <h1 className="bg-success text-white text-center">🐠Submit🐠</h1>
            <ul className="list-group">
                {orders.filter(item => item.count > 0).map((item, i) =>
                    <li className="list-group-item"
                        key={i}
                        id={i}>
                        ({item.count})
                        {item.name}
                        <div>{(item.count)*(item.price)}</div>
                    </li>
                )}
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-right">Shipping ${shippingPrice}</li>
                <li className="list-group-item text-right">Order Subtotal ${Number((productTotal + extrasTotal + shippingPrice)).toFixed(2)}</li>
                <li className="list-group-item text-right">KY Sales Tax ${Number(((productTotal + extrasTotal + shippingPrice) * .06)).toFixed(2)}</li>
                <li className="list-group-item text-right">Grand Total ${Number((grandTotal).toFixed(2))}</li>
            </ul>
        </div>
    )
}

export default Submit
