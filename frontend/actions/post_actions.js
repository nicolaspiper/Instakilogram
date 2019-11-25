import * as PostAPI from './../utils/post_api_util';

export const LOAD_INITIAL_POSTS = "LOAD_INITIAL_POSTS";

export const loadInitialPosts = (posts) => ({
    type: LOAD_INITIAL_POSTS,
    posts
})

export const getPosts = () => dispatch =>  (
    PostAPI.fetchPosts().then((posts) => dispatch(loadInitialPosts(posts)))
);