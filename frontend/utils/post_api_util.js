export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: "/api/posts"
    })
)

export const fetchPost = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/posts/${id}`,
    })
)

export const uploadPost = (post) => (
    $.ajax({
        method: 'POST',
        url: `/api/posts`,
        post,
        contentType: false,
        processData: false,
    })
)
// export const logout = () => (
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/session`
//     })
// )