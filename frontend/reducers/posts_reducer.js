import { LOAD_INITIAL_POSTS } from "../actions/post_actions";


const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOAD_INITIAL_POSTS:
            // let posts = new Object()
            // action.posts.forEach(post => {
            //     posts[post.id] = [post.author_id, post.caption, post.photoUrl, post.user, post.userPhoto]
            // });
            return Object.assign({}, state, action.posts )
        default:
            return state;
    }
};

export default postsReducer;