const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "DevOps Demo API is running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

app.get("/api/tasks", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Learn GitHub Actions",
      completed: false,
    },
    {
      id: 2,
      name: "Learn Docker",
      completed: false,
    },
  ]);
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;