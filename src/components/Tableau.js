import React from "react";
import LigneTableau from "./LigneTableau";

class Tableau extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons : [],
        }
    }

    render() {
        const lignesTableau = this.props.pokemons.map(pokemon => (<LigneTableau pokemon={pokemon} key={pokemon.id} fonction={this.props.fonction}/>));

        return (
            <table className="PokemonsTable">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Type</th>
                    <th>PV</th>
                </tr>
                </thead>
                <tbody>
                    {lignesTableau}
                </tbody>
            </table>
        );
    }
}

export default (Tableau);
