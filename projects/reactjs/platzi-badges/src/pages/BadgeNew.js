import React from 'react';

import heder from '../images/badge-header.svg'
import './styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
                ... this.state.form,
                [e.target.name]: e.target.value,
            },
        });
        console.log(this.state);
    }

    render() {
        return <div>
            <Navbar />
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={heder} alt="Logo"/>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} avatarUrl="https://secure.gravatar.com/avatar?id=avatar" />
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default BadgeNew;