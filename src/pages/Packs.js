import React from 'react';
import { Link } from 'react-router-dom';

export const Packs = (props) => {
    return (
        <div id="register-page" className="full-page">
            <div className="container">
                <div className="packs-row">
                    {props.packs ? props.packs.map(counter => <Pack key={counter.id} mycounter={counter}></Pack>) : null}
                </div>
            </div>
        </div>
    );
}


export const Pack = (props) => {
    return (
        <div className="pack">
            <h3>{props.mycounter.name}</h3>
            <div className="pack-price">
                <h6>{props.mycounter.price}</h6>
                <p>website/month</p>
            </div>
            <div className="pack-about">
                <p>Check and test the platform to see how it works.</p>
            </div>
            <button><Link to="/purchase">Get started</Link></button>
            <div className="pack-properties">
                <ul>
                    {props.mycounter.features ? props.mycounter.features.map(feature => <li key={feature.id}> {feature.feature}</li>) : null}
                </ul>
            </div>
        </div>
    )
}