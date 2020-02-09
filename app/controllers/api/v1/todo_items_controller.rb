module Api::V1
  class TodoItemsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
      @todo_list = TodoList.find(params[:todo_list_id])
      @todo_items = []
      @todo_list.todo_items.each do |todo_item|
        item = {}
        item[:list_of_tags] = todo_item.tags
        item[:id] = todo_item.id
        item[:content] = todo_item.content
        item[:complete] = todo_item.completed?
        item[:todo_list_id] = todo_item.todo_list_id
        item[:created_at] = todo_item.created_at
        item[:updated_at] = todo_item.updated_at
        item[:completed_at] = todo_item.completed_at
        @todo_items << item
      end
      render json: @todo_items
    end
    def edit
    end
    def new
      @todo_list = TodoList.find(params[:todo_list_id])
      @todo_item = @todo_list.todo_items.new
      render json: @todo_item
    end
    def update
      @todo_list = TodoList.find(params[:todo_list_id])
      @todo_item = @todo_list.todo_items.find(params[:id])
      @todo_item.update_attributes(todo_item_params)
      render json: @todo_item
    end
    def create
      @todo_list = TodoList.find(params[:todo_list_id])
      @todo_item = @todo_list.todo_items.create(todo_item_params)
      render json: @todo_item
    end
    def destroy
      @todo_list = TodoList.find(params[:todo_list_id])
      @todo_item = @todo_list.todo_items.find(params[:id])
      if @todo_item.destroy
        head :no_content, status: :ok
      else
        render json: @todo_item.errors, status: :unprocessable_entity
      end
    end
    def complete
      if !@todo_item.completed?
        @todo_item.update_attribute(:completed_at, Time.now)
      else
        @todo_item.update_attribute(:completed_at, nil)
      end
      render json: @todo_item
    end
  
    private
      def todo_item_params
        params[:todo_item].permit(:content, :list_of_tags, :completed_at)
      end
      def make_todo_item(id)
        @todo_item = @todo_list.todo_items.find(id)
      end
  end
end