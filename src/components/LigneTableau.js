// Fichier Titre.js
import React from 'react';

class LigneTableau extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    afficherInfo = (event) => {
        this.props.fonction(this.props.pokemon.nom, this.props.pokemon.type, this.props.pokemon.pv, this.props.pokemon.id);
    }
    render() {
        return (
            <tr onClick={this.afficherInfo}>
                <td>{this.props.pokemon.id}</td>
                <td>{this.props.pokemon.nom}</td>
                <td>{this.props.pokemon.type}</td>
                <td>{this.props.pokemon.pv}</td>
            </tr>
        )
    }
}

export default (LigneTableau);