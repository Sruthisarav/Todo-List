module Api::V1
  class TodoListsController < ApplicationController
    before_action :set_todo_list, only: [:show, :edit, :update, :destroy]
    skip_before_action :verify_authenticity_token

    # GET /todo_lists
    # GET /todo_lists.json
    def index
      @todo_lists = TodoList.order("created_at DESC")
      render json: @todo_lists
      #render component: 'Todo List/Index/Home', props: { todo_lists: @todo_lists.to_json }
    end

    def new
      @todo_list = TodoList.new
    end
    def show
    end

    # POST /todo_lists
    # POST /todo_lists.json
    def create
      @todo_list = TodoList.create(todo_list_params)
      render json: @todo_list
    end

    def edit
    end

    def update
      @todo_list = TodoList.find(params[:id])
      @todo_list.update_attributes(todo_list_params)
      render json: @todo_list
    end
    def destroy
      @todo_list = TodoList.find(params[:id])
      if @todo_list.destroy
        head :no_content, status: :ok
      else
        render json: @todo_list.errors, status: :unprocessable_entity
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.

      # Never trust parameters from the scary internet, only allow the white list through.
      def todo_list_params
        params.require(:todo_list).permit(:title, :description)
      end
      def set_todo_list
        @todo_list = TodoList.find(params[:id])
      end
  end
end