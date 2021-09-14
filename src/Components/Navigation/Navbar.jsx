//Styles
import './Navbar.scss';
//Dependencies
import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faBars,faHome} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
//Components
import Cart from './Cart';
import { authActions } from '../../Store/Store';


function Navbar(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLoggedIn = !!useSelector(state=>state.authSlice.token);
    //Logout
    function logout() {
        history.replace('/auth');
        dispatch(authActions.logout());
    }
    //Toggle cart
    const [toggleCart,setToggleCart] = useState(false);
    // Toggle auth menu
    const [toggleAuthMenu,setToggleAuthMenu] = useState(false);
    let authMenu = null
    if(toggleAuthMenu) {
        authMenu = (
            <div className='authMenu'>
                {isLoggedIn?
                <React.Fragment>
                    <NavLink className="nav-link hover-filter" activeClassName="active-nav-link" to="/profile">Profile</NavLink>
                    <p className='hover-filter' onClick={logout}>Logout</p>
                </React.Fragment>:
                <NavLink className="nav-link hover-filter" activeClassName="active-nav-link" to="/auth">Log In</NavLink>
                }
            </div>
        )
    }
    //Toggle links menu
    const [toggleLinksMenu,setToggleLinksMenu] = useState(false);
    let linksMenu = null;
    if(toggleLinksMenu) {
        linksMenu = (
            <div className='linksMenu'>
                <NavLink className="nav-link hover-filter" activeClassName="active-nav-link" to="/menu">Menu</NavLink>
                <NavLink className="nav-link hover-filter" activeClassName="active-nav-link" to="/maker">Maker</NavLink>
        </div>
        )
    }
    return (
        <header>
            <nav>
                <div className='navigation-main-full'>
                    <NavLink className="nav-link hover-filter home" activeClassName="active-nav-link" to="/home">Pizza Maker</NavLink>
                    <NavLink className="nav-link hover-filter" activeClassName="active-nav-link" to="/menu">Menu</NavLink>
                    <NavLink className="nav-link hover-filter" activeClassName="active-nav-link" to="/maker">Maker</NavLink>
                </div>
                <div className='navigation-main-mobile'>
                    <NavLink className="nav-link" activeClassName="active-nav-link" to="/home"><FontAwesomeIcon className='icon hover-filter' icon={faHome} /></NavLink>
                    <FontAwesomeIcon className='icon hover-filter' onClick={()=>setToggleLinksMenu(!toggleLinksMenu)} icon={faBars} />
                    {linksMenu}
                </div>
                <div className='navigation-misc'>
                    <div className='cart-misc hover' onClick={()=>setToggleCart(!toggleCart)}>
                        <FontAwesomeIcon className='icon 'icon={faShoppingCart} />
                        <p>1</p>
                    </div>
                    <FontAwesomeIcon className='icon hover-filter' onClick={()=>setToggleAuthMenu(!toggleAuthMenu)} icon={faUser} />
                </div>
                {authMenu}
            </nav>
            {toggleCart && <Cart setToggleCart={setToggleCart}/> }
        </header>
    )
}

export default Navbar