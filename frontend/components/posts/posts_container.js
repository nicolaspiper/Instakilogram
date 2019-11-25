import { connect } from 'react-redux';
import Posts from './posts';
import { getPosts } from '../../actions/post_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts
})

const mdp = (dispatch) => ({
    fetchPosts: () => dispatch(getPosts()),
})

export default connect(msp, mdp)(Posts);