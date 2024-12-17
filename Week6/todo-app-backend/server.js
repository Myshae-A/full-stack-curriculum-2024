// Importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Creating an instance of Express // created an express server
const app = express();

// Loading environment variables from a .env file into process.env
require("dotenv").config();

// Importing the Firestore database instance from firebase.js
const db = require("./firebase");

// Middlewares to handle cross-origin requests and to parse the body of incoming requests to JSON
app.use(cors());
app.use(bodyParser.json());

// Your API routes will go here...
app.use(express.json())

// GET: Endpoint to retrieve all tasks
app.get("/tasks", async (req, res) => {
  try {
    // Fetching all documents from the "tasks" collection in Firestore
    const snapshot = await db.collection("tasks").get();
    
    let tasks = [];
    // Looping through each document and collecting data
    snapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,  // Document ID from Firestore
        ...doc.data(),  // Document data
      });
    });
    
    // Sending a successful response with the tasks data
    res.status(200).send(tasks);
  } catch (error) {
    // Sending an error response in case of an exception
    res.status(500).send(error.message);
  }
});

// GET: Endpoint to retrieve all tasks for a user
app.get('tasks/:userId', async (req, res) => {
  const userId = req.params.userId;
  const userTasks = tasks.filter(task => task.userId === userId);
  res.status(200).send(userTasks);
});

// POST: Endpoint to add a new task
app.post("/tasks", async (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).send(newTask);
});

// DELETE: Endpoint to remove a task
app.delete('/tasks/:taskId', async (req, res) => {
  const taskId = req.params.taskId;
  tasks = tasks.filter(task => task.id !== taskId);
  res.status(200).send(`taskId: ${taskId} is deleted`);
});

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
  console.log('testing?');
});