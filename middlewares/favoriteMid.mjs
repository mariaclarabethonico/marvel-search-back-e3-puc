import getFavoriteById from "../models/favoriteModel.mjs";

const DeleteValidation = async (req, res, next) => {
  const { id } = req.body;
  console.log(id, "id mid");
  const getFavorite = await getFavoriteById(id);
  if (getFavorite.length === 0)
    res.status(404).json({ message: "Favorite not found" });
  next();
};

export default DeleteValidation;
