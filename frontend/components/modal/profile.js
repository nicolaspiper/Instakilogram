import React from 'react';
import { connect } from 'react-redux';
import { closeUserModal } from './../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import './usermodal.css';


const msp = state => ({
    // loggedIn: state.session.isAuthenticated,
    // userModalOpen: state.ui.userModalOpen,
    // handle: (state.session.user ? state.session.user.handle : 'guest')
})

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => { logout()(dispatch); closeUserModal() },
    }
}

function Profile({ handle, loggedIn, userModalOpen, closeUserModal, logout }) {
    // if (!userModalOpen || !loggedIn) {
    //     closeUserModal()
    //     return null;
    // } else {
        return (
            <div className="modal-background" onClick={closeUserModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-box">
                        <div className="modal-title">
                            <div className="modal-title-box">
                                {handle}'s Profile Settings
                                {/* want to render username maybe "{name} Settings" */}
                            </div>
                            <div className="close-modal">
                                <button className="close-modal-button" onClick={closeUserModal}>X</button>
                            </div>
                        </div>
                        <div className="modal-body-logout">
                            <button className="logout-button" onClick={logout}>logout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    // }
}
export default connect(msp, mdp)(Profile);