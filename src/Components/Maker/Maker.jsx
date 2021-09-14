//Styles
import './Maker.scss';
//Dependencies
import ReactDOM from 'react-dom';
import React,{ useRef,useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import {useDispatch,useSelector} from 'react-redux';


function Maker(props) {
    const token = useSelector(state=>state.authSlice.token);
    async function load() {
        try{
            const users = await axios.request({
                method:'GET',
                url:`http://localhost:3001/api/users`,
                headers:{
                    'Authorization': `token ${123}`
                }
            })
            console.log(users)
        } catch(err) {
            alert(err)
        }
    }
    return (
        <section className='maker'>
            Under Construction
        </section>
    )
}
export default Maker