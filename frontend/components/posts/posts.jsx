import React from 'react';
import { Link } from 'react-router-dom';


class Posts extends React.Component {


    constructor(props) {
        super(props)
        // console.log(this.props.posts);
        // console.log(this.props.fetchPosts());

    }
    componentWillMount(){
        this.props.fetchPosts();
    }
    
    render() {
        if (!this.props.posts){
            return null
        }
        
        let all_posts = Object.values(this.props.posts).map((post) => (
            <div className="postContainer" key={post.id}>
                <div className="userPostHeader">
                    <div className="colorBorder">
                        <div className="profileImgMask">
                            <img src={post.userPhoto} ></img>
                        </div>
                    </div>
                    <p id="username">{post.user}</p>
                    {/* <p>{User.find_by(post.author_id).username}</p> need to get posts frontend working*/}
                </div>
                <div className="postPhoto">
                    <img src={post.photoUrl} alt={post.caption} />
                </div>
                <div className="actionIcons">
                    {/* weird font displayed in this placeholder because text is in div not a p */}
                    buttons go here
                </div>
                {/* PUT CONDITIONALLY LIKES p tag here! */}
                <div className="postCaption">
                    <p id="username">{post.user}</p>
                    <p>{post.caption}</p>
                </div>
                <div className="comments">
                    comments will list
                </div>
            </div>))
        return (
            <div className="postsIndex">
                {all_posts}
            </div>
        )
    }
}
export default Posts