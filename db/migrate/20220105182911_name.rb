class Name < ActiveRecord::Migration[6.1]
  def change
    add_column :nfts, :name, :string
  end 
end
