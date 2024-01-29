import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/authActions.jsx';

import '../../style/main.css';

import argentBankLogo from '../../assets/img/argentBankLogo.png'
import arrowRightFromBracket from '../../assets/svg/arrowRightFromBracket.svg'
import circleUser from '../../assets/svg/circleUser.svg'


function Nav() {

  const isConnected = useSelector((state) => state.auth.token);
  const firstname = useSelector((state) => state.user.userData.firstname);

  const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }


  return (
    
    <nav className="main-nav">
      <Link to="/index.html" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src= { argentBankLogo }
          alt="Argent Bank Logo"
        />
      </Link>
      
      {isConnected ? (
                    <div className='connected'>
                        <Link to='/profile'>
                        <img src= { circleUser } className="icon" alt="user circle icon"/> 
                            <p>{firstname}</p>
                        </Link>
                        <Link to='/index.html' onClick={logoutHandler}>
                        <img src= { arrowRightFromBracket} className="icon" alt="arrow icon"/>
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/sign-in.html' >
                          <img src= { circleUser } className="icon" alt="user circle icon"/>                            
                          <p>Sign In</p>
                        </Link>
                    </div>
                )}
    </nav> 
  )
};
export default Nav;
