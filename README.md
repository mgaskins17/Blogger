# Blogger

## Description

To build a fully deployable blogging applicaton where users can view other's posts and comment on them, while also being able to post their own content.

- What was your motivation? This challenge is great practice using multiple skills we've learned - frontend, backend, UI, middleware application
- Why did you build this project? This challenge helped fill in the holes of my learning with the backend development, how routes are produced, sending information to handlebars to use and how objects need to be sent to client. The modifying databases was also helpful.
- What problem does it solve? For me, it helped build confidence in my programming skills and I feel more well-rounded. In reality, this is a basic application such as Reddit or Twitter and is useful for when we finish this course.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

You have the option of using my deployed application on heroku -> https://my-first-blog-1395510.herokuapp.com/

Or if you decide to clone my repository from github then please follow the steps listed:
a. Start by installing dependencies -> open terminal for repo and run command 'npm i'
b. Since you're running locally, you will need to seed a database. Open terminal for repo and log into mysql then run 'source ./db/schema.sql'. Go to your regular terminal then run 'node seeds/index.js' to seed the database.
c. You can run the application with either 'nodemon server.js' or 'node server.js'. Since you're not making active changes I recommend the second option.
d. Go to your browner and type in http://localhost:3001/ in the URL. This will open the application. 
e. You can either run the following information-> Username: User1  &  Password: password1 or you may create your own account. No email required. 


## Credits

UofU notes, project 2 group 9 repo (this is my group, we built a similar application so I had code prewritten for some instances), handlebars, w3

## License

MIT License

## Features

You can create your own account, have your personal dashboard which shows your posts you made, only you can edit your posts or delete them, you can view all posts made and make comments on posts as well. If you are idle for 30 minutes, the application will require you to login again. This time can be changed, but this is the time I set for testing purposes. When you create an account, you will need a unique username.

## Tests

* have mysql terminal open with the database blog_db selected
a. Start the application and create a new user -> SELECT * FROM user; into mysql to see your new account 
b. Click 'logout' which will destroy your cookie then try to sign up again with the same username -> Warning showing username already taken
c. Login with your account, go to dashboard then add a post, if you leave fields empty it won't let you post. Make a valid post -> SELECT * FROM post; into mysql to see your new post
d. Go back to dashboard and select edit on the new post you made, edit the title or text -> SELECT * FROM post; into mysql to see contents have changed
e. Go back to dashboard and select edit on any post you made and select delete -> SELECT * FROM post; into mysql to see post has been deleted
f. Go to homepage and click on any post then leave a comment -> SELECT * FROM comment; into mysql to see comment is added