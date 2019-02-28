import React from 'react';

export default class PatientForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onSurnameChange = this.onSurnameChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: props.patient ? props.patient.name : '',
            surname: props.patient ? props.patient.surname : '',
            city: props.patient ? props.patient.city : '',


            error: ''
        };
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name: name }));
    }

    onSurnameChange(e) {
        const surname = e.target.value;
        this.setState(() => ({ surname: surname }));
    }

    onCityChange(e) {
        const city = e.target.value;
        this.setState(() => ({ city: city }));
    }


    onSubmit(e) {
        e.preventDefault();

        if (!this.state.name || !this.state.surname || !this.state.city ) {
            this.setState(() => ({ error: 'Please enter complete details!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitPatient(
                {
                    name: this.state.name,
                    surname: this.state.surname,
                    city: this.state.city,

                }
            );
        }
    }

    render() {
        return (
            <div >
                <p className="page-info">
                    {this.state.error && <p className='error'>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit} className='add-patient-form'>

                        <input type="text" placeholder="name" autoFocus
                               value={this.state.name}
                               onChange={this.onNameChange} />
                        <br />

                        <input type="text" placeholder="surname"
                               value={this.state.surname}
                               onChange={this.onSurnameChange} />
                        <br />

                        <textarea placeholder="city"
                                  value={this.state.city}
                                  onChange={this.onCityChange} />
                        <br />

                        <input type="date" placeholder='YYYY/MM/DD' format="MM'/'dd'/'y"
                               value={this.state.dob}
                               onChange={this.onDobChange} />
                        <br />
                        <button>Add Patient Details</button>
                    </form>
                </p>
            </div>
        );
    }
}