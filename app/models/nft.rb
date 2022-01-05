class Nft < ApplicationRecord
  has_many :reviews, dependent: :destroy 
  belongs_to :user


  validates :rarity_rank, presence: true 
  validates :rarity_score, presence: true
  validates :price, presence: true 
  # validates :owner, presence:true
  validates :properties1, presence: true
  validates :properties2, presence: true
  validates :properties3, presence: true 
  # validates :owner, presence: true

end