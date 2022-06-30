import connection from "./connection.mjs";

const getByUserId = async (user_id) => {
    const [user] = await connection.query(
      "SELECT id_favorite FROM favorite where user_id = ?",
      [user_id]
    );
    return user;
  };

  export default getByUserId;