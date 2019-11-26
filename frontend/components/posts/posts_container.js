import { connect } from 'react-redux';
import Posts from './posts';
import { getPosts, clearPosts } from '../../actions/post_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts
})

const mdp = (dispatch) => ({
    fetchPosts: () => dispatch(getPosts()),
    clearPosts: () => dispatch(clearPosts())
})

export default connect(msp, mdp)(Posts);