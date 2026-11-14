const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP", message: "Service is running smoothly" });
});

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to TaskTrack-API!",
        endpoints: {
            getAllTasks: "GET /tasks",
            healthCheck: "GET /health"
        }
    });
});

app.get("/tasks", (req, res) => {
    res.json([
        { id: 1, title: "Complete OS Lab Assignment 2", status: "In Progress" },
        { id: 2, title: "Review Docker concepts", status: "Completed" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
