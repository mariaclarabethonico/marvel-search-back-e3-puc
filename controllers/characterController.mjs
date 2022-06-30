import { Router } from "express";
import {
  characterDataByName,
  characterDataById,
} from "../services/marvelService.mjs";
import { getCharacters } from "../models/marvelModel.mjs";
const CharacterRouter = new Router();

CharacterRouter.get("/name/:name", async (req, res) => {
  const { name } = req.params;
  const character = await characterDataByName(name);
  return res.status(200).json(character);
});

CharacterRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const character = await characterDataById(id);
  return res.status(200).json(character);
});

CharacterRouter.get("/all/:offset", async (req, res) => {
  const { offset } = req.params;
  const character = await getCharacters(offset);
  return res.status(200).json(character);
});

export default CharacterRouter;
