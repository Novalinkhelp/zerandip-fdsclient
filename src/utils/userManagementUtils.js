export const generateUniqueUsername = (nameOfTheUser) => {
  const randomNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  const formattedName = nameOfTheUser.replace(/\s+/g, "").toLowerCase();
  return `${formattedName}${randomNumber}`;
};
