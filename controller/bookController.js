import { request, response } from "express";
import { books as data } from "../data.js";
import { BookMovel } from "../model/index.js";

export class BookController {
  static async getBooks(req = request, res = response) {
    const { offset, limit } = req.query;

    const { start, end } = {
      start: (offset - 1) * limit,
      end: limit,
    };

    const books = await BookMovel.getBooks(start, end);
    res.json(books);
  }

  static async getBookById(req = request, res = response) {
    const id = Number(req.params.id);

    const book = data.find((item) => item.id === id);

    if (!book) {
      return res.status(404).json({ ok: false, msg: "Book not found" });
    }

    res.json(book);
  }

  static async getBooksByGenders() {}
}
