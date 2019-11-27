# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text
#  user_id    :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :user_id, :post_id, presence: true
    # need to go back and update migration so that foreign keys cannot be null at the db level
    belongs_to :post,
        class_name: "Post",
        primary_key: :id,
        foreign_key: :post_id
    belongs_to :user,
        class_name: "User",
        primary_key: :id, 
        foreign_key: :user_id 
end
