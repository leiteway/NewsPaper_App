# TECHTODAY 📰💻
This project is a proposal of a sustainable development of a news management web application. Our website have a low-consumption design, using dark mode with a monotone palette of colours, system fonts that are already loaded on all the devices and images in webp format to reduce their weight. The user flow is easy and intuitive, and we have taken into account the UX without barriers avoiding pop-up banners and using dark patterns. We have also not included videos or animations to optimize the loading time of the website.


# Index

+ [Description](#description)
+ [Project Configuration](#project-configuration)
+ [Initialize the Postman](#initialize-the-postman)
+ [Tests](#tests)
+ [Project Structure ](#project-structure)
+ [Technologies](#technologies)
+ [Authors](#authors)
+ [Contributions](#contributions)

# Description
The project has been built with two roles: admin and user. We have encrypted user sessions with username and password. On the one hand the *admin* is able to create, delete, edit and view news articles, and on the other hand the *user* can browse articles and also can use the like button which increment the news they really love.


# Project Configuration

1. **Clone the Repository:**
`bash`
* Copy code in your terminal: ```git clone https://github.com/pointfs/NEWSPAPER.git```
* First enter to the folder: ```cd client```
* Copy code to make the server run: `npm run dev`
* This will start the server __http://localhost:5173__ using the database on MySQL Workbench.

2. **Install Dependencies:** 
`bash`
* Copy code: `npm install`
* Copy code in your terminal, to enter the repository folder: `cd NEWSPAPER`


# Initialize the Postman
Methods in Postman to view, add, edit, and delete movie posters in our database.


# Tests
* Copy code: `npm run test` <br>
This will run the tests.


# Project Structure
We have built the folder ecosystem for our project in the Front-end and Back-end in an orderly and methodical way. We have divided the project in two folders called _client_ and _server_, and we have organized the files in each one correctly for the proper behaviour and understanding of the repository. We are going to mention the most important ones.
On the _client_ folder: 
* __node_modules:__ contains all the dependencies of your project. When you install packages using npm, they are stored here.
* __db_server:__ plays a crucial role in ensuring the proper functioning and security of the database server.
* __src:__ this is where the source code of your React application resides. It typically contains the following subfolders:
1. *components:* contains reusable React components that make up our application's UI. Each component folder contains the subfolders of styles, CSS files or preprocessor files for styling your components.
2. *pages:* contains React components that represent different pages of our application.
3. *assets:* holds static assets like images, fonts, or other media files used in your application.
4. *services:* contains modules for interacting with external services or APIs, in this case an archive of JavaScript.
5. *context:* contains information about the context or environment in which the application operates.
6. *routes:* defines the various routes or endpoints available in the application's API or web server.

On the _server_ folder: 
* __controllers:__ to handle HTTP requests.
* __database:__ configuration of connections with the database.
* __helpers:__ contains the import and export validations from express-validator.
* __models__: the model of database.
* __node_modules:__ contains all the dependencies of your project. When you install packages using npm, they are stored here.
* __routes:__ route definitions for the methods of the API.
* __test:__ unit and integration tests in one file.
* __validators:__ contains the validations of the methods of the CRUD.


# Technologies
<img width="40" src="https://cdn.worldvectorlogo.com/logos/trello.svg">&nbsp;
<img width="40" src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg">&nbsp;
<img width="40" src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-plain.svg" >&nbsp;
<img width="40" src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain.svg" >&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" >&nbsp;
<img width="40" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" >&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" >&nbsp;
<img width="40" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png">&nbsp;
<img width="40" src="https://media.licdn.com/dms/image/C560BAQHQH8_cFFK_3A/company-logo_200_200/0/1630606810347/drawsql_logo?e=2147483647&v=beta&t=aWOh8DYdF-g2BWxZPlX4b3vXC2Omo0TOSxqO0JHKvws">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png">&nbsp;
<img width="40" src="https://cdn.worldvectorlogo.com/logos/nodemon.svg">&nbsp;
<img width="40" src="https://express-validator.github.io/img/logo.svg">&nbsp;
<img width="40" src="https://static-00.iconduck.com/assets.00/sequelize-original-icon-885x1024-r8dswyvj.png">&nbsp;


# Authors
 - Scrum Master: [J.Leite](https://github.com/leiteway)
 - Product Owner: [Fátima Cosme](https://github.com/pointfs)
 - Web Developer: [Desirée Carrizosa](https://github.com/DesireeCSilva)
 - Web Developer: [Alba Martín](https://github.com/albamartinmz)
 - Web Developer: [Kristy Neiras](https://github.com/krisneiras)


# Contributions
Contributions are welcome! If you find any problems or have suggestions for improvement, please create an issue or make a pull request.
   
**[⬆️ Back to Index](#index)**

