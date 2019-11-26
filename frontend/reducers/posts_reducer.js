import { LOAD_INITIAL_POSTS, SHOW_POST } from "../actions/post_actions";


const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOAD_INITIAL_POSTS:
            // let posts = new Object()
            // action.posts.forEach(post => {
            //     posts[post.id] = [post.author_id, post.caption, post.photoUrl, post.user, post.userPhoto]
            // });
            return Object.assign({}, state, action.posts)
        case SHOW_POST:
            return Object.assign({}, state, {post: action.post})
        default:
            return state;
    }
};

export default postsReducer;