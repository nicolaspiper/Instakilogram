import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            name: "",
            birthday: new Date(),
            website: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    sign_up(){
        if(this.props.formType === "signup"){
            return (
                <div>
                <label>Email:
                    <input type="text" onChange={this.update("email")} value={this.state.email}/>
                </label>
                <br/>
                <label>Name:
                    <input type="text" onChange={this.update("name")} value={this.state.name}/>
                </label>
                <br/>
                <label>Birthday:
                    <input type="date" onChange={this.update("birthday")} value={this.state.birthday}/>
                </label>
                <br/>
                <label>Website:
                    <input type="text" onChange={this.update("website")} value={this.state.website}/>
                </label>
                </div>
            );
        }
    }

    render() {

        return(
            <div className="session_form_box">
                <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                    <label>Username:
                        <input type="text" 
                        onChange={this.update("username")}
                        value={this.state.username}/>
                    </label>
                    <br/>
                    <label>Password:
                        <input type="text"
                        onChange={this.update("password")}
                        value={this.state.password} />
                    </label>
                    {this.sign_up()}
                    <input type="submit" value={this.props.formType}/>
                </form>
                <br />
                <Link to={`/${this.props.navType}`}>{this.props.navType}</Link>
            </div>
        )
    }
}

export default SessionForm;