Nft.destroy_all
Nft.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence

puts "seeding start"

puts "seeding users"

roger= User.create(
    name: "Roger",
    email: "roger@roger.com",
    password: "123"
)

will= User.create(
    name: "Will",
    email: "will@will.com",
     password: "123"
)

jason= User.create(
    name: "Jason",
    email: "jason@jason.com",
    password: "123")


    puts "seeding reviews"


review1=Review.create(
    nft_id: "cryptopunk5499.id",
    user_id: roger.id,
    comment: "I wish I can buy one ",
    rating: 4)

review2=Review.create(
    nft_id: "cryptopunk1233.id",
    user_id: will.id,
    comment: "Cant wait to see this in a cartoon",
    rating: 4)

 review3=Review.create(
     nft_id: "cryptopunk4566.id",
     user_id: jason.id,
     comment: "Cant beleive my eyes ",
     rating: 3)

 review4=Review.create(
    nft_id: "cryptopunk2695.id",
    user_id: jason.id,
    comment: "How do they think of these things",
    rating: 4)

review5=Review.create(
    nft_id: "cryptopunk3365.id",
    user_id: will.id,
    comment:"Wow unique",
    rating: 4)

    puts "seeding done"

    puts "seeding nft"

cryptopunk3365 = Nft.create(
     rarity_rank: 5276,
     rarity_score: 101.32,
     price: 25.758,
     photo: "https://lh3.googleusercontent.com/G49THrlvYJamb2nwVKkkAlvGzjS16Fkq1qdclDAoHKZvnN71Zl2oq0g4REL239Ma553SU-sU0Aa97s8ycgvGMiYGVxPDUobqDI1jzCU=s0" ,
     owner: "Odel Beckham",
     properties1: "ACCESSORY - Shadow Beared 5% have this trait",
     properties2: "ACCESSORY - Smile 2% have this trait",
     properties3: "ACCESSORY - Wild Hair 4% have this trait",
     user_id: jason.id
)

cryptopunk2695 = Nft.create(
     rarity_rank: 3021,
     rarity_score: 23.33,
     price: 30.759,
     photo: "https://pbs.twimg.com/media/FF2aNQuXoAQO5_M?format=jpg&name=large",
     owner: "Takeoff",
     properties1: "ACCESSORY - Dreads 3% have this trait",
     properties2: "ACCESSORY - Straightface 10% have this trait",
     properties3: "ACCESSORY - Low beared 1% have this trait",
     user_id: will.id
)
cryptopunk4566 = Nft.create(
     rarity_rank: 9877,
     rarity_score: 89.00,
     price: 15.758,
     photo: "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTEvZjY0NjhiNDQtYTc2OC00NmRiLWFmOTMtMDk0OTEzNjMzYzhkLmpwZw==.jpg",
     owner: "Snoop Dog",
     properties1: "ACCESSORY - Pony Tails 5% have this trait",
     properties2: "ACCESSORY - Goatee 2% have this trait",
     properties3: "ACCESSORY - Brown Eyes 75% have this trait",
     user_id: will.id
)
cryptopunk1233= Nft.create(
     rarity_rank: 1239,
     rarity_score: 50.99,
     price: 3.758,
     photo: "https://www.benzinga.com/files/images/story/2012/bord_ape_1.png",
     owner: "Lil Pump",
     properties1: "ACCESSORY - 3d glasses 15% have this trait",
     properties2: "ACCESSORY - Side Grin 10% have this trait",
     properties3: "ACCESSORY - Cheetah Skin 1% have this trait",
     user_id: roger.id
)
cryptopunk5499 = Nft.create(
     rarity_rank: 420,
     rarity_score: 9.99,
     price: 100.000,
     photo: "https://benzinga.com/wp-content/uploads/2021/08/img_611548de04f4a.png",
     owner: "Jay Z",
     properties1: "ACCESSORY - Captain Hat 2% have this trait",
     properties2: "ACCESSORY - Side Grin 10% have this trait",
     properties3: "ACCESSORY - Laser eyes 2% have this trait",
     user_id: jason.id
)

