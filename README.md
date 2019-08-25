# Bookbroker
This is an application for trading books. It was built during the final two weeks of the [SALT 3 month bootcamp](https://salt.dev) by myself and three other team members (Viktor, Pauline, Bharathi) following the mob programming methodology.

## Technologies used
### Backend
* Node.js
* Express.js
* Postgresql
* Passport authentication
* Goodreads API (for fetching book related data)
* Socket.io (for chat functionality)

### Front-end
* React (bootstrapped through Create React App)
* React Styled Components
* React Router DOM
* PNotify

## Run application
To run the application, create a postgresql database named 'project' as well as require a Goodreads api key. 
Then create a .env file in the root folder and populate it with values for DB_HOST, DB_USER, DB, DB_PORT and GOODREADS_KEY.
Install all dependencies. Then run 'npm run reset-db' from the root folder, followed by 'npm start'. You should be able to access to project from http://localhost:8000.