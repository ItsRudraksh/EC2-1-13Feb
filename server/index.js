import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import path from "path"; //FOR DEPLOYMENT
// import url from "url"; //FOR DEPLOYMENT
dotenv.config();

const app = express();

// const __filename = url.fileURLToPath(import.meta.url); //FOR DEPLOYMENT
// const __dirname = path.dirname(__filename); //FOR DEPLOYMENT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "../client/dist"))); //FOR DEPLOYMENT

app.get("/", (req, res) => {
  res.send("Hello World! it rudraksh ec-2 backend");
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
// }); //FOR DEPLOYMENT

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
