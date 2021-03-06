import React from 'react';
import logo from '../logo.svg';
import {NavLink} from 'react-router-dom';


export default function Nav(){
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">

                <NavLink className="navbar-item" to="/" activeClassName="is-current" exact>Home</NavLink>
                <NavLink className="navbar-item" to="/about" activeClassName="is-current">About</NavLink>
                <NavLink className="navbar-item" to="/game" activeClassName="is-current">Game</NavLink>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                    More
                    </a>

                    <div className="navbar-dropdown">
                    <a className="navbar-item">
                        About
                    </a>
                    <a className="navbar-item">
                        Jobs
                    </a>
                    <a className="navbar-item">
                        Contact
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item">
                        Report an issue
                    </a>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    {/* <!-- <Login ></Login> --> */}
                    <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light" href="/login">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}