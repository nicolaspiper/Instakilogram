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

// export const logout = () => (
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/session`
//     })
// )