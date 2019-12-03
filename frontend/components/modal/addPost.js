import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from './../../actions/ui_actions';
import { uploadPost } from '../../actions/post_actions';


const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    posterId: state.session.id
})

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        addPost: (post) => { dispatch(uploadPost(post)); dispatch(closeModal()); },//logout()(dispatch)
        // reorganized modal closing, need to dispatch the called method closeModal
        // The closeModal on line 14 is the imported closeModal from the actions

    }
}

class AddPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newPhoto: null,
            caption: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[photo]', this.state.newPhoto);
        formData.append('post[user]', this.props.posterId);
        formData.append('post[created_at]', new Date(1394648309130.185));// weird date to prepare it for the controller
        formData.append('post[updated_at]', new Date(1394648309130.185));// weird date to prepare it for the controller
        this.props.addPost(formData);
    }

    handleInput(e){
        this.setState({caption: e.currentTarget.value})
    }

    handleFile(e){
        this.setState({newPhoto: e.currentTarget.files[0]})
    }
    render(){
        console.log(this.state)
        return (
            <div className="postform">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="newPhoto" className="postformPic">
                        <div className="imgborder">
                            <input type="file" id="newPhoto" onChange={this.handleFile}/>
                        </div>
                    </label>
                    <div className="postformCaption">
                        <textarea 
                        placeholder="Caption your post..."
                        value={this.state.caption}
                        onChange={this.handleInput}
                        className="captionText"
                        ></textarea>
                    </div>
                    <label htmlFor="postIt">
                        <div className="profileOption">
                            <input type="submit" id="postIt"/>
                            Make Post
                        </div>
                    </label>
                </form>
                <div onClick={this.props.closeModal} className="profileOption">
                    Cancel
                </div>
            </div>
        )
    };
}
export default connect(msp, mdp)(AddPost);