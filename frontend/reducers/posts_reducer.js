import { LOAD_INITIAL_POSTS } from "../actions/post_actions";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOAD_INITIAL_POSTS:
            return Object.assign({}, state, { posts: action.posts })
        default:
            return state;
    }
};

export default usersReducer;