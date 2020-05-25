import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'> 
      LOGO HERE
    </Link>
    <div className='options'>
      <Link className='option' to='/about'>
        ABOUT
      </Link>
      {
        currentUser ?
        <div className='option'>
          SIGN OUT
        </div>
        :
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      }
    </div>
  </div>
)

export default connect(mapStateToProps)(Header);