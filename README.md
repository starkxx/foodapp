 Food Delivery App

## Description

This food delivery app was created using the MERN stack and allows users to easily order fresh food items. Users can log in and add items to their cart. The app is built using Vite and uses an .env file to store environment variables such as API keys.

## Features

### User authentication: Users can create accounts and log in to the app.

<img width="700" alt="User authentication demo" src="./client/src/assets/demo1.gif">

### Add to Cart: Users can add food items to their cart 

<img width="700" alt="Add to Cart demo" src="./client/src/assets/demo2.gif">

### Responsive design: The app is designed to be used on desktop and mobile devices.

<img width="700" alt="Responsive design demo" src="./client/src/assets/demo3.gif">

## Technologies Used

- React
- Redux
- NodeJS
- ExpressJS
- MongoDB
- TailwindCSS
- REST API


## Getting Started
1. Clone the Repository
sh
Copy code -git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Set Up the Backend
Navigate to the server directory:
sh
Copy code
cd server

Install Backend Dependencies:
If you are using npm:
sh
Copy code
npm install
If you are using yarn:

sh
Copy code
yarn install

Configure Environment Variables:

Create a .env file in the server directory and add your environment variables. Example:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydatabase
JWT_SECRET=mysecretkey

Start the Backend Server:
If you are using npm:
sh
Copy code
npm start

If you are using yarn:
sh
Copy code
yarn start

The server should be running on http://localhost:3000.

3. Set Up the Frontend
Navigate to the client directory:

sh
Copy code
cd ../client
Install Frontend Dependencies:

If you are using npm:
sh
Copy code
npm install

If you are using yarn:
sh
Copy code
yarn install

## Configure Environment Variables:
Create a .env file in the client directory and add your environment variables. Example:
env
Copy code
REACT_APP_API_BASE_URL=http://localhost:5000
Start the Frontend Application:

If you are using npm:
sh
Copy code
npm start

If you are using yarn:
sh
Copy code
yarn start

The client application should be running on http://localhost:3000.

Usage
Once both the backend server and the frontend application are running, you can access the full-stack application by navigating to http://localhost:3000 in your web browser.

Troubleshooting
Backend Not Starting: Ensure that the backend environment variables are correctly configured and that the MongoDB server is running if you're using MongoDB.
Frontend Not Loading Data: Verify that the REACT_APP_API_BASE_URL is correctly set and that the backend server is running and accessible.
