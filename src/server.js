const app = require("./app")

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Welcome to the Food Explorer API!");
});

app.listen(port, () => {
  console.log(`🔥 Server running on port ${port}`)
});
