import { Router } from "express";
import { validationPaginationParams } from "../middlewares/index.js";
import { BookController } from "../controller/index.js";

export const booksRouter = Router();

//Handlers:
booksRouter.get("/", [validationPaginationParams, BookController.getBooks]);
booksRouter.get("/:id", BookController.getBookById);
