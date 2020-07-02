import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ""
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username
        }

        console.log(newUser)

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            username: ''
        });
    }

    render() {
        return (
            <div >
                <div className="section is-medium">
                    <div className="container">
                        <h3 className="title">Create New User</h3>
                        <form onSubmit={this.onSubmit}>

                            <div className="field has-addons">
                                <div className="control has-icons-left">
                                    <input className="input"
                                        placeholder="Username"
                                        type="text"
                                        required
                                        value={this.state.username}
                                        onChange={this.onChangeUsername} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>

                                <div className="control">
                                    <input type="submit" value="Create User" className="button is-link is-outlined" />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="section is-medium"></div>
                <div className="section"></div>
                <div className="section"></div>
            </div>
        )
    }
}