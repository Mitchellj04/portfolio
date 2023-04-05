Rails.application.routes.draw do
  # resources :educations
  # resources :experiences
  resources :users, only: [:index]
  resources :categories
  resources :projects
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "*path", to: "application#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
