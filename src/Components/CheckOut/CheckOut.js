import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import generator from "generate-password";
import './CheckOut.css'
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import swal from 'sweetalert';
import useAuth from './../../Hooks/UseAuth';

const CheckOut = () => {
    const { user } = useAuth();
    const [displayCoupon, setDisplayCoupon] = useState(false);
    const history = useHistory();
    const [pay, setPay] = useState("cash")
    const [pass, setPass] = useState();
    const [cart, setCart] = useState([]);
    const savedCart = getStoredCart();

    useEffect(() => {
        const keys = Object.keys(savedCart);
        fetch('https://wicked-wizard-56509.herokuapp.com/packages/byKeys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    console.log(cart);
    const generatePassword = () => {
        const pwd = generator.generate({
            length: 10,
            lowercase: false,
            uppercase: true,
            numbers: true,
            symbols: false
        });
        setPass(pwd);
    }

    const { register, reset, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        const orderDate = today.toLocaleDateString("en-US", options);
        data.paymentMethod = { pay }
        data.orderStatus = "Pending"
        data.orderKey = { pass }
        data.orderDate = orderDate
        data.item = { cart }
        fetch('https://frozen-ocean-73745.herokuapp.com/orders', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(orderInfo => {
                if (orderInfo.insertedId) {
                    swal({
                        title: "Successfully Placed Order!",
                        icon: "success",
                        button: "OK!",
                    });
                    clearTheCart()
                    history.push(`/order-received/${orderInfo.insertedId}`)
                }
            })
        console.log(data);
      


    };
   
    return (
        <div className="bg-eee py-4 custom-margin">
            <div className="container rounded bg-white shadow py-4 px-4">
                <h1 className="py-2">Check Out</h1>
                {cart.length > 0 ? <div>
                    <div className="shadow border-3 border-top border-info mb-4">
                        <p className="p-3">Have a Coupon? <span onClick={() => { displayCoupon === false ? setDisplayCoupon(true) : setDisplayCoupon(false) }} className="text-danger cursor">Click here to enter your code!</span></p>
                    </div>
                    {displayCoupon && <div className="border rounded row shadow py-4 mx-0 my-3">
                        <p className="ps-3">If you have a coupon code, please apply it below.</p>
                        <div className="col-12 col-md-6 px-4">
                            <input type="text" name="" id="" placeholder="Coupon Code" className="form-control" />
                        </div>
                        <div className="col-12 col-md-6">
                            <button className="btn custom-btn py-2 px-3 shadow-none rounded-pill">Apply Coupon</button>
                        </div>
                    </div>}
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h4 className="text-center">Billing Details</h4>
                            <div className="d-flex justify-content-center">
                                <form className="mt-4 w-75">
                                    <div className="mb-2">
                                        <label className="mb-2">Your Name*</label> <br />
                                        <input
                                            className="form-control shadow-none"
                                            type="text"
                                            {...register("name", { required: true })}
                                            defaultValue={user?.displayName}
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="mb-2">Address*</label> <br />
                                        <input
                                            className="form-control shadow-none"
                                            type="text"
                                            {...register("address", {
                                                required: true
                                            })}
                                            placeholder="Salia Bakpur, Banaripara"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="mb-2">City*</label> <br />
                                        <input
                                            className="form-control shadow-none"
                                            type="text"
                                            {...register("city", {
                                                required: true
                                            })}
                                            placeholder="Barishal"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="mb-2">Zip Code*</label> <br />
                                        <input
                                            className="form-control shadow-none"
                                            type="text"
                                            {...register("zip", {
                                                required: true
                                            })}
                                            placeholder="8530"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="mb-2">Country*</label> <br />
                                        <input
                                            className="form-control shadow-none"
                                            type="text"
                                            {...register("country", {
                                                required: true
                                            })}
                                            defaultValue="Bangladesh"
                                            placeholder="Bangladesh"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="mb-2">Phone (Optional)</label> <br />
                                        <input
                                            className="form-control shadow-none"
                                            type="number"
                                            {...register("phone")}
                                            placeholder="01XXXXXXXXX"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="mb-2">Email*</label> <br />
                                        <input
                                            className="form-control shadow-none"
                                            type="email"
                                            {...register("email", {
                                                required: true
                                            })}
                                            value={user?.email}
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-2">Special Requirements (Optional)</label> <br />
                                        <textarea
                                            className="form-control shadow-none"
                                            type="text"
                                            {...register("des")}
                                            placeholder="Special Requirements"
                                            rows="5"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h4 className="text-center">Additional Information</h4>
                            <div className="d-flex justify-content-center">
                                <form className="mt-4 w-75">
                                    <div className="mb-3">
                                        <label className="mb-2">Order Notes (optional)</label> <br />
                                        <textarea
                                            className="form-control shadow-none"
                                            type="text"
                                            {...register("desOptional")}
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                            rows="5"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <h4 className="my-3">Your Order</h4>
                    <table className="table my-4">
                        <tbody>
                            <tr>
                                <th className="bg-secondary text-white">Products</th>
                                <th className="bg-secondary text-white text-center">Subtotals</th>
                            </tr>
                            {
                                cart.map(cartItem => <tr>
                                    <td>
                                        {cartItem.name} <br />
                                        All Inclusive Twin Room <br />
                                        Dates: November 6, 2021 to November 13, 2021 <br />
                                        People: 1 adults, 0 children <br />
                                        Rooms: 1
                                    </td>
                                    <td className="text-center v-align">${cartItem.price}</td>
                                </tr>)
                            }
                            <tr>
                                <th className="bg-secondary text-white">Tax</th>
                                <td className="text-center">$00</td>
                            </tr>
                            <tr>
                                <th className="bg-secondary text-white">Totals</th>
                                <td className="text-center fw-bold">$240</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="border rounded my-4 p-3">
                        <div className="form-check">
                            <input className="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setPay("cash")} />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Cash Payment
                            </label>
                            {pay === "cash" && <p className="border shadow-sm p-2 rounded w-75 mt-2">You can pay in cash when you visited our site!</p>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setPay("bank")} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Direct Bank Transfer
                            </label>
                            {pay === "bank" && <p className="border shadow-sm p-2 rounded w-75 mt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setPay("card")} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Credit Card (Stripe)
                            </label>
                            {pay === "card" && <div className="border shadow-sm p-3 rounded w-75 mt-2">
                                <p>Pay with your credit card via Stripe. TEST MODE ENABLED. In test mode, you can use the card number 4242424242424242 with any CVC and a valid expiration date or check the Testing Stripe documentation for more card numbers.</p>
                                <div className="row">
                                    <div className="col-12 my-3">
                                        <label htmlFor="cardBumber" className="my-1">Card Number *</label> <br />
                                        <input type="number" name="cardNumber" id="" placeholder="1234 1234 1234 1234" className="form-control shadow-none" />
                                    </div>
                                    <div className="col-6 my-3">
                                        <label htmlFor="cardBumber" className="my-1">Expiry Date *</label> <br />
                                        <input type="number" name="cardNumber" id="" placeholder="MM / YY" className="form-control shadow-none" />
                                    </div>
                                    <div className="col-6 my-3">
                                        <label htmlFor="cardBumber" className="my-1">Card Code (CVC) *</label> <br />
                                        <input type="number" name="cardNumber" id="" placeholder="CVC" className="form-control shadow-none" />
                                    </div>
                                </div>
                                <div className="form-check col-12 mt-3">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Save payment information to my account for future purchases.
                                    </label>
                                </div>
                            </div>}
                        </div>
                        <hr />
                        < div className="text-end">
                            <Link onClick={handleSubmit(onSubmit)}>
                                <button onClick={generatePassword} className="btn shadow-none custom-btn py-3 px-4 rounded-pill px-3 py-2">PLACE ORDER</button>
                            </Link>
                        </div>
                    </div>
                </div> :
                    <div className="w-75 mx-auto mt-3 text-center">
                        <div className="alert alert-danger py-5 fs-4" role="alert">
                            Your Cart Empty! Select Package From <Link to="/packages" className="primary-text text-decoration-none alert-hover">Our Packages!</Link>
                        </div>
                    </div>}
            </div>
        </div >
    );
};

export default CheckOut;

/*


*/