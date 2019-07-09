import React from 'react';

import heder from '../images/badge-header.svg'
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false,
            form: {
                firstName: '',
                lastName: '',
                jobTitle: '',
                email: '',
                twitter: '',
            },
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
        console.log(this.state);
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});
        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return <React.Fragment>
            <div className="BadgeNew__hero">
                <img className="BadgeNew__hero-image img-fluid" src={heder} alt="Logo"/>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} avatarUrl="https://secure.gravatar.com/avatar?id=avatar" email={this.state.form.email || 'Email'} />
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error}/>
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }
}

export default BadgeNew;