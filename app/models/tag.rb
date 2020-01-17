class Tag < ApplicationRecord
  has_many :taggings
  has_many :todo_items, through: :taggings
end
