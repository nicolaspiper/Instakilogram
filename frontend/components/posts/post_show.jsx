import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../navbar/navbar_container';


class Post extends React.Component {


    constructor(props) {
        super(props)
        this.datetimeParser = this.datetimeParser.bind(this)
    }
    componentWillMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.clearPosts()
    }

    datetimeParser(datetimestr) {
        // 2019-11-27T01:32:23.023Z
        let to_month = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
            "05": "May",
            "06": "Jun",
            "07": "Jul",
            "08": "Aug",
            "09": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec"
        }
        let month = datetimestr.slice(5, 7)
        let day = datetimestr.slice(8, 10)
        return to_month[month] + " " + day
    };

    render() {
        if (!this.props.post) {
            return null
        }

        return (
            <div className="greeting-box" id="showbox">
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
                                    {Object.values(this.props.post.comments).map(comment => (
                                        <p key={comment.id} className="commentLine"> <b id="username">{comment.commentUser}</b>  {comment.body} <em className="date">{this.datetimeParser(comment.time)}</em></p>
                                    ))}
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