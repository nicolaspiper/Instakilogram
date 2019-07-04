import { RECEIVE_CURRENT_USER, LOGOUT } from './../actions/session_actions';


const nullUser = {
    id: null,
}

const sessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return {id: action.currentUser.id };
        case LOGOUT:
            return nullUser;
        default:
            return state;
    }
};

export default sessionReducer;