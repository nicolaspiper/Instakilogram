import React from 'react';
import GreetingContainer from "./greeting_container"
import {Link} from 'react-router-dom';
import SignUpContainer from "./../session_form/sign_up_form_container";
import Navbar from "./../navbar/navbar_container";
import Posts from "./../posts/posts";



export default class Greeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.showSplash = this.showSplash.bind(this);
        this.posts = this.posts.bind(this);
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    fetchPosts() {

        $.ajax({
            url: "/api/posts"
        }).then(posts => {
            this.setState({ posts })
        });
    }

    componentDidMount(){
        this.fetchPosts();
    }

    showSplash(){
        return (
            <main>
                <div className="main-splash-div">
                    <div>
                        <div className="left-div">
                            <img src="/assets/indefinitelyborrowedcats.png" className="splash-img" alt="indefinitelyborrowedcats"/>
                        </div>
                        <div className="right-div">
                            <SignUpContainer/>
                        </div>
                    </div>
                </div>
                <footer className="bottom-links">
                    <div className="external-links">
                        <a href="nicolaspiper.netlify.com">Creator's Website</a>
                        <a href="https://github.com/nicolaspiper">Github</a>
                        <a href="https://www.linkedin.com/in/nicolaspiper/">LinkedIn</a>
                    </div>
                    <div className="copyright">Nicolas Piper &#169;</div>
                </footer>
            </main>
        )
    }

    posts(){
        if(!this.state.posts){
            return " "
        }
        return(
            <div className="greeting-box">
                <Navbar/>
                <div className="center-box">
                    <Posts posts={this.state.posts}/>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                { this.props.currentUser ? this.posts() : this.showSplash()}
            </div>
        )
    }

}

// export default Greeting;
