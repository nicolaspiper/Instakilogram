import * as PostAPI from './../utils/post_api_util';

export const LOAD_INITIAL_POSTS = "LOAD_INITIAL_POSTS";
export const SHOW_POST = "SHOW_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";

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

export const getPosts = () => dispatch =>  (
    PostAPI.fetchPosts().then((posts) => dispatch(loadInitialPosts(posts)))
);

export const getPost = (id) => dispatch =>  (
    PostAPI.fetchPost(id).then((post) => dispatch(showPost(post)))
);

export const uploadPost = (post) => (
    PostAPI.uploadPost(post)
)