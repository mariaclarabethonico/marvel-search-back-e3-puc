import connection from './connection.mjs';

const addFavorite = async (fav) => {
    const { id_favorite, name, url_image, related, user_id } = fav;
    return connection
      .query(
        "INSERT INTO favorite (id_favorite, name, url_image, related, user_id) VALUES (?, ?, ?, ?, ?)",
        [id_favorite, name, url_image, related, user_id]
      )
      .then((result) => result[0]);
  };

  export default addFavorite;