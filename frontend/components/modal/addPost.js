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
        addPost: (post) => { dispatch(uploadPost(post)); },//logout()(dispatch)
        // reorganized modal closing, need to dispatch the called method closeModal
        // The closeModal on line 14 is the imported closeModal from the actions

    }
}

class AddPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newPhoto: null,
            caption: "",
            photoUrl: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleSubmit(e){
        // console.log("==================")
        // console.log(this.props.state)
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[photo]', this.state.newPhoto);
        formData.append('post[author_id]', this.props.posterId);
        formData.append('post[created_at]', new Date());// weird date to prepare it for the controller
        formData.append('post[updated_at]', new Date());// weird date to prepare it for the controller
        this.props.addPost(formData);
        // console.log("==================")
        // console.log(this.props.state)
    }

    handleInput(e){
        this.setState({caption: e.currentTarget.value})
    }

    handleFile(e){
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ newPhoto: file, photoUrl: fileReader.result})
        }
        if (file){
            fileReader.readAsDataURL(file);
            
        }
    }

    render(){
        return (
            <div className="postform">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="newPhoto" className="postformPic">
                        <div className="imgborder">
                            {this.state.photoUrl ? <img className="previewPhoto" src={this.state.photoUrl} /> : <div className="cameraImg" />}
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
                    {this.props.errors ? <div>
                        <ul>
                            {this.props.errors.map((error) => (
                                <li>{error}</li>    
                            ))}
                        </ul>
                    </div> : null}
                    <label htmlFor="postIt">
                        <div className="profileOption">
                            <input type="submit" onClick={this.handleSubmit} id="postIt"/>
                            Post
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