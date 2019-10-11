# <h1><%= @post.caption %></h1>
# <img src="<%= url_for(@post.photo) %>" alt=""> 
json.array! @post do |post|
    json.extract! post, :id, :caption
    json.photoUrl url_for(post.photo)
end