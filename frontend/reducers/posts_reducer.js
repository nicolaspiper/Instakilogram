import { LOAD_INITIAL_POSTS, SHOW_POST, CLEAR_POSTS, CLEAR_POST } from "../actions/post_actions";


const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CLEAR_POST:
            let newState = {...state};
            delete newState['post'];
            return Object.assign({},newState)
        case CLEAR_POSTS:
            return Object.assign({},{},{})
        case LOAD_INITIAL_POSTS:
            return Object.assign({}, state, action.posts)
        case SHOW_POST:
            return Object.assign({}, state, {post: action.post})
        default:
            return state;
    }
};

export default postsReducer;