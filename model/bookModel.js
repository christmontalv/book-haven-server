import { pool } from "../db/index.js";

export class BookMovel {
  static async getBooks(offset, limit) {
    try {
      const query = await pool.query(
        `SELECT * FROM books OFFSET ${offset} LIMIT ${limit}`
      );

      return query.rows;
    } catch (error) {
      //#TODO: Request to error log
      return new Error("Cannot make the query to DATABASE.");
    }
  }
  static async getBookById(id) {
    try {
      const query = await pool.query(`SELECT * FROM books WHERE id = ${id}`);
      return query.rows;
    } catch (error) {}
  }
  static getBooksByGenders() {}
}
