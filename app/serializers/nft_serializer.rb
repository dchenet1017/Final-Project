class NftSerializer < ActiveModel::Serializer
  attributes :id, :rarity_rank, :rarity_score, :price, :photo, :owner, :properties1, :properties2, :properties3 ,:name
  
  has_many :reviews
end 
