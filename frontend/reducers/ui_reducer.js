import { OPEN_MODAL, CLOSE_MODAL } from './../actions/ui_actions';


// const defaultUI = {
//     userModal: false,
//     photoModal: false,
// }

const uiReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};

export default uiReducer;