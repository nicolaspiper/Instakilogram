# <h1><%= @post.caption %></h1>
# <img src="<%= url_for(@post.photo) %>" alt=""> 
json.extract! @post, :id, :caption
json.photoUrl url_for(@post.photo)
json.userPhoto url_for(@post.user.photo) 
json.user @post.user.username
# json.dimensions post.photo.metadata DOESN'T WORK, want to try and get metadata