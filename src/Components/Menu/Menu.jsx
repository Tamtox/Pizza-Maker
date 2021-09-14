//Styles
import './Menu.scss';
//Dependencies
import ReactDOM from 'react-dom';
import React,{ useRef,useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

function Menu(props) {
    function addToCart() {

    }
    return (
        <section className='menu page'>
            <div className='menu-list'>
                <div className='menu-list-item'>
                    <p className='menu-list-item-title'>123</p>
                    <img className='menu-list-item-image' src="" alt="" />
                    <button className='menu-list-item-cart hover button'>Add to Cart</button>
                    <p className='menu-list-item-price'>Details</p>
                </div>
            </div>
        </section>
    )
}
export default Menu