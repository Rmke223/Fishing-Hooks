import React, { useState }from 'react'

function Shipping({
    setGrandTotal,
    grandTotal,
    productTotal,
    extrasTotal,
    shippingPrice,
    setShippingPrice,
    setIsShipped,
    isShipped
})
{
    const bothTotal = Number((productTotal + extrasTotal).toFixed(2))
    const grandsTotal = Number((((shippingPrice + bothTotal)*.06)+(shippingPrice + bothTotal)).toFixed(2))
    setGrandTotal(grandsTotal)
    const Shippers = [
        {
        "handler": ()=>setShippingPrice(prevShippingPrice => (prevShippingPrice*0) + 15),
        "name": "UPS Ground", 
        "price": 15
    },
        {
        "handler": ()=>setShippingPrice(prevShippingPrice => (prevShippingPrice*0) + 50),
        "name": "UPS Next Day Air", 
        "price": 50
    },
        {
        "handler": ()=>setShippingPrice(prevShippingPrice => (prevShippingPrice*0) + 0),
        "name": "Postal Service", 
        "price": 0
    }
    ]
    function test(){
        console.log("rerererere");
    }
    return (
        <div>
            <h1 className="bg-success text-center text-white">📦Shipping📦</h1>
            <ul className="list-group">
                {Shippers.map((item, i)=>
                    <li className="list-group-item"
                    onClick={item.handler}
                    key={i}
                    id={i}>
                        {item.name}(${item.price})
                    </li>
                )}
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-right">Shipping Subtotal ${shippingPrice}</li>
                <li className="list-group-item text-right">Order Subtotal ${Number(bothTotal + shippingPrice).toFixed(2)}</li>
                <li className="list-group-item text-right">KY Sales Tax ${Number((bothTotal + shippingPrice)*.06).toFixed(2)}</li>
                <li className="list-group-item text-right">Grand Total ${grandsTotal}</li>
            </ul>
        </div>
    )
}

export default Shipping
