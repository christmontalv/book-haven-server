import { request, response } from "express";
import { BookModel } from "../model/index.js";

export class BookController {
  static async getBooks(req = request, res = response) {
    const { offset, limit } = req.query;

    const { start, end } = {
      start: (offset - 1) * limit,
      end: limit,
    };

    const books = await BookModel.getBooks(start, end);
    res.json(books);
  }

  static async getBookById(req = request, res = response) {
    const id = Number(req.params.id);
    const book = await BookModel.getBookById(id);

    if (book instanceof Error) {
      return res.status(404).json({ ok: false, msg: book.message });
    }

    res.json(book);
  }

  static async getBooksByGenders(req = request, res = response) {
    const { genders, offset, limit } = req.query;

    console.log(genders);
    res.json({ ok: true });
  }
}
