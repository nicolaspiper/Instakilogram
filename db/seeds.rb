# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Post.delete_all

users = [
        { id: 1, username: 'demoUser', name: 'demoUser', email: 'demoUser@demo.com', password: 'password', birthday: Time.now()},
        { id: 2, username: 'gooseMan', name: 'AJ', email: 'topgungoose@hotmail.com', password: 'starwars', birthday: Time.now()},
        { id: 3, username: 'Haberman', name: 'Fritz Haber', email: 'fritz@empire.de', password: 'nitrogen', birthday: Time.now()},
        { id: 4, username: 'calculusTho', name: 'Isaac Newton', email: 'apple@apple.org', password: 'derivative', birthday: Time.now()},
        { id: 5, username: 'GlowingRock', name: 'Marie Curie', email: 'rock@radioactive.org', password: 'radioactive', birthday: Time.now()},
        { id: 6, username: 'OneRock', name: 'Albert Einstein', email: 'itsall@relative.org', password: 'gravity', birthday: Time.now()},
        { id: 7, username: 'TinyBlueSpeck', name: 'Carl Sagan', email: 'carl@sagan.sci', password: 'stardust', birthday: Time.now()},
        ]
users.each do |user|
    User.create!(user)
end

posts = [
{caption: '', author_id: },
{caption: '', author_id: },
{caption: '', author_id: },
{caption: '', author_id: }
]
# # created_at: Time.now(), updated_at: Time.now()