export const paginationParamsIsValid = (offset, limit, maxLimit) => {
  const typeParamsValids = !isNaN(Number(offset)) && !isNaN(Number(limit));

  if (typeParamsValids) {
    return offset > 0 && maxLimit > limit && limit > 0;
  }

  return false;
};
