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
                    <input type="text" 
                    onChange={this.update("email")} 
                    value={this.state.email} 
                    placeholder="Email"/>
                <br/>
                    <input type="text" 
                    onChange={this.update("name")} 
                    value={this.state.name} 
                    placeholder="Name"/>
                <br/>
                </div>
            );
        }
    }

    account_text(){
        if(this.props.formType === "signup"){
            return (<p>Have an account? <Link to={`/${this.props.navType}`}>Login</Link></p>);
        } else {
            return (<p>Don't have an account? <Link to={`/${this.props.navType}`}>Sign up</Link></p>)
        }
    }

    formTypeText() {
        if(this.props.formType === "signup") {
            return("Sign up")
        } else {
            return ("Login")
        }
    }

    render() {

        return(
            <div className="session-form-box">
                <h1>InstaKilogram</h1>
                <form onSubmit={this.handleSubmit}>
                <h1>{this.formTypeText()}</h1>
                        <input type="text" 
                        onChange={this.update("username")}
                        value={this.state.username}
                        placeholder="Username"/>
                    <br/>
                        <input type="text"
                        onChange={this.update("password")}
                        value={this.state.password} 
                        placeholder="Password"/>
                        {this.sign_up()}
                    <br/>
                    <input type="submit" value={this.formTypeText()} onSubmit={this.handleSubmit}/>
                </form>
                <div className="alt-form-link-div">
                    {this.account_text()}
                </div>
            </div>
        )
    }
}

export default SessionForm;