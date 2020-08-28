import React, { Component } from 'react';

export default class Library extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.renderActivity = this.renderActivity.bind(this);
    }

    renderActivity(activity) {
        return (
            <li className="activity">
                <div className="activity__info">
                    <div className="activity__title-container">
                        <div className="activity__title">{activity.title}</div>
                    </div>
                </div>

                <div className="activity__description">
                    <h6 className="activity__description-title">Activity Description</h6>
                    <p>{activity.description}</p>
                </div>

            </li>
        )
    }

    render() {
        return (
            <ul>
                {this.renderActivity({'title': 'Hiking', 'description': 'This will be some physical exertion, make sure you bring a hat and a water bottle'})}
                {this.renderActivity({'title': 'Rafting', 'description': 'Rafting you will be in the sun a lot so make sure you bring sunscreen and don\'t forget your lifejacket'})}
                {this.renderActivity({'title': 'Fishing', 'description': 'You could be here for a while make sure you bring some music and beer'})}
            </ul>
        )
    }
}