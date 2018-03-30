import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import Nav from "./Nav";
import {Events} from "../api/events";
import EventList from "./EventList";
import {userEventsList} from "../api/userEventsList";
// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Nav currentUser = {this.props.currentUser}/>
            </div>);
    }
}

export default withTracker(() => {
    return {
        currentUser:Meteor.user()
    };
})(App);
