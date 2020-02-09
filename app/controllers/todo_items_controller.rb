class TodoItemsController < ApplicationController
  before_action :make_todo_list
  before_action :make_todo_item, except: [:create]
  def edit
  end
  def update
    @todo_item = make_todo_item
    respond_to do |format|
      if @todo_item.update(todo_item_params)
        format.html { redirect_to @todo_list, notice: 'Task was successfully updated.' }
        format.json { render :show, status: :ok, location: @todo_item }
      else
        format.html { render :edit }
        format.json { render json: @todo_item.errors, status: :unprocessable_entity }
      end
    end
  end
  def create
    @todo_item = @todo_list.todo_items.create(todo_item_params)
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
    if !@todo_item.completed?
      @todo_item.update_attribute(:completed_at, Time.now)
    else
      @todo_item.update_attribute(:completed_at, nil)
    end
    redirect_to @todo_list, notice: "Completed #{@todo_item.content}"
  end
  
  private
    def make_todo_list
      @todo_list = TodoList.find(params[:todo_list_id])
    end
    def make_todo_item
      @todo_item = @todo_list.todo_items.find(params[:id])
    end
    def todo_item_params
      params[:todo_item].permit(:content, :list_of_tags, :completed_at)
    end
end
