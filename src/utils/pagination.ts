const isNumber = (value: string) => /^\d+$/.test(value);

export const getPagination = <T>(
  items: T[],
  postsPerPage = 2,
  currentPage = "1"
) => {
  if (!isNumber(currentPage)) {
    throw new Error("Not a number");
  }

  const currenPageInt = parseInt(currentPage, 10);
  const totalPosts = items.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (currenPageInt > totalPages) {
    throw new Error(`Page ${currenPageInt} does not exist`);
  }

  const offset = (currenPageInt - 1) * postsPerPage;
  const currentPosts = items.slice(offset, offset + postsPerPage);

  return {
    currentPosts,
    totalPages,
  };
};
