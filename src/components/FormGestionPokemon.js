import React from 'react';


class FormGestionPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    afficherNom = (event) => {
        this.props.modifierTextBox(event.target.value, this.props.typeAffiche, this.props.pvAffiche, this.props.idPokemon, this.props.cleApiAffiche);
    }
    afficherType = (event) => {
        this.props.modifierTextBox(this.props.nomAffiche, event.target.value, this.props.pvAffiche, this.props.idPokemon, this.props.cleApiAffiche);
    }
    afficherPv = (event) => {
        this.props.modifierTextBox(this.props.nomAffiche, this.props.typeAffiche, event.target.value, this.props.idPokemon, this.props.cleApiAffiche);
    }
    afficherCleApi = (event) => {
        this.props.modifierTextBox(this.props.nomAffiche, this.props.typeAffiche, this.props.pvAffiche, this.props.idPokemon, event.target.value);
    }
    supprimerPokemon = (event) => {
        this.props.supprimerPokemon(this.props.idPokemon, this.props.cleApiAffiche);
    }
    enregistrer = (event) => {
        if (this.props.idPokemon === 0) {
            this.props.ajouterPokemon(this.props.nomAffiche, this.props.typeAffiche, this.props.pvAffiche, this.props.cleApiAffiche);
        } else {
            this.props.modifierPokemon(this.props.idPokemon, this.props.nomAffiche, this.props.typeAffiche, this.props.pvAffiche, this.props.cleApiAffiche);
        }
    }
    effacerChamp = (event) => {
        this.props.effacerChamp();
    }
    render() {
        return (
            <div>
                <div>
                    <label>Nom:</label>
                    <input 
                        value={this.props.nomAffiche}
                        onChange={this.afficherNom}></input>
                </div>
                <div>
                    <label>Type:</label>
                    <input 
                        value={this.props.typeAffiche}
                        onChange={this.afficherType}></input>
                </div>
                <div>
                    <label>Pv:</label>
                    <input 
                        value={this.props.pvAffiche}
                        onChange={this.afficherPv}></input>
                </div>
                <div>
                    <label>Cle Api:</label>
                    <input 
                        value={this.props.cleApiAffiche}
                        onChange={this.afficherCleApi}></input>
                </div>
                <div>
                    <button onClick={this.effacerChamp}>Nouveau</button>
                    <button onClick={this.supprimerPokemon}>Supprimer</button>
                    <button onClick={this.enregistrer}>Enregistrer</button>
                </div>
                <h5>{this.props.message}</h5>
            </div>
        );
    }
}

export default FormGestionPokemon;