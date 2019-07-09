import React from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../images/badge-header.svg';

import BadgesList from '../components/BadgesList';
import './styles/Badges.css';


class RickMorty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: {
                info: {},
                results: []
            },
            nextPage: 1
        };  
    }

    componentDidMount() {
        this.fetchCharacters();
    }
    
    fetchCharacters = async () => {
        this.setState({ loading: true, error: null });
    
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
            );
            const data = await response.json();
            data.results.map((result) => {
                result.firstName = result.name;
                result.twitter = result.name.replace(/ /g,'');
                result.avatarUrl = result.image;
                result.jobTitle = result.species + ' - ' + result.origin.name ;
            });
            this.setState({
                loading: false,
                data: {
                info: data.info,
                results: [].concat(this.state.data.results, data.results)
                },
                nextPage: this.state.nextPage + 1
            });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        return <React.Fragment>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={confLogo} alt="Logo" /> 
                    </div>
                </div>
            </div>
            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data.results} />
                    </div>
                </div>
            </div>
            {this.state.loading && <p className="text-center">Loading...</p>}

            {!this.state.loading && this.state.data.info.next && (
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <button className="btn btn-primary " onClick={() => this.fetchCharacters()}>Load More</button>
                    </div>
                </div>
            )}
        </React.Fragment>
    }
}

export default RickMorty;