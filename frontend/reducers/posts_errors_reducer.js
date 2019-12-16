import { RECEIVE_POSTS_ERRORS, CLEAR_POSTS_ERRORS } from "../actions/post_actions";

const postsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS_ERRORS:
            return action.errors;
        case CLEAR_POSTS_ERRORS:
            return [];
        default:
            return state;
    }
}

export default postsErrorsReducer;