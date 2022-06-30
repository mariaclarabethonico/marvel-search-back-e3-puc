import getFavorite from "../models/getFavorite.mjs";

const getFavoriteService = async (id) => getFavorite(id);

export default getFavoriteService;
