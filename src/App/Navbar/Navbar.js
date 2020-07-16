import React from "react";

export default function NavBar() {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <h2 className='title is-5'>Todo List App</h2>
        </a>

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
          <a className='navbar-item'>Documentation</a>
          <div className='navbar-item'>
            <div className='buttons'>
              <a className='button is-light'>Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
