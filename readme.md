# JWT Authentication Starter (MERN)
<img width="990" alt="main page" src="https://github.com/deepak14ri/JWT-Authentication/assets/49471265/1f7ebeb2-53d4-4bb3-9167-a193d8e95772">

This is a starter app for a MERN stack application with authentication. This is for a SPA (Single Page Application) workflow that uses the [Vite](https://vite.dev) Build tool. 

It includes the following:

- Backend API with Express & MongoDB
- Routes for auth, logout, register, profile, update profile
- JWT authentication stored in HTTP-only cookie
- Protected routes and endpoints
- Custom middleware to check JSON web token and store in cookie
- Custom error middleware
- React frontend to register, login, logout, view profile, and update profile
- Applied CRUD operation in home page and filter on email and name basis
- React Bootstrap UI library
- React Toastify notifications

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- 

### Env Variables

`.env` contails Mongodb URI and secret key

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```


### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
![updatepage](https://github.com/deepak14ri/JWT-Authentication/assets/49471265/766209fe-1826-4595-a928-d1502da39e7b)
![Uploading main2.PNG…]()


