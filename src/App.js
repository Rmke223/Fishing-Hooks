import React, { useState } from 'react'
import Products from './components/Products'
import Extras from './components/Extras'
import Shipping from './components/Shipping'
import Submit from './components/Submit'
import Fish from './img/fish.png'
import Shark from './img/shark.png'
function App() {
  const [plopperCount, setPlopperCount] = useState(0)
  const [jigCount, setJigCount] = useState(0)
  const [spoonCount, setSpoonCount] = useState(0)
  const [biteMeCount, setBiteMeCount] = useState(0)
  const [showBobsCount, setShowBobsCount] = useState(0)
  const [beerCount, setBeerCount] = useState(0)
  const [productTotal, setProductTotal] = useState(0)
  const [extrasTotal, setExtrasTotal] = useState(0)
  const [grandTotal, setGrandTotal] = useState(0)
  const [shippingPrice, setShippingPrice] = useState(0)
  const [isShipped, setIsShipped] = useState(false)
  const [currentPage, setCurrentPage] = useState('products');
  const Tabs = [
    { "text": "Products" },
    { "text": "Extras" },
    { "text": "Shipping" },
    { "text": "Submit" }
  ]
  return (
    <div className="container-fluid bg-danger">
      <div className="row">
        <div className="col-3 text-center">
          <div className="row justify-content-center">
            <img src={Shark} className="img-fluid" />
          </div>
          <div class="btn-group-vertical">
            {Tabs.map((item, i) =>
              <button
                key={i}
                className="btn-block btn-primary my-4"
                onClick={() => setCurrentPage(item.text.toLowerCase())}>
                {item.text}
              </button>
            )}
          </div>
        </div>
        <div className="col-9 mb-4">
        {currentPage === 'products' && 
            <Products
              setProductTotal={setProductTotal}
              productTotal={productTotal}
              setPlopperCount={setPlopperCount}
              plopperCount={plopperCount}
              setJigCount={setJigCount}
              jigCount={jigCount}
              setSpoonCount={setSpoonCount}
              spoonCount={spoonCount}
            />
          }
          {currentPage === 'extras' && 
            <Extras
              productTotal={productTotal}
              extrasTotal={extrasTotal}
              setExtrasTotal={setExtrasTotal}
              biteMeCount={biteMeCount}
              setBiteMeCount={setBiteMeCount}
              showBobsCount={showBobsCount}
              setShowBobsCount={setShowBobsCount}
              beerCount={beerCount}
              setBeerCount={setBeerCount}
            />
          }
          {currentPage === 'shipping' && 
            <Shipping 
              productTotal={productTotal}
              extrasTotal={extrasTotal}
              grandTotal={grandTotal}
              setGrandTotal={setGrandTotal}
              shippingPrice={shippingPrice}
              setShippingPrice={setShippingPrice}
              isShipped={isShipped}
              setIsShipped={setIsShipped}
            />
          }
          {currentPage === 'submit' && 
            <Submit 
            grandTotal={grandTotal}
            extrasTotal={extrasTotal}
            productTotal={productTotal}
            shippingPrice={shippingPrice}
            plopperCount={plopperCount}
            jigCount={jigCount}
            spoonCount={spoonCount}
            biteMeCount={biteMeCount}
            showBobsCount={showBobsCount}
            beerCount={beerCount}
            />
          }
        </div>
      </div>
      <div className="row justify-content-center">
        <img className="img" src={Fish} />
      </div>
    </div>
  )
}
export default App
