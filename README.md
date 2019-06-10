# ekki-mvp
## WIP!

## Setup and Running
To setup the application, the backend requires declararion of env variables, as exemplified:

- NODE_ENV=development
- DB_URI=linkToYourDb
- PORT=4266
- KEY=aJWTKey

With env variables set, to start the app just run ```yarn start``` in root folder. The app uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run client and backend services.

## Commit style

Based in [karma git commit msg](http://karma-runner.github.io/4.0/dev/git-commit-msg.html).

## Modules

### Client Stack
* React
* Redux
* React Router Dom
* Redux-Saga
* Styled Components
* ...

### Backend Stack
* Express
* Mongoose
* Body-parser
* Cors
* JsonWebToken
* ...

### To do

* Unit tests !!!!!
* Improve validations
* Improve Error infos
* Add loggers
* Deploy (Heroku or Netlify)
* Improve UX and UI
