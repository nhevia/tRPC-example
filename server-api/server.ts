import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  res.send({ data: "Hello from backend" });
});

app.listen(port, () => {
  console.log("server listening on port", port);
});
