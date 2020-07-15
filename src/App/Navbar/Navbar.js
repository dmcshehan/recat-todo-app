import React from "react";

export default function NavBar() {
  return (
    <nav class='navbar' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='https://bulma.io'>
          <h2 className='title is-5'>Todo List App</h2>
        </a>

        <a
          role='button'
          class='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navMenu'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navMenu' class='navbar-menu'>
        <div class='navbar-end'>
          <a class='navbar-item'>Documentation</a>
          <div class='navbar-item'>
            <div class='buttons'>
              <a class='button is-light'>Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
