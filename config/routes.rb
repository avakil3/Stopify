Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:update, :index]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :playlists
  end


  root "static_pages#root"
end
