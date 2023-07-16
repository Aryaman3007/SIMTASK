import React from 'react'
import "./bestSeller.css"
import Card from './Card'
import { useState } from 'react'
import { products } from '../data'
import S1 from "../images/service-1.png"
import S2 from "../images/service-2.png"
import S3 from "../images/service-3.png"
import S4 from "../images/service-4.png"
import I1 from "../images/insta-1.jpg"
import I2 from "../images/insta-2.jpg"
import I3 from "../images/insta-3.jpg"
import I4 from "../images/insta-4.jpg"
import I5 from "../images/insta-5.jpg"
import I6 from "../images/insta-6.jpg"
import I7 from "../images/insta-7.jpg"
import I8 from "../images/insta-8.jpg"

const BestSeller = () => {

    const [buttons, setButtons] = useState([
        { id: 1, name: 'All', clicked: true },
        { id: 2, name: 'Nike', clicked: false },
        { id: 3, name: 'Adidas', clicked: false },
        { id: 4, name: 'Puma', clicked: false },
        { id: 5, name: 'Bata', clicked: false },
    ]);
    const [prevClickedId, setPrevClickedId] = useState(null);

    const handleClick = (id) => {
        setButtons((prevButtons) =>
            prevButtons.map((button) => {
                if (button.id === 1) {
                    return { ...button, clicked: false };
                } else if (button.id === id) {
                    return { ...button, clicked: true };
                } else if (button.id === prevClickedId) {
                    return { ...button, clicked: false };
                }
                return button;
            })
        );
        setPrevClickedId(id);
    };

    return (
        <div className='bs'>
            <p className="bs-title">Bestseller Products</p>
            <div className="brands">
                {buttons.map((button) => (
                    <button className='shoe-brand'
                        key={button.id}
                        style={{
                            backgroundColor: button.clicked ? '#e31e0cca' : 'white',
                            color: button.clicked ? 'white' : 'black',
                            transition: 'background-color 0.2s ease-in',
                        }}
                        onClick={() => handleClick(button.id)}
                    > {button.name}
                    </button>))}
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Card key={item.id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
            <div className="banner">
                <div className="b1">
                    <div className="b-desc">
                        <h5>Adidas Shoes</h5>
                        <h1>The Summer Sale Off 50%</h1>
                        <p>Shop Now <ion-icon name="arrow-forward-outline" aria-hidden="true" /></p>
                        <div className="b-line"></div>
                    </div>
                </div>
                <div className="b2">
                    <div className="b-desc">
                        <h5>Nike Shoes</h5>
                        <h1>Makes Yourself Keep Sporty</h1>
                        <p>Shop Now <ion-icon name="arrow-forward-outline" aria-hidden="true" /></p>
                        <div className="b-line"></div>
                    </div>
                </div>
            </div>
            <ul className="service-list">

                <li className="service-item">
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={S1} width="53" height="28" loading="lazy" alt="Service icon" />
                        </div>
                        <div>
                            <h3 className="card-title">Free Shiping</h3>
                            <p className="card-text">
                                All orders over <span>$150</span>
                            </p>
                        </div>

                    </div>
                </li>

                <li class="service-item">
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={S2} width="43" height="35" loading="lazy" alt="Service icon" />
                        </div>
                        <div>
                            <h3 className="card-title">Quick Payment</h3>
                            <p className="card-text">
                                100% secure payment
                            </p>
                        </div>

                    </div>
                </li>

                <li className="service-item">
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={S3} width="40" height="40" loading="lazy" alt="Service icon" />
                        </div>
                        <div>
                            <h3 className="card-title">Free Returns</h3>
                            <p className="card-text">
                                Money back in 30 days
                            </p>
                        </div>

                    </div>
                </li>

                <li className="service-item">
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={S4} width="40" height="40" loading="lazy" alt="Service icon" />
                        </div>
                        <div>
                            <h3 className="card-title">24/7 Support</h3>
                            <p className="card-text">
                                Get Quick Support
                            </p>
                        </div>

                    </div>
                </li>

            </ul>

            <div className="insta">
                <div className="insta-items">
                    <img src={I1} alt="" className="insta-img" />
                    <div className="overlay">
                        <ion-icon className="insta-logo" name="logo-instagram"/>
                    </div>
                </div>
                <div className="insta-items">
                    <img src={I2} alt="" className="insta-img" />
                    <div className="overlay">
                        <ion-icon className="insta-logo" name="logo-instagram"/>
                    </div>
                </div>
                <div className="insta-items">
                    <img src={I3} alt="" className="insta-img" />
                    <div className="overlay">
                        <ion-icon className="insta-logo" name="logo-instagram"/>
                    </div>
                </div>
                <div className="insta-items">
                    <img src={I4} alt="" className="insta-img" />
                    <div className="overlay">
                        <ion-icon className="insta-logo" name="logo-instagram"/>
                    </div>
                </div>
                <div className="insta-items">
                    <img src={I5} alt="" className="insta-img" />
                    <div className="overlay">
                        <ion-icon className="insta-logo" name="logo-instagram"/>
                    </div>
                </div>
                <div className="insta-items">
                    <img src={I6} alt="" className="insta-img" />
                    <div className="overlay">
                        <ion-icon className="insta-logo" name="logo-instagram"/>
                    </div>
                </div>
                <div className="insta-items">
                    <img src={I7} alt="" className="insta-img" />
                    <div className="overlay">
                        <ion-icon className="insta-logo" name="logo-instagram"/>
                    </div>
                </div>
                <div className="insta-items">
                    <img src={I8} alt="" className="insta-img" />
                    <div className="overlay">
                        <ion-icon className="insta-logo" name="logo-instagram"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BestSeller