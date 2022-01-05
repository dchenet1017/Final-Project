class CreateNfts < ActiveRecord::Migration[6.1]
  def change
    create_table :nfts do |t|
      t.integer :rarity_rank
      t.integer :rarity_score
      t.integer :price
      t.string :photo
      t.string :owner
      t.string :properties1
      t.string :properties2
      t.string :properties3
      # t.references :review, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    
    end
  end
end
