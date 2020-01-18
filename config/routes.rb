Rails.application.routes.draw do
  root "todo_lists#index"
  resources :todo_lists do
    resources :todo_items  do
      member {patch :complete}
    end
  end
  resources :tags
  patch "/todo_lists/:todo_list_id/todo_items/:id/edit" => "todo_items#edit"
end
