class AddIndexesToTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    remove_index :users, :email
    remove_index :users, :session_token
  end
  
end
