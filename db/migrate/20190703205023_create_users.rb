class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :name, null: false
      t.string :website, unique: true
      t.date :birthday, null: false
      t.text :bio
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.datetime :created, null: false
      t.datetime :updated, null: false
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end
