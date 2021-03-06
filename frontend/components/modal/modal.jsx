import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/ui_actions';
import { clearPostsErrors } from '../../actions/post_actions';
import Profile from './profile'
import AddPost from './addPost'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'upload':
            // component = <LoginFormContainer />;
            // component = < PhotoUpload/>
            break;
        case 'profile':
            component = <Profile />;
            break;
        case 'newPost':
            component = <AddPost />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => {dispatch(closeModal()); dispatch(clearPostsErrors())},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
