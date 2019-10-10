import React from 'react';
import { connect } from 'react-redux';
import { closeUserModal } from './../../actions/ui_actions';
import { logout } from '../../actions/session_actions';



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
                <p>TEST DIV</p>  
            </div>
        );
    // }
}
export default connect(msp, mdp)(Profile);