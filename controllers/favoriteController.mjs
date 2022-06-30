import { Router } from "express";
import deleteFavoriteService from "../services/favoriteService.mjs";
import getFavoriteService from "../services/getFavoriteService.mjs";
import addFavoriteService from "../services/addFavoriteService.mjs";

import DeleteValidation from "../middlewares/favoriteMid.mjs";
import FavoriteValidation from "../middlewares/FavoriteValidation.mjs";

const FavoriteRouter = new Router();
FavoriteRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const favorite = await getFavoriteService(id);
  return res.status(200).json(favorite);
});
FavoriteRouter.post("/", FavoriteValidation, async (req, res) => {
  const { id_favorite, name, url_image, related, user_id } = req.body;
  const fav = { id_favorite, name, url_image, related, user_id };
  const newFavorite = await addFavoriteService(fav);
  return res.status(200).json(newFavorite);
});

FavoriteRouter.delete("/delete", DeleteValidation, async (req, res) => {
  const { id } = req.body;
  await deleteFavoriteService(id);
  return res.status(200).send({ message: "Favorite deleted sucessfully" });
});

export default FavoriteRouter;
