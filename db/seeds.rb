# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.delete_all
Project.delete_all
Education.delete_all
Experience.delete_all

justin = User.create(name: "Justin Mitchell", age: 23, resume: "link.com", github_link: "https://github.com/Mitchellj04", linkedin: "https://linkedin.com/in/justin-mitchell-887a47149")

p1 = Project.create(title: "Movie Generator", description: "A list of the most popular movies", image: "movie.png", user_id: justin.id)
p2 = Project.create(title: "Freelancer", description: "A task based website built for users to be able to keep track of their projects and tasks", image: '/static/media/freelancer.706250e318096d87c1ba.png', user_id: justin.id)
p3 = Project.create(title: "Australia Blog", description: "A blog website about some of the adventure I have been on.", image: '/static/media/adventureblog.821ab02745a5e33bf2dc.png', user_id: justin.id)
p4 = Project.create(title: "Ski-Buddy", description: "Find the best east coast skiing mountain and interact with other skiers to talk about the pros and cons", image: '/static/media/skibuddy.581c4b97ad3d3286082b.png' ,user_id: justin.id)
p5 = Project.create(title: "WaterCooler", description: "A website where coders can be able to interact with one another to be able to get help or collaborate on projects", image: '/static/media/watercooler.55e17dcf79435101abb6.png', url: "https://watercooler-app.onrender.com", user_id: justin.id)


education1 = Education.create(name: "University of Rhode Islande", degree: "Bachlors Business Administration - Entreprenuership and Innovation", start_year: 2017, graduate_year: 2021, gpa: 3.0, user_id: justin.id)
education2 = Education.create(name: "Maquire University", degree: "2020 Abroad - Bachlors Business Administration", start_year: 2020,  gpa: 3.2, user_id: justin.id)
education3 = Education.create(name: "Flatiron School", degree: "Bootcamp - Full-Stack Software Engineer", start_year: 2022, graduate_year: 2023, user_id: justin.id)

experiences = Experience.create(company: "Deltek Products Inc.", title: "Website Admin", description: "Update the existing website with current product pricing", start_year: 2019, ending_year: 2022, user_id: justin.id)
experiences2 = Experience.create(company: "Self Employed", title: "Freelance Website Developer", description: "", start_year: 2022,  user_id: justin.id)
