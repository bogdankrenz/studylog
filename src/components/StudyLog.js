import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Log = props => (
    <tr>
        <td>{props.log.username}</td>
        <td>{props.log.headline}</td>
        <td>{props.log.description}</td>
        <td>{props.log.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.log._id}>
                <span className="icon">
                    <i className="fas fa-pen fa-lg"></i>
                </span>
            </Link>
            <a href="#" onClick={() => { props.deleteLog(props.log._id) }}>
                <span className="icon is-medium">
                    <i className="fas fa-trash fa-lg"></i>
                </span>
            </a>
        </td>
    </tr>
)

export default class StudyLog extends Component {
    constructor(props) {
        super(props);

        this.deleteLog = this.deleteLog.bind(this);

        this.state = { logs: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/topics/')
            .then(res => {
                this.setState({ logs: res.data });
            })
            .catch(err => console.log(err));
    }

    deleteLog(id) {
        axios.delete('http://localhost:5000/topics/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            logs: this.state.logs.filter(el => el._id !== id)
        });


    }

    logList() {
        return this.state.logs.map(log => {
            return <Log log={log} deleteLog={this.deleteLog} key={log._id} />;
        })
    }

    render() {
        return (
            <div>
                <div className="section is-medium">
                    <div className="container">
                        <h2 className="title">Here are the entrys so far</h2>
                        <div className="table-container">
                            <table className="table">
                                <thead className="thead">
                                    <tr>
                                        <th>Username</th>
                                        <th>Headline</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.logList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="section is-medium"></div>
                <div className="section is-medium"></div>
            </div>

        )
    }
}