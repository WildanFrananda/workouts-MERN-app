# Workouts MERN App

![Workouts MERN App](https://github.com/WildanFrananda/workouts-MERN-app/raw/main/frontend/public/logo.png)

This repository contains the source code for a Workouts MERN (MongoDB, Express.js, React.js, Node.js) application. The app allows users to track their workouts, including exercises performed, sets, repetitions, and weights. It provides a user-friendly interface for managing and visualizing workout data.

## Features

- User registration and authentication: Users can create an account, log in, and log out securely.

- Workout tracking: Users can create and manage their workouts, add exercises to each workout, and record sets, repetitions, and weights for each exercise.

- Dashboard: Users have access to a personalized dashboard that provides an overview of their workout history and statistics.

- Exercise library: The app includes a pre-defined library of exercises, which users can choose from when creating their workouts.

- Progress charts: Users can view their progress over time through intuitive charts and graphs.

- Responsive design: The app is designed to work seamlessly on different devices and screen sizes.

## Technologies Used

- MongoDB: A popular NoSQL database used for storing workout and user data.

- Express.js: A flexible web application framework for building the server-side of the app.

- React.js: A JavaScript library for building user interfaces, used to create the frontend of the app.

- Node.js: A JavaScript runtime used to execute server-side code.

- Mongoose: An Object-Data Mapping (ODM) library for MongoDB, used to simplify database operations.

- Chart.js: A JavaScript charting library used for visualizing workout data.

- Bootstrap: A CSS framework used for responsive and modern UI design.

## Getting Started

To get started with the Workouts MERN App, follow these steps:

1. Clone the repository:

```bash

git clone https://github.com/WildanFrananda/workouts-MERN-app.git

```

2. Install dependencies for both the frontend and backend:

```bash

# Install frontend dependencies

cd client

npm install

# Install backend dependencies

cd ../server

npm install

```

3. Set up environment variables:

Create a `.env` file in the `backend` directory and configure the following variables:

```

MONG_URI=<your_mongodb_uri>

JWT_SECRET=<your_jwt_secret>

```

4. Run the development server:

```bash

# Run frontend and backend concurrently

cd ../client

npm start

cd ../server

npm run dev

```

5. Open your browser and visit `http://localhost:3000` to access the Workouts MERN App.

## Contributing

Contributions to the Workouts MERN App are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

When contributing, please ensure that your code follows the existing code style and conventions. Include tests if applicable and provide a clear description of your changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- The Workouts MERN App was inspired by the desire to create a comprehensive and user-friendly workout tracking application.

- Special thanks to the contributors of the libraries and frameworks used in this project for their excellent work.
