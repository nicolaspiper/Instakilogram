# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Post.delete_all

users = User.create([{ username: 'demoUser', name: 'demoUser', email: 'demoUser@demo.com', password: 'password'},
                    { username: 'gooseMan', name: 'AJ', email: 'topgungoose@hotmail.com', password: 'starwars'},
                    { username: 'Haberman', name: 'Fritz Haber', email: 'fritz@empire.de', password: 'nitrogen'},
                    { username: 'calculusTho', name: 'Isaac Newton', email: 'apple@apple.org', password: 'derivative'}])

posts = Post.create([{caption: '', author_id: , created_at: Time.now(), updated_at: Time.now()},
                    {caption: '', author_id: , created_at: Time.now(), updated_at: Time.now()},
                    {caption: '', author_id: , created_at: Time.now(), updated_at: Time.now()},
                    {caption: '', author_id: , created_at: Time.now(), updated_at: Time.now()}
                    ])