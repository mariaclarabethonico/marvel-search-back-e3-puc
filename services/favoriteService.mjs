import deleteFavorite from "../models/deleteFavorite.mjs";

const deleteFavoriteService = async (favorite_id) =>
  deleteFavorite(favorite_id);

export default deleteFavoriteService;
