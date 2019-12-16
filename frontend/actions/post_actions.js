import * as PostAPI from './../utils/post_api_util';
import { closeModal } from './ui_actions';
export const LOAD_INITIAL_POSTS = "LOAD_INITIAL_POSTS";
export const SHOW_POST = "SHOW_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";
export const CLEAR_POST = "CLEAR_POST";
export const RECEIVE_POSTS_ERRORS = "RECEIVE_POSTS_ERRORS";
export const CLEAR_POSTS_ERRORS = "CLEAR_POSTS_ERRORS";


export const receivePostsErrors = (errors) =>({
    type: RECEIVE_POSTS_ERRORS,
    errors
})

export const clearPostsErrors = () => ({
    type: CLEAR_POSTS_ERRORS,
})

export const loadInitialPosts = (posts) => ({
    type: LOAD_INITIAL_POSTS,
    posts
})

export const showPost = (post) => ({
    type: SHOW_POST,
    post
})

export const clearPosts = () => ({
    type: CLEAR_POSTS
})

export const clearPost = () => ({
    type: CLEAR_POST
})

export const getPosts = () => dispatch =>  (
    PostAPI.fetchPosts().then((posts) => dispatch(loadInitialPosts(posts)))
);

export const getPost = (id) => dispatch =>  (
    PostAPI.fetchPost(id).then((post) => dispatch(showPost(post)))
);

export const uploadPost = (post) => dispatch => (
    PostAPI.uploadPost(post).then(
            (post) => { 
                dispatch(clearPostsErrors());
                dispatch(closeModal()); 
                dispatch(clearPosts()); 
                dispatch(getPost(post.id));
            }, 
            // success
            (res) => dispatch(receivePostsErrors(res.responseJSON))
            // failure
        )
)