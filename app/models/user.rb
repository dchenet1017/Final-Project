class User < ApplicationRecord
    has_many :nfts, dependent: :destroy 
    has_many :reviews, through: :nfts

    validates :name, presence: true 
    validates :email, presence: true 
    validates :password_digest, presence: true 
    has_secure_password
end
