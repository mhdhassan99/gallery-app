# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    Picture.destroy_all
   
    puts 'pictures destroyed'

pictures = [
    {
        title: 'mountain', 
        like: 0,
        imageUrl: "https://cosmosmagazine.com/wp-content/uploads/2020/02/190218-mount-full-1440x810.jpg",
        favorite: true
    },

    {
        title: 'oceans', 
        like: 0,
        imageUrl: "https://scx2.b-cdn.net/gfx/news/2019/bluefinancea.jpg",
        favorite: false
    },

    {
        title: 'walk in the park', 
        like: 0,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/716tsQsStCL.jpg",
        favorite: true
    },

    {
        title: 'Starry Night', 
        like: 0,
        imageUrl: "https://www.vangoghgallery.com/img/starry_night_full.jpg",
        favorite: false
    },

    {
        title: 'Sponge Out of Water', 
        like: 0,
        imageUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/12/dave-pollot-thrift-store-paintings-1.jpg",
        favorite: false
    },

    {
        title: 'Traditional Waterfall', 
        like: 0,
        imageUrl: "https://www.jotform.com/blog/wp-content/uploads/2010/03/photo-1524664399170-77e7118fdb6d.jpeg",
        favorite: true
    },

    {
        title: 'Blooming Courtyard', 
        like: 0,
        imageUrl: "https://emptyeasel.com/wp-content/uploads/2019/02/harry-perry-painting.jpg",
        favorite: false
    },

    {
        title: 'Burning Forest', 
        like: 0,
        imageUrl: "https://previews.123rf.com/images/number168/number1681611/number168161100048/69741927-oil-painting-landscape-colorful-autumn-trees-semi-abstract-paintings-image-of-forest-aspen-tree-with.jpg",
        favorite: true
    },

    {
        title: 'Pink Sky', 
        like: 0,
        imageUrl: "https://cdn.cnn.com/cnnnext/dam/assets/190904125001-bob-ross-sunsetaglow-2612.jpg",
        favorite: false
    },

    {
        title: 'Snow Cabin', 
        like: 0,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71TDfrzIvzL._AC_SX522_.jpg",
        favorite: true
    },

    {
        title: 'Sunset by the Beach', 
        like: 0,
        imageUrl: "https://cordovanartschool.com/wp-content/uploads/2020/02/march-16.png",
        favorite: false
    },

    {
        title: 'Canyon', 
        like: 0,
        imageUrl: "https://manofmany.com/wp-content/uploads/2019/08/Where-Are-All-the-Bob-Ross-Paintings-1.jpg",
        favorite: false
    },

    {
        title: 'Wonder Bread', 
        like: 0,
        imageUrl: "https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/wonder-women-kelly-gilleran.jpg",
        favorite: true
    },

    {
        title: 'Casette', 
        like: 0,
        imageUrl: "https://images.saatchiart.com/saatchi/1121797/art/5148229/4218049-BYKZAJQN-7.jpg",
        favorite: false
    },

    {
        title: 'Camera', 
        like: 0,
        imageUrl: "https://images.fineartamerica.com/images-medium-large/cameras-retro-viki-vehnovsky.jpg",
        favorite: true
    },

    {
        title: 'Bumble Bee', 
        like: 0,
        imageUrl: "https://images.saatchiart.com/saatchi/1303329/art/6411313/5481069-LCMURXRA-7.jpg",
        favorite: false 
    },

    {
        title: 'Angela', 
        like: 0,
        imageUrl: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/angela-jamie-alexander.jpg",
        favorite: false
    },

    {
        title: 'Black and White', 
        like: 0,
        imageUrl: "https://previews.123rf.com/images/shooarts/shooarts1204/shooarts120400021/13072013-black-and-white-abstract-brush-painting.jpg",
        favorite: true 
    },

    {
        title: 'Woody', 
        like: 0,
        imageUrl: "https://i.pinimg.com/originals/0a/3e/77/0a3e7722099f6d5dfcfcb30752eb2a6b.jpg",
        favorite: false 
    },

    {
        title: 'Chicken', 
        like: 0,
        imageUrl: "https://brucemillerartist.com/media/content/White%20Chicken%20ll.png",
        favorite: false 
    }
 ]

pictures.each do |picture|
    Picture.create!(picture)
end

