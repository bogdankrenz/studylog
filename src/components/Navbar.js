import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Menu from "../menu";


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar is-spaced is-info is-fixed-top" role="navigation" aria-label="main navigation" >
                <div className="navbar-brand">
                    <Link className="navbar-item has-text-weight-bold is-size-4 has-text-black-bis" to="/">
                        StudyLog
                    </Link>

                    <Link to="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item is-size-6" to="/logs">See Logs</Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Create User or Entry</a>
                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/user" >Create User</Link>
                                <Link className="navbar-item" to="/create">Create Entry</Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link className="button is-success">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link className="button is-success">Log in</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </nav>

        )
    }
}