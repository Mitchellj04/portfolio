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

justin = User.create(name: "Justin Mitchell", age: 23, resume: "link.com", github_link: "https://github.com/Mitchellj04", linkedin: "https://linkedin.com/in/justin-mitchell-887a47149", email: 'mitchelljm04@gmail.com', phone: '203-909-0635')

# p1 = Project.create(title: "Movie Generator", description: "A list of the most popular movies", image: "movie.png", user_id: justin.id)
p3 = Project.create(title: "Travel Blog", description: "Through my adventures of traveling I have taken thousands of pictures and videos. I created an instagram page to showcase these adventures, and now I have created a web page to go alone with that. This website showcases some of my favorite adventures and trips. If you want to share some of your own adventures reach out on the contact page.", image: '/static/media/adventureblog.821ab02745a5e33bf2dc.png', url: 'https://adventure-blog.onrender.com', user_id: justin.id)
p4 = Project.create(title: "Ski Mountain Rating", description: "Find the best east coast skiing mountain and interact with other skiers to talk about the pros and cons from any of your trips. See hwat trails each mountain has to offer and wether or not they will be groomed or not.", image: '/static/media/skibuddy.a615960eabf9d1581774.jpg' ,user_id: justin.id)
p5 = Project.create(title: "Developer Portal", description: "Creating a new project or have a problem with a current project? Look no further this app is designed by developers for developers. Be able to collaborate with other developers on your free time to create new projects or just see what everyone else is up to. If you're stuck on a bug or issue create a post and wait for another savy developer to help you out.", image: '/static/media/watercooler2.d25fc121dcbac3678372.jpg', url: "https://watercooler-app.onrender.com", user_id: justin.id)
p6 = Project.create(title: "Crypo Currency Tracker", description: "Find the lastest up to date data on all of the leading crypto currencies as well as the markets that you can purchase them on. Look through the currencies to be able to see the current prices and where to buy them. Save a currency to your watchlist to be able to keep an eye out for changes day by day.", image: "/static/media/cryptonite.67ced133f7803e06c6a6.png", url: "https://642b13150c08996355c7eacc--cryptonitev2.netlify.app/", user_id: justin.id)



education1 = Education.create(name: "University of Rhode Islande", degree: "Bachlors Business Administration - Entreprenuership and Innovation", start_year: 2017, graduate_year: 2021, gpa: 3.0, user_id: justin.id)
education3 = Education.create(name: "Flatiron School", degree: "Bootcamp - Full-Stack Software Engineer", start_year: 2022, graduate_year: 2023, user_id: justin.id)

experiences = Experience.create(company: "Deltek Products Inc.", title: "Website Admin", description: "Update company's existing website with current product pricing and information. Create ads to promote website products to customers to increase likelihood of customer purchases. Maintain and improve website meta-data to optimize google search probabilty.", start_year: 2019, ending_year: 2022, user_id: justin.id)
experiences2 = Experience.create(company: "Self Employed", title: "Freelance Website Developer", description: "Collaborate with clients to meet their needs on updating existing websites. Update and maintain product information to ensure users have current and up to date info. Add new features to increase usability for consumers. Help improve google analytics to increase customer aquisitions.", start_year: 2022,  user_id: justin.id)

