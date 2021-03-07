# Dummy React Conf Backend

#### Linked repo :

[Dummy React Conf Website](https://github.com/salimdellali/dummy-react-conf-website)

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

![badge](https://img.shields.io/badge/Project%20Status-Under%20Development-lightgray)

---

### Repo structure

- Root folder `/` : the RESTful API of the React Conf.
- `dashboard/` folder : the control panel for admins of the React Conf ( using Create-React-App boilerplate ).

### Usage

- This repo serves as the backend to the [Dummy React Conf Website](https://github.com/salimdellali/dummy-react-conf-website).
- A RESTful API is built to serve data to the **Dummy React Conf Website** and the **Dashboard** (the data is stored in a MongoDB Database).
- The **Dashboard** is made using the Create-React-App boilerplate, features include :
  - Authentification & Access Control:
    - 2 main users :
      - **admin** : has All permissions
      - **readOnlyAdmin** : has Read Only permission
  - Statistics :
    - Time left until the start of the conference
    - Number of attendees
    - ...etc
  - CRUD operations for :
    - Attendees
    - Speakers
    - Sessions

---

### Main technologies used so far :

- Developing the RESTful API :

  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JSON Web Token

- Developing the Dashboard :

  - React.js
  - Material UI
  - Redux
  - Formik
  - Axios
