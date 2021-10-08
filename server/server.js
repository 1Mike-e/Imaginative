import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
