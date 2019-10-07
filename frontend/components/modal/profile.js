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

function Profile(){
    // if (!userModalOpen || !loggedIn) {
    //     closeUserModal()
    //     return null;
    // } else {
        return (
            <div className="profile">
                TEST DIV
            </div>
        );
    // }
}
export default connect(msp, mdp)(Profile);