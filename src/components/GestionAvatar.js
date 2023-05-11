import React from 'react';
import axios from 'axios';
import Avatar from './Avatar'


class GestionAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                const data = response.data.results[0];
                // On récupère les données reçues et on modifie le tableau dans l'état
                this.setState({data: data, isLoaded: true})
            })
    }

    changePerson = () => this.componentDidMount();

    render() {
        if(!this.state.isLoaded) {
            return (
                <div>En attente</div>
            );
        }

        return (
            <div>
                <Avatar picture={this.state.data.picture} name={this.state.data.name} fonction={this.changePerson}/>
            </div>
        );
    }
}

export default GestionAvatar;
