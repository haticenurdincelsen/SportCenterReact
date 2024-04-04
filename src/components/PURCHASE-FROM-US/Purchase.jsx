import React from 'react';
import './purchase.css'

function PurchaseFromUs() {
    return (
        <div className="purchase">
            <div className="purchase-cards">
                <div className="card">
                    <img className='img' src="../src/assets/purchase1.jpg" alt="Plan 1" />
                    <p className="titles">Kettlebell / 5kg</p>
                    <p className="price">
                        <span className="original-price">$99</span>
                        <span className="discounted-price">/ $59.99</span>
                    </p>
                    
                    <div className="add">
                        <button>Add to Cart</button>
                        <img src="../src/cart-shopping-solid.svg" alt="icon" className="icons" />
                    </div>
                </div>
                <div className="card">
                    <img className='img' src="../src/assets/purchase2.jpg" alt="Plan 2" />
                    <p className="titles">Treadmill</p>
                    <p className="price">
                        <span className="original-price">$149</span>
                        <span className="discounted-price">/ $99.99</span>
                    </p>
                    
                    <div className="add">
                        <button>Add to Cart</button>
                        <img src="../src/cart-shopping-solid.svg" alt="icon" className="icons" />
                    </div>
                </div>
                <div className="card">
                    <img className='img' src="../src/assets/purchase3.jpg" alt="Plan 3" />
                    <p className="titles">Adjustable Dumbell</p>
                    <p className="price">
                        <span className="original-price">$199</span>
                        <span className="discounted-price">/ $89.99</span>
                    </p>
                    
                    <div className="add">
                        <button>Add to Cart</button>
                        <img src="../src/cart-shopping-solid.svg" alt="icon" className="icons" />
                    </div>
                </div>
                <div className="card">
                    <img  src="../src/assets/purchase4.jpg" alt="Plan 4" />
                    <p className="titles">Kettlebell / 3kg</p>
                    <p className="price">
                        <span className="original-price">$199</span>
                        <span className="discounted-price">/ $59.99</span>
                    </p>
                    
                    <div className="add">
                        <button>Add to Cart </button>
                        <img src="../src/cart-shopping-solid.svg" alt="icon" className="icons" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseFromUs;
