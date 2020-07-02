import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class CreateLog extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeHeadline = this.onChangeHeadline.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            headline: "",
            description: "",
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    });
                }
            })
            .catch(err => console.log(err));
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeHeadline(e) {
        this.setState({
            headline: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const log = {
            username: this.state.username,
            headline: this.state.headline,
            description: this.state.description,
            date: this.state.date
        }

        console.log(log);

        axios.post('http://localhost:5000/topics/add', log)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        window.location = "/logs";
    }

    onCancel(e) {
        e.preventDefault();

        window.location = "/logs"
    }


    render() {
        return (
            <div className="section is-medium">
                <div className="container">
                    <h2 className="title is-success">Create a new Entry</h2>
                    <h3 className="subtitle">Choose a user and create a new entry</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <div className="select">
                                    <select ref="userInput"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}>
                                        {
                                            this.state.users.map(user => {
                                                return <option
                                                    key={user}
                                                    value={user}>{user}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Headline</label>
                            <div className="control has-icons-left">
                                <input type="text"
                                    required
                                    className="input is-rounded"
                                    value={this.state.headline}
                                    onChange={this.onChangeHeadline} />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-newspaper"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Description</label>
                            <textarea
                                required
                                className="textarea"
                                placeholder="What did you learn today?"
                                value={this.state.description}
                                onChange={this.onChangeDescription} />
                        </div>
                        <div className="field">
                            <label className="label">Date:</label>
                            <div className="control has-icons-left">
                                <Datepicker
                                    className="input is-rounded"
                                    selected={this.state.date}
                                    onChange={this.onChangeDate} />
                                <span className="icon is-small is-left">
                                    <i className="far fa-calendar-alt"></i>
                                </span>
                            </div>
                        </div>


                        <div className="field is-grouped">
                            <div className="control">
                                <button type="submit" className="button is-link is-outlined">
                                    <span className="icon is-small">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span>Submit</span>
                                </button>
                            </div>
                            <div className="control">
                                <button
                                    onClick={this.onCancel}
                                    className="button is-danger is-outlined">
                                    <span>Cancel</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-times"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}