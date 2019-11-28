json.array! @posts do |post|
    json.extract! post, :id, :caption, :author_id
    json.photoUrl url_for(post.photo)
    json.userPhoto url_for(post.user.photo) 
    # json.dimensions post.photo.metadata DOESN'T WORK, want to try and get metadata
    json.user post.user.username
    # json.comment @post.comments do |comment|
        # json.body comment.body
        # json.commentUser comment.user.username
    # end
    json.comments post.comments do |comment|
        json.body comment.body
        json.commentUser comment.user.username
        json.time comment.created_at
        json.id comment.id
    end
    # json.url url_for(post.user.photo)
    # puts json.url
end