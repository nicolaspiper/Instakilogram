# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Post.delete_all
Comment.delete_all

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
user_photos = [
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/Profile.png'), filename: 'default'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/goose.png'), filename: 'goose'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/haber.png'), filename: 'haber'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/Newton.jpg'), filename: 'newtonprofilepic'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/mariecurie.jpg'), filename: 'mariecurie'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/einsteinprofile.jpg'), filename: 'einstein'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/carlsagan.jpeg'), filename: 'carlsagan'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/paracelsus.jpeg'), filename: 'paracelsus'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/louispasteur.jpg'), filename: 'pasteurprofilepic'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/georgechurch.jpg'), filename: 'georgechurchprofpic'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/leeuwenhoek.jpeg'), filename: 'leeuwenhoekprofilepic'},
]

users.each.with_index do |user, i|
    new_user = User.create!(user)
    new_user.photo.attach(user_photos[i]) ## demoUser profile skipped, sticking with the default profile asset
    # it's janky, but I will have to store a new default image for every new user in my AWS storage
    # if i != 0
    # end
end

posts = [
{id: 1, caption: "Look again at that dot. That's here. That's home. That's us.", author_id: 7, created_at: Time.now(), updated_at: Time.now()},
{id: 2, caption: "88, another one.", author_id: 5, created_at: Time.now(), updated_at: Time.now()},
{id: 3, caption: "I just had an idea, it's as if it fell out of the sky", author_id: 4, created_at: Time.now(), updated_at: Time.now()},
{id: 4, caption: "The unleashed power of the atom has changed everything except our thinking.", author_id: 6, created_at: Time.now(), updated_at: Time.now()},
{id: 5, caption: "Bring back the wooly mammoth!", author_id: 10, created_at: Time.now(), updated_at: Time.now()},
{id: 6, caption: "Mix, mix, stir, stir. One more ingredient and I shall have immortality!", author_id: 8, created_at: Time.now(), updated_at: Time.now()},
{id: 7, caption: "Invented a process today, felt cute, snapped a pic", author_id: 3, created_at: Time.now(), updated_at: Time.now()},
{id: 8, caption: "Beer just got a whole lot better", author_id: 9, created_at: Time.now(), updated_at: Time.now()},
{id: 9, caption: "Come at me Superman, got your Kryptonite right here", author_id: 5, created_at: Time.now(), updated_at: Time.now()},
{id: 10, caption: "What if I was moving super fast away from this clock, would time slow down for me? Lmk what you think", author_id: 6, created_at: Time.now(), updated_at: Time.now()},
{id: 11, caption: "Can't believe someone stole my idea for a username 'TH3_M1CR0SC0P3R_F4N4T1C'! No matter, I looked at some pondwater samples today along with some other… fluids.", author_id: 11, created_at: Time.now(), updated_at: Time.now()},
{id: 12, caption: "84. Discovered a really heavy metal today. I'll name it after my home country", author_id: 5, created_at: Time.now(), updated_at: Time.now()},
{id: 13, caption: "spontaneous generation is hogwash, fight me.", author_id: 9, created_at: Time.now(), updated_at: Time.now()},
{id: 14, caption: 'Leib-who?', author_id: 4, created_at: Time.now(), updated_at: Time.now()},
{id: 15, caption: 'HONK', author_id: 2, created_at: Time.now(), updated_at: Time.now()},
# {id: 16, caption: '', author_id: 1}
]
posts_photos = [
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/bigbluedot.jpeg'), filename: 'bluedot'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/radium.jpeg'), filename: 'radium' },
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/appletree.jpg'), filename: 'fallingapple' },
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/mushroom_cloud.jpg'), filename: 'mushroomcloud'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/bigwoolymammoth.jpeg'), filename: 'woolymammoth'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/alchemist.jpg'), filename: 'alchemist'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/fritzhaber.jpg'), filename: 'haber'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/heinekenyeast.jpg'), filename: 'heinekenyeast'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/MarieCurieBig.jpg'), filename: 'mariecurie'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/bern_watchtower.jpg'), filename: 'bernwatchtower'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/animalcules.jpg'), filename: 'animicules'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/polonium.jpeg'), filename: 'polonium'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/spontaneous_generation.jpg'), filename: 'spontaneousgeneration'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/newtoncalc.png'), filename: 'newtoncalc'},
    {io: open('https://instakilogram-dev.s3-us-west-1.amazonaws.com/goose.jpg_large'), filename: 'HONK'}
] 
# # created_at: Time.now(), updated_at: Time.now()

posts.each.with_index do |post, i|
    pos = Post.create!(post)
    pos.photo.attach(posts_photos[i])
end

comments = [
    {body: 'We have but one home, we should avoid war at all costs, great point Herr Sagan', user_id: 6, post_id: 1, created_at: Time.now(), updated_at: Time.now()},
    {body: "I was so narrowminded when it came to calculating the motions of the planets, glad to see how far we've come.", user_id: 4, post_id: 1, created_at: Time.now(), updated_at: Time.now()},
    {body: "Yes! More materials for me to experiment with in my quest for everlasting life!", user_id: 8, post_id: 2, created_at: Time.now(), updated_at: Time.now()},
    {body: "Hey, Alchemist, whatever you do don't put this one in your mouth. Can't promise that it is safe...", user_id: 5, post_id: 2, created_at: Time.now(), updated_at: Time.now()},
    {body: "Danke schoen Herr Newton, we will forever be indebted to your discoveries", user_id: 6, post_id: 3, created_at: Time.now(), updated_at: Time.now()},
    {body: "I wouldn't be able to see this under a microscope, would I?", user_id: 11, post_id: 4, created_at: Time.now(), updated_at: Time.now()},
    {body: "But really CRISPR is a cool thing, check it out", user_id: 10, post_id: 5, created_at: Time.now(), updated_at: Time.now()},
    {body: "Do you have any PPE? I hope you're not drinking those concoctions you make", user_id: 10, post_id: 6, created_at: Time.now(), updated_at: Time.now()},
    {body: "Of course I am, immortality will not elude my grasp again!", user_id: 8, post_id: 6, created_at: Time.now(), updated_at: Time.now()},
    {body: "Also, what is PPE?", user_id: 8, post_id: 6, created_at: Time.now(), updated_at: Time.now()},
    {body: "*facepalm*", user_id: 10, post_id: 6, created_at: Time.now(), updated_at: Time.now()},
    {body: "Monsieur Haber, your process is revolutionary! You deserve a medal", user_id: 5, post_id: 7, created_at: Time.now(), updated_at: Time.now()},
    {body: "What are you looking at now you username theif? To be fair I hope it does though :D", user_id: 11, post_id: 8, created_at: Time.now(), updated_at: Time.now()},
    {body: "Yeast, they seem to be responsible for fermentation", user_id: 9, post_id: 8, created_at: Time.now(), updated_at: Time.now()},
    {body: "Nice throwback photo Frau Curie", user_id: 3, post_id: 9, created_at: Time.now(), updated_at: Time.now()},
    {body: "Can I post this on r/showerthoughts?", user_id: 7, post_id: 10, created_at: Time.now(), updated_at: Time.now()},
    {body: "Pardonez-moi Monsieur Leeuvenhoek", user_id: 9, post_id: 11, created_at: Time.now(), updated_at: Time.now()},
    {body: "Apology accepted, would like to see more microscopers on here anyways!", user_id: 11, post_id: 11, created_at: Time.now(), updated_at: Time.now()},
    {body: "Will I have to travel to Poland to get this new material?", user_id: 8, post_id: 12, created_at: Time.now(), updated_at: Time.now()},
    {body: "No, like I said, I just named it after my home country, it's found in many different places", user_id: 5, post_id: 12, created_at: Time.now(), updated_at: Time.now()},
    {body: "The other side of food, learning to preserve the food grown by fertilizer from my process!", user_id: 3, post_id: 13, created_at: Time.now(), updated_at: Time.now()},
    {body: "Hehehe, sick burn", user_id: 7, post_id: 14, created_at: Time.now(), updated_at: Time.now()},
    {body: "HONK HONK HONK", user_id: 1, post_id: 15, created_at: Time.now(), updated_at: Time.now()},
    {body: "*angry goose noises*", user_id: 2, post_id: 15, created_at: Time.now(), updated_at: Time.now()},
]

comments.each do |comment|
    Comment.create!(comment)
end