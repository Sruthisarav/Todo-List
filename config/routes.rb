Rails.application.routes.draw do
  root "todo_lists#index"
  namespace :api do
    namespace :v1 do
      resources :tags
      get "search", to: "tags#search"
      resources :todo_lists do
        resources :todo_items do
          member {patch :complete}
        end
      end
    end
  end
  resources :todo_lists do
    resources :todo_items do
      member {patch :complete}
    end
  end
  resources :tags
  patch "/todo_lists/:todo_list_id/todo_items/:id/edit" => "todo_items#edit"
  get "search", to: "tags#search"
end
