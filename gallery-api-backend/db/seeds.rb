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
        imageUrl: "https://cosmosmagazine.com/wp-content/uploads/2020/02/190218-mount-full-1440x810.jpg"
    },

    {
        title: 'oceans', 
        like: 0,
        imageUrl: "https://scx2.b-cdn.net/gfx/news/2019/bluefinancea.jpg"
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    },

    {
        title: '', 
        like: 0,
        imageUrl: "",
    }
 ]

 5.times do
    User.create(name: Faker::User.name, location: Faker::User.location, age: Faker::User.age)
  end

pictures.each do |picture|
    Picture.create!(picture)
end