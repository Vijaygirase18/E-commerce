import React from 'react'
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Products() {
    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentmounted = true;
    useEffect(() => {
        const getproducts = async () => {
            setloading(true);
            const responce = await fetch("https://fakestoreapi.com/products")
            if (componentmounted) {
                setdata(await responce.clone().json());
                setfilter(await responce.json());
                setloading(false);
                console.log(filter);
            }
            return () => {
                componentmounted = false;

            }
        }

        getproducts();

    }, [])
    const Loading = () => {
        //     return (
        //         <>
        //             loading...
        //             <i className='fa-fa-spinner'></i>
        //         </>
        //     )
        // }

        <>

            <div className="col-md-3">
                <Skeleton height={350} />
                <Skeleton height={350} />
                <Skeleton height={350} />
                <Skeleton height={350} />
            </div>

        </>
    }

    const filterProduct = (cat) => {
        const updatesdList = data.filter((x) => x.category === cat);
        setfilter(updatesdList);

    }

    const Showproducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">


                    <button className="btn btn-outline-dark me-2" onClick={() => setfilter(data)}>All </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's clothing </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>WoMen's clothing </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>




                </div>
                {
                    filter.map((product) => {
                        return (
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4 " key={product.id}  >
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold"> ₹{product.price}</p>
                                        <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1><hr />
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : < Showproducts />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;
