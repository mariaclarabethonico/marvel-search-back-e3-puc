import connection from "./connection.mjs";

const getFavorite = async (id) => {
  const [favorite] = await connection.query(
    "SELECT * FROM favorite where user_id = ?",
    [id]
  );
  return favorite;
};

export default getFavorite;
