import React from 'react';
import { Link } from 'react-router-dom';


class Posts extends React.Component {


    constructor(props) {
        super(props)
    }
    

    render() {
        debugger
        let all_posts = this.props.posts.map((post) => (
            <div className="postContainer">
                <div className="userPostHeader">

                </div>
                <div className="postPhoto">
                    <img src={post.photoUrl} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            </div>))
            debugger
        return (
            <div>
                {all_posts}
            </div>
        )
    }
}
export default Posts