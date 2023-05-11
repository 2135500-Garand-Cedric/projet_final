import React from 'react';


class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div onClick={this.props.fonction} id='avatar'>
                <img src={this.props.picture.large} alt="avatar"></img>
                <h2>{this.props.name.first} {this.props.name.last}</h2>
            </div>
        );
    }
}

export default Avatar;
