import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  openDropdown,
  closeDropdown,
} from "../../store/actionCreators/dropdown";

import { imgBtn, border } from "./Navbar.module.scss";

export default function NavBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { isDropdownOpen } = useSelector((state) => state.dropDown);

  function toggleDropdown(event) {
    event.stopPropagation();
    if (isDropdownOpen) {
      return dispatch(closeDropdown());
    }
    dispatch(openDropdown());
  }

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <h2 className='title is-5'>Todo List App</h2>
        </Link>

        <a
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navMenu'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navMenu' className='navbar-menu'>
        <div className='navbar-end'>
          {user ? (
            <>
              <Link className='navbar-item' to='/dashboard'>
                Dashboard
              </Link>
              <div className='navbar-item'>
                <figure className='image is-48x48'>
                  <img
                    src={user.photoURL}
                    alt=''
                    onClick={toggleDropdown}
                    className={`${imgBtn} ${isDropdownOpen ? border : ""}`}
                  />
                </figure>
              </div>
            </>
          ) : (
            <div className='navbar-item'>
              <Link to='/signin' className='button is-primary'>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
