import { paginationParamsIsValid } from "../helpers/index.js";

export const validationPaginationParams = (req, res, next) => {
  const { offset, limit } = req.query;

  if (!paginationParamsIsValid(offset, limit, 30)) {
    req.query = {
      offset: 1,
      limit: 10,
    };
  }
  next();
};
