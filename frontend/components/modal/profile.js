import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from './../../actions/ui_actions';
import { logout } from '../../actions/session_actions';


const msp = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => { dispatch(closeModal()); dispatch(logout()); },//logout()(dispatch)
        // reorganized modal closing, need to dispatch the called method closeModal
        // The closeModal on line 14 is the imported closeModal from the actions

    }
}

function Profile({currentUser, logout, closeModal}){
    return (
        <div className="profile">
            <div className="userInfo"> 
                <div className="profileImg">
                    <img src={currentUser.photoUrl} className="iconImg" alt="profileimage"/>
                </div>
                <div className="userText">
                    <h1>{currentUser.username}'s profile </h1><br/>
                    <p>{currentUser.email}</p>
                </div>
            </div> 
            <div onClick={logout} className="profileOption">
                Logout
            </div>
            <div onClick={closeModal} className="profileOption">
                Cancel
            </div>
        </div>
    );
}
export default connect(msp, mdp)(Profile);