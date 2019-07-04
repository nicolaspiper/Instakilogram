class Removecreatedandupdatedfromusers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :created
    remove_column :users, :updated
  end
end
