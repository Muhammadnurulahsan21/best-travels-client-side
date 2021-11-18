import React, { useEffect, useState } from 'react';
import './Cart.css'
import img from '../../img/pcard.jpg'
import paypal from '../../img/paypal.png'
import venmo from '../../img/venmo.png'
import pay from '../../img/pay.png'
import { Link } from 'react-router-dom';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import { ButtonGroup } from 'react-bootstrap';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const savedCart = getStoredCart();
    useEffect(() => {
        const keys = Object.keys(savedCart);
        fetch('https://frozen-ocean-73745.herokuapp.com/packages/byKeys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, [savedCart])
    // console.log(cart);
    const handleRemove = (key) => {
        removeFromDb(key)
    }
    return (
        <div className="bg-eee py-4 custom-margin">
            <div className="container rounded bg-white shadow py-4 px-4">
                <h1 className="py-2">Cart</h1>
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th className="col-6">Products</th>
                            <th className="col-2">Price</th>
                            <th className="col-2">Quantity</th>
                            <th className="col-2">Subtotal</th>
                            <th className="col-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => <tr>
                            <td className="col-7">
                                <div className="row align-items-center">
                                    <div className="col-4 py-0 px-1">
                                        <img src={img} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-8">
                                        <p className="m-0">{item.name}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="col-2 text-center v-align">$ {item.price}</td>
                            <td className="col-2 text-center v-align">2</td>
                            <td className="col-2 text-center v-align">$240</td>
                            <td className="col-2 text-center v-align">
                                <button onClick={() => handleRemove(item.key)} className="btn btn-outline-danger shadow-none fw-bold px-2 py-0">X</button>
                            </td>
                        </tr>)
                        }
                        {cart.length === 0 && <tr>
                            <td colSpan="5">
                                <div className="container text-center">
                                    <div className="alert alert-danger" role="alert">
                                        No items in your Cart. Please Select a Package From <Link to="/packages" className="primary-text fw-bold text-decoration-none alert-hover">Our Packages!</Link>
                                    </div>
                                </div>
                            </td>
                        </tr>}
                    </tbody>
                    <tfoot className="text-center">
                        <tr>
                            <td colspan="2">
                                <div className="d-flex">
                                    <input type="text" name="" id="" className="form-control w-25 me-2 shadow-none" />
                                    <button className="btn shadow-none custom-btn px-3 py-2 rounded-pill">Apply Coupon</button>
                                </div>
                            </td>
                            <td className="fw-bold">Subtotals:</td>
                            <td className="fw-bold">$240</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div className="row align-items-center">
                    <div className="col-12 col-md-5">
                        <div className="col-12 mx-2 bg-paypal text-center my-2 py-3 rounded">
                            <img src={paypal} alt="" />
                        </div>
                        <div className="col-12 mx-2 bg-primary text-center my-2 py-3 rounded">
                            <img src={venmo} alt="" />
                        </div>
                        <div className="col-12 mx-2 bg-light border text-center my-2 fs-4 py-3 rounded">
                            <img src={pay} alt="" /> Pay Later
                        </div>
                    </div>
                    <div className="col-12 col-md-2 fw-bold fs-4 text-center">
                        - OR -
                    </div>
                    <div className="col-12 col-md-5">
                        <h3 className="my-3">Cart Total</h3>
                        <table className="table border rounded">
                            <tbody>
                                <tr>
                                    <th className="bg-secondary text-white">Subtotals</th>
                                    <td className="text-center">$240</td>
                                </tr>
                                <tr>
                                    <th className="bg-secondary text-white">Delivery</th>
                                    <td className="text-center">$00</td>
                                </tr>
                                <tr>
                                    <th className="bg-secondary text-white">Totals</th>
                                    <td className="text-center fw-bold">$240</td>
                                </tr>
                            </tbody>
                        </table>
                        {cart.length > 0 && <div className="text-center my-3">
                            <Link to="/check-out">
                                <ButtonGroup className="btn shadow-none custom-btn px-3 py-2 rounded-pill">PROCEED TO CHECKOUT</ButtonGroup>
                            </Link>
                        </div>}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Cart;