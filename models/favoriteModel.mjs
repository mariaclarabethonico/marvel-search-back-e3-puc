import connection from "./connection.mjs";

const getFavoriteById = async (id) => {
  const [favorite] = await connection.query(
    "SELECT * FROM favorite where id = ?",
    [id]
  );
  return favorite;
};

export default getFavoriteById;


