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
        { id: 7, username: 'PaleBlueDot', name: 'Carl Sagan', email: 'carl@sagan.sci', password: 'stardust', birthday: Time.now()},
        { id: 8, username: 'Alchemist', name: 'Philippus Aureolus Theophrastus Bombastus von Hohenheim', email: 'alchemist@magic.org', password: 'eternity', birthday: Time.now()},
        { id: 9, username: 'TH3_M1CR0SC0P3R_F4N4T1C', name: 'Louis Pasteur', email: 'louis@heineken.com', password: 'yeastman', birthday: Time.now()},
        { id: 10, username: 'HahvahdProf', name: 'George Church', email: 'gchurch@harvard.edu', password: 'woolymammoth', birthday: Time.now()},
        { id: 11, username: 'theOGmicroscoper', name: 'Anthony von Leeuwenhoek', email: 'microscoper@netherlands.eng', password: 'tinycell', birthday: Time.now()},
        ]
users.each do |user|
    User.create!(user)
end

posts = [
{caption: "Look again at that dot. That's here. That's home. That's us.", author_id: 7},
{caption: "88, another one.", author_id: 5},
{caption: "I just had an idea, it's as if it fell out of the sky", author_id: 4},
{caption: "The unleashed power of the atom has changed everything except our thinking.", author_id: 6},
{caption: "Bring back the wooly mamoth!", author_id: 10},
{caption: "Mix, mix, stir, stir. One more ingredient and I shall have immortality!", author_id: 8},
{caption: "Invented a process today, felt cute, snapped a pic", author_id: 3},
{caption: "Beer just got a whole lot better", author_id: 4},
{caption: "Come at me Superman, got your Kryptonite right here", author_id: 5},
{caption: "What if I was moving super fast away from this clock, would time slow down for me? Lmk what you think", author_id: 6},
{caption: "Can't believe someone stole my idea for a username 'TH3_M1CR0SC0P3R_F4N4T1C'! No matter, I looked at some pondwater samples today along with some other… fluids.", author_id: 11},
{caption: "84. Discovered a really heavy metal today. I'll name it after my home country", author_id: 5},
{caption: "spontaneous generation is hogwash, fight me.", author_id: 3},
{caption: '', author_id: 4},
{caption: '', author_id: 2},
{caption: '', author_id: 1}
]
posts_photos = [
    ,
    ,
    ,
    ,
    ,
    'https://instakilogram-pro.s3-us-west-1.amazonaws.com/alchemist.jpg',
] 
# # created_at: Time.now(), updated_at: Time.now()