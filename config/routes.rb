Rails.application.routes.draw do
  get 'posts/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    resources :posts, only: [:index, :show, :create, :destroy, :edit]
    resources :comments, only: [:show, :create, :destroy, :edit]
  end
  root :to => "static_pages#root";

end
