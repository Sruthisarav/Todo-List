class TodoItemsController < ApplicationController
  before_action :make_todo_list
  before_action :make_todo_item, except: [:create]
  def create
    @todo_item = @todo_list.todo_items.create(params[:todo_item].permit(:content))
    redirect_to @todo_list
  end
  def destroy
    flash = {success: "You have deleted this task", error: "This task could not be deleted" }
    @todo_item = @todo_list.todo_items.find(params[:id])
    if @todo_item.destroy
      flash[:success]
    else
      flash[:error]
    end
    redirect_to @todo_list
  end
  def complete
    @todo_item.update_attribute(:completed_at, Time.now)
    redirect_to @todo_list, notice: "Completed #{@todo_item.content}"
  end

  private
    def make_todo_list
      @todo_list = TodoList.find(params[:todo_list_id])
    end
    def make_todo_item
      @todo_item = @todo_list.todo_items.find(params[:id])
    end
end
