Rails.application.routes.draw do
  

  # get 'sessions/create'
  # get 'sessions/destroy'
  resources :nfts, only: [:index, :show, :create, :destroy] 
  resources :review, only: [:index, :show, :create, :destroy] 
  resources :user, only: [:destroy]
  
  get '/me', to: "users#show"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: "users#create"



#login
  post '/login', to: "sessions#create"

  delete '/login', to: "sessions#delete"


end
