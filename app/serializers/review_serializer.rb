class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comment, :rating

  has_many: nfts
end
