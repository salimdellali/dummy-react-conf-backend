# Dummy React Conf Backend

## IMPORTANT NOTE:
- this project was built initially as a MERN Stack app, and hosted on heroku on the free tier
- since heroku is shutting down their free tiers (or already did, depends on the time of reading this), I had to separate this project into a RESTful API, and a Dashboard, and host them on an alternative hosting (on onrender.com)

Please check the following repos:
- [Dummy React Conf Dashboard](https://github.com/salimdellali/dummy-react-conf-dashboard)
- [Dummy React Conf Server](https://github.com/salimdellali/dummy-react-conf-server)

---

#### Heroku build :

![Heroku](https://pyheroku-badge.herokuapp.com/?app=dummy-react-conf-backend&style=flat)

#### Built with :

[![badge](https://img.shields.io/static/v1?logo=mongodb&logoColor=ffffff&message=MongoDB&label=%20&color=47a248&style=flat)](https://www.mongodb.com/3)
[![badge](https://img.shields.io/static/v1?logo=express&logoColor=ffffff&message=Express.js&label=%20&color=000000&style=flat)](https://expressjs.com)
[![badge](https://img.shields.io/static/v1?logo=react&logoColor=61DAFB&message=React.js&label=%20&color=gray&style=flat)](https://reactjs.org)
[![badge](https://img.shields.io/static/v1?logo=node.js&logoColor=ffffff&message=Node.js&label=%20&color=339933&style=flat)](https://nodejs.org/en/)

#### App link :

[![badge](https://img.shields.io/static/v1?label=Visit%20Dashboard&message=Here&color=61DAFB&style=flat)](https://dummy-react-conf-backend.herokuapp.com)

#### Project status :

![badge](https://img.shields.io/badge/Project%20Status-Deprecated-important)

---

### Repo structure :

- Root folder `/` :
  - `dashboard/` folder : the control panel for admins of the React Conf ( using Create-React-App boilerplate ).
  - `middleware/` folder : functions that execute during the lifecycle of a request to the Express server, containes `auth` function for authentification using JWT .
  - `models/` folder : mongoose models provide an interface to the MongoDB database for creating, querying, updating and deleting documents.
  - `routes/` folder : application’s endpoints (URIs) to respond to requests, contains a RESTful API of the React Conf.
  - `UML Diagrams/` folder : UML Diagrams for better project description.

### Usage :

- This repo serves as the backend to the [Dummy React Conf Website](https://github.com/salimdellali/dummy-react-conf-website).
- A RESTful API is built to serve data to the **Dummy React Conf Website** and the **Dashboard** (the data is stored in a MongoDB Database).
- The **Dashboard** is made using the Create-React-App boilerplate, features include :
  - Authentification & Access Control:
    - 2 main users :
      - **admin** : has All permissions
      - **readOnlyAdmin** : has Read Only permission
  - View statistics :
    - Time left until the start of the conference
    - Number of speakers, sessions, attendees
    - ...etc
  - Perform CRUD operations on :
    - Conference information
    - Attendees
    - Speakers
    - Schedule and Sessions

---

### Main technologies used so far :

- Developing the RESTful API :

  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JSON Web Token

- Developing the Dashboard :

  - React.js
  - React Router
  - Material UI
  - Redux
  - Formik
  - Axios

- UML :

  - Visual Paradigm Online
