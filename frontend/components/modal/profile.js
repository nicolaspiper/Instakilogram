import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from './../../actions/ui_actions';
import { logout } from '../../actions/session_actions';


const msp = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mdp = dispatch => {
    return {
        // closeModal: () => dispatch(closeModal()),
        logout: () => { dispatch(closeModal()); logout()(dispatch); },
        // reorganized modal closing, need to dispatch the called method closeModal
        // The closeModal on line 14 is the imported closeModal from the actions
        
    }
}

function Profile({currentUser, logout}){
        return (
            <div className="profile">
                <div> {currentUser.username}'s profile</div> 
                <div onClick={logout}>
                    Logout
                </div>
            </div>
        );
    // }
}
export default connect(msp, mdp)(Profile);