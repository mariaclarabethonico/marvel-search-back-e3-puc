import getByUserId from "../models/getByUserId.mjs";

const FavoriteValidation = async (req, res, next) => {
  const { id_favorite: favorite, user_id } = req.body;
  const getUser = await getByUserId(user_id);
  const filter = getUser.find((element) => element.id_favorite == favorite);
  if (filter)
    return res.status(401).json({ message: "It is already your favorite" });
  next();
};


export default FavoriteValidation;
