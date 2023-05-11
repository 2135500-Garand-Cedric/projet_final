import React from 'react';


class FormGestionPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    afficherCodeUsager = (event) => {
        this.props.modifierTextBox(event.target.value, this.props.motDePasse);
    }
    afficherMotDePasse = (event) => {
        this.props.modifierTextBox(this.props.codeUsager, event.target.value);
    }
    genererCle = (event) => {
        this.props.genererCle(this.props.codeUsager, this.props.motDePasse);
        this.props.effacerChamp();
    }
    render() {
        return (
            <div>
                <div>
                    <label>Code usager:</label>
                    <input 
                        value={this.props.codeUsager}
                        onChange={this.afficherCodeUsager}></input>
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input 
                        value={this.props.motDePasse}
                        onChange={this.afficherMotDePasse}></input>
                </div>
                <div>
                    <button onClick={this.genererCle}>Soumettre</button>
                </div>
                <div>
                    <h6>{this.props.reponse}</h6>
                </div>
            </div>
        );
    }
}

export default FormGestionPokemon;