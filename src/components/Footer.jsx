import React from 'react'

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column  */}
                    <div className="col-md-3 col-sm-6">
                        <h4>VG Mart</h4>
                        <ul className='list-unstyled'>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Press and Media</li>
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Support</h4>
                        <ul className='list-unstyled'>
                            <li>Merchant support</li>
                            <li>Help center</li>
                            <li>Hire a Partner</li>
                            <li>Shopify Community</li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Developer.</h4>
                        <ul className='list-unstyled'>
                            <li>Shopify.dev</li>
                            <li>API documentation</li>
                            <li>Dev Degree</li>
                            <li>Shopify Events</li>
                        </ul>
                    </div>
                    {/* column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Product</h4>
                        <ul className='list-unstyled'>
                            <li>Shop</li>
                            <li>Shop Pay</li>
                            <li>Shopify Plus</li>
                            <li>Shopify Fulfillment </li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom  */}
                <div className="footer-bottom">
                    <p className="text-center">
                        &copy;{new Date().getFullYear()} VG Mart App-All Rights Reserved
                            <i class="fa fa-facebook-official fa-lg p-2" aria-hidden="true"></i>
                            <i class="fa fa-instagram fa-lg p-2" aria-hidden="true"></i>
                            <i class="fa fa-youtube-play fa-lg p-2" aria-hidden="true"></i>
                            <i class="fa fa-linkedin-square fa-lg p-2" aria-hidden="true"></i>
                            <i class="fa fa-envelope fa-lg p-2" aria-hidden="true"></i>
                    
                    </p>

                </div>
            </div>
        </div>
    );
}
export default Footer;
