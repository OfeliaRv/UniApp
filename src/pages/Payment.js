// import React, { Component } from 'react';
// // import { Router, Switch, Route } from "react-router-dom";
// // import { createBrowserHistory } from 'history';
// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe('pk_test');
// const express = require('express');
// const app = express();
// const stripe = require('stripe')('sk_test');
// // const history = createBrowserHistory({ forceRefresh: true });

// const Payment = () => {

//     app.post('/payment', async (req, res) => {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: [
//                 {
//                     price_data: {
//                         currency: 'usd',
//                         product_data: {
//                             name: 'T-shirt',
//                         },
//                         unit_amount: 2000,
//                     },
//                     quantity: 1,
//                 },
//             ],
//             mode: 'payment',
//             success_url: 'http://http://localhost:3000/payment',
//             cancel_url: 'http://http://localhost:3000/payment',
//         });

//         res.json({ id: session.id });
//     });

//     app.listen(3000, () => console.log(`Listening on port ${3000}!`));
//     // render(){
//     //     return (
//     //         <button role="link">
//     //             Checkout
//     //         </button>
//     //     );
//     // }
// }

// export default Payment;
