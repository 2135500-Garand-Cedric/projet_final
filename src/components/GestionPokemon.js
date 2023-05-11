import React from 'react';
import Titre from './Titre';
import Tableau from './Tableau';
import FormGestionPokemon from './FormGestionPokemon';
import axios from 'axios';


class GestionPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nom: '', type: '', pv: 0, cleApi: '', pokemons: [], idPokemon: 0, message: ''};

        this.ajouterPokemon = this.ajouterPokemon.bind(this);
        this.supprimerPokemon = this.supprimerPokemon.bind(this);
        this.modifierPokemon = this.modifierPokemon.bind(this);
    }
    
    afficherInput = (nom, type, pv, id, cleApi) => this.setState({nom: nom, type: type, pv: pv, idPokemon: id, cleApi: cleApi});

    effacerChamp = () => this.setState({nom: '', type: '', pv: 0, idPokemon: 0, cleApi: ''});

    componentDidMount() {
        axios.get('http://127.0.0.1/sw_h2023_ex04/pokemon')
            .then((response) => {
                const pokemons = response.data.pokemons;
                // On récupère les données reçues et on modifie le tableau dans l'état
                this.setState({pokemons : pokemons})
            })
    }

    supprimerPokemon(id, cleApi) {
        axios({
            method: 'DELETE',
            url: `http://127.0.0.1/sw_h2023_ex04/pokemon/${id}`,
            headers: {
                'Authorization': `Basic ${window.btoa(cleApi)}` 
            }
        })
        .catch((error) => {
            this.setState({message: "cle d'api incorrecte (suppression)"});
        })
        .then((resultat) => {
            if (resultat.status === 200) {
                const pokemonsRestants = this.state.pokemons.filter(pokemon => id !== pokemon.id);
                this.setState({pokemons: pokemonsRestants, message: ''});
                this.effacerChamp();
            }
        });
    }

    ajouterPokemon(nom, type, pv, cleApi) {
        axios({
            method: 'POST',
            url: 'http://127.0.0.1/sw_h2023_ex04/pokemon',
            data: {
                nom: nom,
                type: type,
                pv: pv
            },
            headers: {
                'Authorization': `Basic ${window.btoa(cleApi)}` 
            }
        })
        .catch((error) => {
            this.setState({message: "cle d'api incorrecte (ajout)"});
        })
        .then((resultat) => {
            if (resultat.status === 201) {
                let pokemon = {
                    id: resultat.data.id,
                    nom: resultat.data.nom,
                    type: resultat.data.type,
                    pv: resultat.data.pv
                };
                const pokemons = [...this.state.pokemons, pokemon];
                this.setState({pokemons: pokemons, message: ''});
                this.effacerChamp();
            }
        });
    }

    modifierPokemon(id, nom, type, pv, cleApi) {   
        axios({
            method: 'PUT',
            url: `http://127.0.0.1/sw_h2023_ex04/pokemon/${id}`,
            data:{
                nom: nom,
                type: type,
                pv: pv
            },
            headers: {
                'Authorization': `Basic ${window.btoa(cleApi)}` 
            }
        })
        .catch((error) => {
            this.setState({message: "cle d'api incorrecte (modification)"});
        })
        .then((resultat) => {
            if (resultat.status === 200) {
                let end = false;
                let index = 0;
                while(!end) {
                    if(this.state.pokemons[index].id === resultat.data.pokemon[0].id) {
                        end = true;
                    }
                    index++;
                }
                let pokemons = this.state.pokemons;
                pokemons[index-1].nom = resultat.data.pokemon[0].nom;
                pokemons[index-1].type = resultat.data.pokemon[0].type;
                pokemons[index-1].pv = resultat.data.pokemon[0].pv;
                this.setState({pokemons: pokemons, message: ''});
                this.effacerChamp();
            }
            
        });
    }

    render() {
        return (
            <div>
                <h1>Pokedex</h1>
                <FormGestionPokemon 
                    nomAffiche={this.state.nom} 
                    typeAffiche={this.state.type} 
                    pvAffiche={this.state.pv} 
                    cleApiAffiche={this.state.cleApi}
                    message={this.state.message}
                    modifierTextBox={this.afficherInput} 
                    supprimerPokemon={this.supprimerPokemon} 
                    ajouterPokemon={this.ajouterPokemon}
                    effacerChamp={this.effacerChamp}
                    modifierPokemon={this.modifierPokemon}
                    idPokemon={this.state.idPokemon}/>
                <Titre titre="Liste des Pokemons" />
                <Tableau pokemons={this.state.pokemons} fonction={this.afficherInput}/>
            </div>
        );
    }
}

export default GestionPokemon;