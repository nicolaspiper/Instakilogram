# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  caption    :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    has_one_attached :photo
    belongs_to :user,
        class_name: "User",
        primary_key: :id,
        foreign_key: :author_id
end
