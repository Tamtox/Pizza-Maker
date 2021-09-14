//Styles
import './Cart.scss';
//Dependencies
import ReactDOM from 'react-dom';
import React,{ useRef,useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';


function Cart(props) {
    return (
        <div className={`backdrop opacity-transition page`}>
            <section className='cart opacity-transition box-shadow'>
                <div className='cart-items'>
                    <div className='cart-item'>123333333333333333333333333</div>
                </div>
                <div className='cart-total'>{`Total:$${122}`}</div>
                <button onClick={()=>{props.setToggleCart()}} className='close-cart button hover'>Close</button>
            </section>
        </div>
    )
}

export default Cart
