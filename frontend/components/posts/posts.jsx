import React from 'react';
import { Link } from 'react-router-dom';



class Posts extends React.Component {


    constructor(props) {
        super(props)
    }
    componentWillMount(){
        this.props.fetchPosts();
    }
    
    componentWillUnmount(){
        this.props.clearPosts();
    };

    render() {
        if (!this.props.posts){
            return null
        }
        
        let all_posts = Object.values(this.props.posts).map((post) => (
            <div className="postContainer" key={post.id}>
                <div className="header">
                    <div>
                        <div className="colorBorder">
                            <div className="profileImgMask">
                                <img src={post.userPhoto} ></img>
                            </div>
                        </div>
                        <p id="username">{post.user}</p>
                    </div>
                    <div className="optionsDots">
                        <div className="spriteDiv" id="tripDots">
                        </div> {/* spriteDiv class is on navbar.css*/}
                    </div>
                    {/* <p>{User.find_by(post.author_id).username}</p> need to get posts frontend working*/}
                </div>
                <div className="postPhoto">
                    <img src={post.photoUrl} alt={post.caption} />
                </div>
                <div className="actionIcons">
                    {/* weird font displayed in this placeholder because text is in div not a p */}
                    <div className="spriteDiv" id="likes">
                    </div>
                    <Link to={`/post/${post.id}`}><div className="spriteDiv" id="comment">
                    </div>
                    </Link>
                </div>
                {/* PUT CONDITIONALLY LIKES p tag here! */}
                
                <div className="postCaption">
                    <p> <b id="username">{post.user}</b>  {post.caption}</p>
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