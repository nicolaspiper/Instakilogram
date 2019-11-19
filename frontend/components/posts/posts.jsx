import React from 'react';
import { Link } from 'react-router-dom';


class Posts extends React.Component {


    constructor(props) {
        super(props)
    }
    

    render() {
        let all_posts = this.props.posts.map((post) => (
            <div className="postContainer" key={post.id}>
                <div className="userPostHeader">
                    <div className="profileImgMask">
                        <img src={post.userPhoto} ></img>
                    </div>
                    <p>{post.user}</p>
                    {/* <p>{User.find_by(post.author_id).username}</p> need to get posts frontend working*/}
                </div>
                <div className="postPhoto">
                    <img src={post.photoUrl} alt={post.caption} />
                </div>
                <div className="actionIcons">
                    buttons go here
                </div>
                <div className="postCaption">
                    <p>{post.user}</p>
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