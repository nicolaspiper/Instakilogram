import React from 'react';
import { Link, Redirect } from 'react-router-dom';



class Posts extends React.Component {


    constructor(props) {
        super(props)
        this.datetimeParser = this.datetimeParser.bind(this)
        console.log(this.props.posts.length)
        if (this.props.posts.length === undefined) {
            this.props.fetchPosts();
        }
    }
    componentWillMount(){
    }
    
    componentWillUnmount(){
        // this.props.clearPosts();
    };

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
    // componentDidUpdate(){
    //     console.log(this.props.posts.post)
    //     if(this.props.posts.post){
    //         console.log(this.props.posts.post.id)
    //         return <Redirect to={`/post/${this.props.posts.post.id}`}/>
    //     }
    //     console.log("I ran componentDidUpdate on Posts, but there was no post")
    // }
    // just check in render if a show post item exists, if it does, redirect to show component

    render() {
        if (!this.props.posts){
            return null
        }
        if (this.props.posts.post) {
            console.log(this.props.posts.post.id)
            return <Redirect to={`/post/${this.props.posts.post.id}`} />
        }
        
        let all_posts = Object.values(this.props.posts).map(post => (
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
                    {Object.values(post.comments).map(comment => (
                        <p key={comment.id} className="commentLine"> <b id="username">{comment.commentUser}</b>  {comment.body} <em className="date">{this.datetimeParser(comment.time)}</em></p>
                    ))}
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