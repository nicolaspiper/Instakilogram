import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../navbar/navbar_container';


class Post extends React.Component {


    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.clearPosts()
    }

    render() {
        if (!this.props.post) {
            console.log(this.props.match.params.id)
            return null
        }

        return (
            <div className="greeting-box">
                <Navbar />
                <div className="showPost-center-box">
                    <div className="showPostContainer" key={this.props.post.id}>
                        <div className="horizontalAlign">
                            <div className="showPostPhoto">
                                <img className="showPostPhotoIMG" src={this.props.post.photoUrl} alt={this.props.post.caption} />
                            </div>
                            <div className="rightSide">  
                                <div className="header">
                                    <div>
                                        <div className="colorBorder">
                                            <div className="profileImgMask">
                                                <img src={this.props.post.userPhoto} ></img>
                                            </div>
                                        </div>
                                        <p id="username">{this.props.post.user}</p>
                                    </div>
                                    <div className="optionsDots">
                                        <div className="spriteDiv" id="tripDots">
                                        </div> {/* spriteDiv class is on navbar.css*/}
                                    </div>
                                    {/* <p>{User.find_by(this.props.post.author_id).username}</p> need to get posts frontend working*/}
                                </div>
                                <div className="actionIcons">
                                    {/* weird font displayed in this placeholder because text is in div not a p */}
                                    <div className="spriteDiv" id="likes">
                                    </div>
                                    <div className="spriteDiv" id="comment">
                                    </div>
                                </div>
                                {/* PUT CONDITIONALLY LIKES p tag here! */}
                                <div className="postCaption">
                                    <p> <b id="username">{this.props.post.user}</b>  {this.props.post.caption}</p>
                                </div>
                                <div className="comments">
                                    comments will list
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>    
                <footer className="showPost-bottom-links">
                    <div className="external-links">
                        <a href="nicolaspiper.netlify.com">Creator's Website</a>
                        <a href="https://github.com/nicolaspiper">Github</a>
                        <a href="https://www.linkedin.com/in/nicolaspiper/">LinkedIn</a>
                    </div>
                    <div className="copyright">Nicolas Piper &#169;</div>
                </footer>
            </div>
        )
    }
}
// import { format } from 'path';
export default Post