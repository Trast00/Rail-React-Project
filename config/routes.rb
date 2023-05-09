# frozen_string_literal: true

Rails.application.routes.draw do
  # get 'root/index'
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/messages', to: 'root#index'
  namespace :api do
    namespace :v1 do
      get '/messages', to: 'messages#index'
    end
  end
end
