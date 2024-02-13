import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getUserProfile } from '../../redux/actions/userActions'
import { logout } from '../../redux/actions/authActions';

import '../../style/main.css';
import argentBankLogo from '../../assets/img/argentBankLogo.png';
import arrowRightFromBracket from '../../assets/svg/arrowRightFromBracket.svg';
import circleUser from '../../assets/svg/circleUser.svg';

function Nav() {
  // Récupération des données
  const isConnected = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.user.userData.firstname);

  // Initialisation des hooks Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fonction de déconnexion
  const logoutHandler = () => {
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate('/');

  }

  // Instructions de débogage pour afficher les valeurs dans la console
  console.log("firstName:", firstName);
  console.log("isConnected:", isConnected);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
      </Link>
      {isConnected ? (
        <div className='connected'>
          <Link to='/profile'>
            <img src={circleUser} className="icon" alt="user circle icon" />
            <p>{firstName}</p>
          </Link>
          <Link to='/' onClick={logoutHandler}>
            <img src={arrowRightFromBracket} className="icon" alt="arrow icon" />
            <p>Sign out</p>
          </Link>
        </div>
      ) : (
        <div className='not-connected'>
          <Link to='/login'>
            <img src={circleUser} className="icon" alt="user circle icon" />
            <p>Sign In</p>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;