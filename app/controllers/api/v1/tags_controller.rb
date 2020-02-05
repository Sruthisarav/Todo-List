module Api::V1
  class TagsController < ApplicationController
    def show
      @tag = Tag.find(params[:id]).todo_items
      render json:@tag
    end
    def search
      tag_search = params[:search].downcase
      @tag = Tag.find_by(name: tag_search) if tag_search
      #redirect_to tag_path(@tag)
    end
  end
end