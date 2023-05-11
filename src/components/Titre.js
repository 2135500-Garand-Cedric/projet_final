// Fichier Titre.js
import React from 'react';

class Titre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <h3>{this.props.titre}</h3>
        )
    }
}

export default (Titre);