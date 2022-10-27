
<!-- ABOUT THE PROJECT -->
## About The Project

This project was created by: Ethan Powell,
Brian Ayiteyfio, and Kristal Davis Mitchell

This is a multi-page application with a single basic user authentication page for sign-in, sign-up, sign-out that interacts with a custom API database. The app was built to create, read, update , and delete data in a database and produce it in the frontend of the application.


### Built With

<!-- This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples. -->

[Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

* [Express](nom install express)
[EJS Templates]($ npm install ejs)
[Sequelize](npm install --save sequelize)
CSS
Javascript

# dependencies

node_modules]: https://nodejs.org/en/download/current/.
/.pnp
.pnp.js



<!-- GETTING STARTED -->
## Getting Started

Create a new node project folder.
Initialize the Git Repository
Connect to GitHub (optional)
Create your main application file
Initialize the Node Project
-->
First install and configure the modules for Bootstrap,Express,EJS, SQl for a virtual environment just like any other application on your computer, ensure that they are installed.


Create your server.With all of the dependencies installed. Use EJS and set up the routes for template engine routes. 
Eg. Index page 

Create a template directory and start creating templates with data to later review in the browser.

Create a views/ partials page using pjs to reuse code in other areas of the applications. Eg. Head.ejs, header.ejs

In these files include all metadata for your bootstrap styles, include navigation code.

Next create your interactive form page to retrieve/submit relative customer information  from the sql database







### Prerequisites


Create compelling templating ,configure routing that implements multiple ways of authenticating by implementing password policy.
Correctly configures and uses best-in-class middleware. Crete custom model methods that use raw SQ data functionality to make it optimal in generating seed data. Exercise Deployment to public server with custom domain name .

# What is the Peanut Gallery

The Peanut Gallery is a social application that allows users to login, register to the app. The platform allows users to build a unique profile to create comments and post them within the app.

### Installation

Project structure:
startEJS
|--public
|--views
  |--pages
     |--home.ejs
  |--template
     |--head.ejs
     |--nav.ejs
     |--footer.ejs 
|--index.js
|—package.json





Install 

nodemon.json
express and ejs:
-npm i express
-npm i ejs
Nom bcript- node.bcrypt.js

view engine setup
First we set up the view engine and the views directory
setup public folder
Render routes
Establish Authentication
configure PostgreSQL  /Sequelize build table
Build Database- customize the database name to match your project
Run the seed file
Test data

<!-- ROADMAP -->
## Roadmap

### M.V.P.
### Provide the following:
- Achieved functionality - Meets project rubric expectations

 - Renders correct template with data based on route, authentication state, and status code.

 - Uses routes and route parameters. Correctly structures routes to create readable, nested URL paths.

 - Implements bcrypt or OAuth correctly. Keeps applications secrets private. Has password requirements.

 - Separates controllers from router and model layers.

 - Correctly configures and uses best-in-class middleware for performance, security, logging. Registers middleware in correct order.

 - Models represent a single kind of thing in the application. Uses junction tables appropriately. Uses migrations to manage changes to structure of database. Includes some seed data.

-Uses a database for storing application data.


### Stretch Goals
### Provide the following:
-The ability to follow specific users post

 - Increase User-user capabilities
Eg. File Sharing, engagement assets/capabilities
 - Monte Carlo Simulation based on user input


#### Code Snippets
  <!-- put some cool code you're proud off here -->

```js
router.post('/comments/:category', requireAuth, async (req, res, next) => {
    const cat = req.params.category
    console.log(cat);

    const { category, userID, commentBody } = req.body;

    if (category && userID && commentBody) {
        console.log(category, userID, commentBody);
        try {
            await db.Comment.create({
                userID: userID,
                category: category,
                commentBody: commentBody
            })
            const records = await db.Comment.findAll()
            console.log(records);
            res.redirect(`/comments/${category}`)
            // res.send(records)
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('missing userID or comment body');
    }

})
 ```

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact
Brian Ayiteyfio: https://www.linkedin.com/in/brian-ayiteyfio-33a85a3a/

Kristal Davis Mitchell: https://www.linkedin.com/in/kristal-davis-mitchell-05777841/

Ethan Powell : https://www.linkedin.com/in/ethan-powell-b430b6ab/


<!-- ACKNOWLEDGEMENTS -->

JavaScript
HTML
CSS
Bootstrap
Sequelize
Express
Ejs
Node.js
Bcrypt