json.array! @posts do |post|
    json.extract! post, :id, :caption, :author_id
    json.photoUrl url_for(post.photo)
    json.userPhoto url_for(post.user.photo) 
    # json.dimensions post.photo.metadata DOESN'T WORK, want to try and get metadata
    json.user post.user.username
    # json.url url_for(post.user.photo)
    # puts json.url
end