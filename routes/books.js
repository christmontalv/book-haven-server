import { Router } from "express";
import { books as data } from "../data.js";

export const booksRouter = Router();

//Handlers:

booksRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = data.find((book) => book.id === id);

  if (book) {
    res.contentType("json").json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

booksRouter.get(
  "/",
  (req, res, next) => {
    let { offset, limit } = req.query;

    if (!offset && !limit) {
      return next();
    }

    const pagination = (offset - 1) * limit;
    const amount = offset * limit;

    const books = data.slice(pagination, amount);
    res.json(books);
  },
  (req, res, next) => {
    let { name } = req.query;

    if (!name) {
      next();
    }

    const bookByName = data.find(
      (book) => book.title.toLowerCase() === name.toLowerCase()
    );

    if (!bookByName) {
      res.status(404).send("Book not found");
    }
    res.json(bookByName);
  },
  (req, res) => {
    const books = data.slice(0, 10);
    res.json(books);
  }
);
