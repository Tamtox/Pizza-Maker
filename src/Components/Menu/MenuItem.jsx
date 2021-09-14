//Styles
import './MenuItem.scss';
//Dependencies
import ReactDOM from 'react-dom';
import React,{ useRef,useState } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { useParams,useHistory } from 'react-router';

function MenuItem(props) {
    const params = useParams();
    const history = useHistory();
    return (
        <section className='menu-item'>
            {params.item}
        </section>
    )
}
export default MenuItem