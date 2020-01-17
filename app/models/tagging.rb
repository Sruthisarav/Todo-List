class Tagging < ApplicationRecord
  belongs_to :tag
  belongs_to :todo_item
end
