import connection from "./connection.mjs";

const deleteFavorite = async (favorite_id) => {
  await connection.query("DELETE FROM favorite where id = ?", [favorite_id]);
  return null;
};

export default deleteFavorite;
