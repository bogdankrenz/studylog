import React, { Component } from 'react'


export default class footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer is-small is-fixed-bottom has-background-info">
                    <div className="content has-text-centered">
                        <p className="has-text-light">
                            Made with <strong
                                className="has-text-light">React</strong> and <strong className="has-text-light">Bulma</strong> by <a
                                    href="https://twitter.com/ullicrow"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="has-text-light">Bogdan Krenz</a>.
                        </p>
                    </div>
                </footer>
            </div>

        )
    }
}