json.array! @posts do |post|
    json.extract! post, :id, :caption, :author_id
    json.photoUrl url_for(post.photo)
end