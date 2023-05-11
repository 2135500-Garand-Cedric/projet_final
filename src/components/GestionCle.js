import React from 'react';
import FormGestionCle from './FormGestionCle';
import axios from 'axios';


class GestionCle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {codeUsager: '', motDePasse: '', cleApi: '', reponse: ''};

        this.genererCle = this.genererCle.bind(this);
    }
    
    afficherInput = (codeUsager, motDePasse) => this.setState({codeUsager: codeUsager, motDePasse: motDePasse});

    effacerChamp = () => this.setState({codeUsager: '', motDePasse: ''});

    genererCle(codeUsager, motDePasse) {
        axios({
            method: 'PUT',
            url: 'http://127.0.0.1/sw_h2023_ex04/users',
            headers: {
                'Authorization': `Basic ${window.btoa(codeUsager.concat(" ", motDePasse))}` 
            }
        })
        .catch((error) => {
            this.setState({reponse: "Code d'utilisateur ou mot de passe invalide"});
        })
        .then((resultat) => {
            this.setState({reponse: resultat.data.reponse});
            this.effacerChamp();
        });
    }
    render() {
        return (
            <div id='gestionCle'>
                <FormGestionCle 
                    codeUsager={this.state.codeUsager} 
                    motDePasse={this.state.motDePasse} 
                    reponse={this.state.reponse}
                    modifierTextBox={this.afficherInput} 
                    genererCle={this.genererCle}
                    effacerChamp={this.effacerChamp}/>
            </div>
        );
    }
}

export default GestionCle;