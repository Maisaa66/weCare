const app = require("./server");
const express = require("express");
const usersRoutes = require("./Routes/users.routes");

// Middleware to parse data-body from request
app.use(express.json());

app.use("/api/v1/users", usersRoutes);
