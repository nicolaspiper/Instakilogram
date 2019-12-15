import { connect } from 'react-redux';
import Post from './post_show';
import { getPost, clearPost } from '../../actions/post_actions';


const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    post: state.entities.posts.post
})

const mdp = (dispatch) => ({
    fetchPost: (id) => dispatch(getPost(id)),
    clearPost: () => dispatch(clearPost())
})

export default connect(msp, mdp)(Post);