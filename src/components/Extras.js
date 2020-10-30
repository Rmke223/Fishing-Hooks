import React, { useState } from 'react'

function Extras({
    productTotal,
    extrasTotal,
    setExtrasTotal,
    setBiteMeCount,
    biteMeCount,
    setShowBobsCount,
    showBobsCount,
    setBeerCount,
    beerCount,
}) {
    const biteMePrice = 29.99
    const showBobsPrice = 39.99
    const beerPrice = 19.99
    const biteMeTotal = Number((biteMeCount * 22.99).toFixed(2))
    const showBobsTotal = Number((showBobsCount * 22.99).toFixed(2))
    const beerTotal = Number((beerCount * 22.99).toFixed(2))
    const extraTotal = Number((biteMeTotal + showBobsTotal + beerTotal).toFixed(2))
    setExtrasTotal(extraTotal)
    const Extras = [
        {
            "name": "Bite-Me Shirt",
            "price": biteMePrice,
            "minus": () => setBiteMeCount(prevBiteMeCount => prevBiteMeCount - 1),
            "plus": () => setBiteMeCount(prevBiteMeCount => prevBiteMeCount + 1),
            "count": biteMeCount,
            "total": biteMeTotal
        },
        {
            "name": "Show your Bobbers Shirt",
            "price": showBobsPrice,
            "minus": () => setShowBobsCount(prevShowBobsCount => prevShowBobsCount - 1),
            "plus": () => setShowBobsCount(prevShowBobsCount => prevShowBobsCount + 1),
            "count": showBobsCount,
            "total": showBobsTotal
        },
        {
            "name": "Beer Opener",
            "price": beerPrice,
            "minus": () => setBeerCount(prevBeerCount => prevBeerCount - 1),
            "plus": () => setBeerCount(prevBeerCount => prevBeerCount + 1),
            "count": beerCount,
            "total": beerTotal
        }
    ]
    return (
        <div>
            <h1 className="bg-success text-center text-white">🎣Extras🎣</h1>
            <ul className="list-group">
                {
                    Extras.map((item, i) =>
                        <li
                            id={i}
                            key={i}
                            className="list-group-item d-flex justify-content-between text-center"
                        >{item.name}({item.price})
                    <div className="d-flex align-items-center">
                                <button onClick={item.minus} className="btn-fluid btn-success">-</button>
                                <p className="align-self-center"><b>{item.count}</b></p>
                                <button onClick={() => item.plus()} className="btn-fluid btn-success">+</button>
                            </div>
                            <p>${item.total}</p></li>
                    )}
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-right">Extra's Subtotal ${extraTotal}</li>
                <li className="list-group-item text-right">Order Subtotal ${Number((extraTotal + productTotal).toFixed(2))}</li>
                <li className="list-group-item text-right">KY Sales Tax ${Number(((extraTotal + productTotal)*.06).toFixed(2))}</li>
                <li className="list-group-item text-right">Grand Total ${Number((((extraTotal + productTotal)*.06)+(extraTotal + productTotal)).toFixed(2))}</li>
            </ul>
        </div>
    )
}

export default Extras
