import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/test", (req, res) => {
  res.status(200).send({ message: "Welcome to this API!" });
});

app.listen(port, () => {
  console.log(`Server Listening in http://localhost:${port}`);
});
