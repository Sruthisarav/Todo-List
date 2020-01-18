class TodoItem < ApplicationRecord
  belongs_to :todo_list
  has_many :taggings
  has_many :tags, through: :taggings
  def completed?
    return !completed_at.nil?
  end
  def list_of_tags
    arr_of_tags = []
    self.tags.each do |tag|
      arr_of_tags << tag.name
    end
    return arr_of_tags.join(', ')
  end
  def list_of_tags=(tags_string)
    tag_names = []
    tags_string.split(',').each do |tag_string|
      tag = tag_string.strip.downcase
      tag_names << tag if !tag_names.include?(tag)
    end
    new_or_found_tags = tag_names.collect { |name| Tag.find_or_create_by(name: name) }
    self.tags = new_or_found_tags
  end
end
