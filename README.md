# MERN Stack Project - Todo List App

A **Todo List App** built with the MERN stack (MongoDB, Express, React, and Node.js). This application allows users to create, update, delete, and mark tasks as completed, with features for user authentication and role-based access control.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- **User Authentication**: Register, log in, and secure routes using JWT authentication.
- **Role-based Access Control**: Users can only access and modify their own tasks.
- **Task CRUD Operations**: Create, read, update, and delete tasks.
- **Task Categorization**: Group tasks by categories, prioritize, and set due dates.
- **Responsive UI**: Built with React for a modern, mobile-friendly interface.
- **Real-time Data Updates**: Fetch and display tasks instantly after any change.

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone [https://github.com/your-username/mern-task-app.git](https://github.com/MARSIF123/TodoListApp.git)
   cd TodoListApp

2. **Install Dependencies**

- **Server-side**: Navigate to the `server` folder and install backend dependencies.

  ```bash
  cd server
  npm install  

- **Client-side**: Navigate to the `client` folder and install frontend dependencies.

  ```bash
  cd server
  npm install

3. **Configure Environment Variables**

Create a .env file in the server folder based on the Environment Variables section.

4. **Run the Application**

- **Backend**: Start the Express server (default port 5001).

  ```bash
  cd server
  npm start

- **Frontend**: Start the React App (default port 3000).

  ```bash
  cd server
  npm start

Open your browser and go to http://localhost:3000 to access the app.

## Configure Environment Variables

Create a `.env` file in the `server` folder and add the following values:


`CONNECTION_STRING=<Your MongoDB URI>`

`ACCESS_TOKEN_SECRET=<Your JWT Secret Key>`

`PORT=5001`

----------------------


## Usage

- **Register**: Create a new account to start managing tasks.
- **Login**: Log in with your credentials to access your personalized task list.
- **Create a Task**: Add a new task, including a title, description, due date, and priority level.
- **Update a Task**: Modify the details of a task or mark it as completed.
- **Delete a Task**: Remove a task from your list.
- **Filter Tasks**: View tasks based on completion status or priority to organize your workload effectively.

## API Documentation

### Authentication

- **POST /api/users/register** - Register a new user.
- **POST /api/users/login** - Authenticate and log in a user.

### Tasks

- **GET /api/tasks** - Retrieve all tasks for the logged-in user.
- **POST /api/tasks** - Create a new task.
- **PUT /api/tasks/:id** - Update a task by its ID.
- **DELETE /api/tasks/:id** - Delete a task by its ID.

## Screenshots

- **Login Page**: A user-friendly interface for authentication, allowing users to enter their credentials.
 ![image](https://github.com/user-attachments/assets/722e1675-c6c4-4a1c-9246-2ad485506a84)


- **Dashboard**: A comprehensive view displaying a list of tasks, with options to filter, update, and delete tasks.
 ![image](https://github.com/user-attachments/assets/c6751f08-e61b-4cec-8447-e6333634afcb)

- **Sidebar**: A toggle able sidebar displaying a logo, with options to search tasks.
 ![image](https://github.com/user-attachments/assets/ce62a9f7-ab3b-49bc-aed8-5adf7c602ea5)

- **Date Picker**: A user-friendly date & time picker.
 ![image](https://github.com/user-attachments/assets/3cb87014-21c6-428a-a0a2-410b9d1adfeb)




## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

