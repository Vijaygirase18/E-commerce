import React from 'react'
import Products from './products';

function Home() {
    return (
        <div className='home'>
            <div className="card text-bg-dark text-white border-0">
                <img src="/assests/mart3.jpg" className="card-img" alt="home background" height="650px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHEKOUT ALL NEW PRODUCTS COMEING....</p>

                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}
export default Home;
