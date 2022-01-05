class Review < ApplicationRecord
    has_many :nfts, dependent: :destroy 
    has_many :users, through: :nfts


end
