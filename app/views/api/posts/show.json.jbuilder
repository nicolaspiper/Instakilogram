# <h1><%= @post.caption %></h1>
# <img src="<%= url_for(@post.photo) %>" alt=""> 
json.extract! @post, :id, :caption
json.photoUrl url_for(@post.photo)
json.userPhoto url_for(@post.user.photo) 
json.user @post.user.username
json.comments @post.comments do |comment|
    json.body comment.body
    json.commentUser comment.user.username
    json.time comment.created_at
    json.id comment.id
end
# json.dimensions post.photo.metadata DOESN'T WORK, want to try and get metadata