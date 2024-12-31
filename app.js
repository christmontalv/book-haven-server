//init:
import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".development.env" });

const app = express();
const PORT = process.env.PORT || 3500;

//imports:
import { authRouter, booksRouter } from "./routes/index.js";

//config:
app.disable("x-powered-by");

//middlewares:
app.use([json()]);

//App Routes:
app.all("/", (req, res) => {
  res.contentType("text/plain").send("Book Haven Server");
});
app.use("/books", booksRouter);
app.use("/authentication", authRouter);

//not found:
app.use((req, res) => {
  res.status(404).send("Not found.");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
