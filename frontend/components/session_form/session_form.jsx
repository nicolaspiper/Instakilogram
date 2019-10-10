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
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
    }
    
    componentWillUnmount() {
        this.props.clearErrors();
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

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = {username: "demoUser", password: "password"};
        this.props.demoUser(user);
    }

    sign_up(){
        if(this.props.formType === "signup"){
            return (
                <div id="sign-in-inputs">
                    <input type="text" 
                    onChange={this.update("email")} 
                    value={this.state.email} 
                    placeholder="Email"/>
                    <input type="text" 
                    onChange={this.update("name")} 
                    value={this.state.name} 
                    placeholder="Name"/>
                </div>
            );
        }
    }

    sign_up_bottom() {
        if (this.props.formType === "signup") {
            return("By signing up you agree to pass me through preliminary screening.")
        }
    }

    account_text(){
        if(this.props.formType === "signup"){
            return (<p>Have an account? <Link className="link" to={`/${this.props.navType}`}>Log in</Link></p>);
        } else {
            return (<p>Don't have an account? <Link className="link" to={`/${this.props.navType}`}>Sign up</Link></p>)
        }
    }

    formTypeText() {
        if(this.props.formType === "signup") {
            return("Sign up")
        } else {
            return ("Login")
        }
    }

    formMessageType(){
        if (this.props.formType === "signup") {
            return ("Sign up to see photos and videos from your friends and famous scientists.")
        }
    }

    errorsList() {
        return (
        <ul>
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
            ))}
        </ul>
        )

    }

    render() {

        return(
            <div className="master-form-div">
                <div className="centered-box">
                    <div className="session-form-box">
                        <div className="logo">
                            <Link to="/" className="title-icon"><h1 className="form-title">InstaKilogram</h1></Link>
                        </div>
                        <div className="anon-form">
                            <div className="form-message">
                                {this.formMessageType()}
                            </div>
                            <div>
                                <button onClick={this.handleDemoSubmit} id="demo-submit-button">Demo User</button>
                            </div>

                        </div>
                        <form onSubmit={this.handleSubmit} className="anon-form">
                            <div className="form-separator">
                                <div id="form-separator-decoration"></div>
                                <div className="form-separator-content">or</div>
                                <div id="form-separator-decoration"></div>
                            </div>
                            <div>
                                <input type="text" 
                                onChange={this.update("username")}
                                value={this.state.username}
                                placeholder="Username"/>
                            </div>
                            <div>
                                <input type="password"
                                onChange={this.update("password")}
                                value={this.state.password} 
                                placeholder="Password"/>
                            </div>
                            {this.sign_up()}
                            <div>
                                <input type="submit" 
                                value={this.formTypeText()} 
                                onSubmit={this.handleSubmit}
                                id="submit-button"/>
                            </div>
                            <div className="errors">
                                {this.errorsList()}
                            </div>
                            <div className="bottom-text">
                                {this.sign_up_bottom()}
                            </div>
                        </form>
                    
                        
                    </div>
                    <div id="switch-session-form-box">
                        <div className="alt-form-link-div">
                            {this.account_text()}
                        </div>
                    </div>
                    <div className="apps">
                        <div id="apps-text">
                            Get the app.
                        </div>
                        <div id="apps-pics">
                            <div className="companies">
                                <a href="https://apps.apple.com/us/app/instagram/id389801252"><img src="./assets/appstorebutton.png" alt="Find Instagram on the App store" /></a>
                            </div>
                            <div className="companies">
                                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US"><img src="./assets/googlestorebutton.png" alt="Find Instagram on the Google store" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;