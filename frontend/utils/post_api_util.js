export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: "/api/posts"
    })
)

// export const getMorePosts = () => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/posts`
//     })
// )

// export const logout = () => (
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/session`
//     })
// )