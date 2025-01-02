import { pool } from "../db/index.js";

export class BookModel {
  static async getBooks(offset, limit) {
    try {
      const query = await pool.query(
        `SELECT * FROM books OFFSET ${offset} LIMIT ${limit}`
      );

      return query.rows;
    } catch (error) {
      return new Error("Cannot get books.");
    }
  }
  static async getBookById(id) {
    try {
      const query = await pool.query(`SELECT * FROM books WHERE id = "hehe"`);
      return query.rows;
    } catch (error) {
      return new Error("Cannot get book.");
    }
  }
  static async getBooksByGenders(genders = []) {
    try {
      const query = await pool.query(
        `SELECT * FROM books_genders WHERE id = ${genders}`
      );
      return query.rows;
    } catch (error) {
      console.log(error.message);
      return new Error("Cannot get books.");
    }
  }
}
