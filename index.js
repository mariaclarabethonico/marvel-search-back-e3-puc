import * as path from "path";
import pkg from 'express';
const { express } = pkg;
import bodyParser from "body-parser";
import cors from "cors";

import FavoriteRouter from "./controllers/favoriteController.mjs";
import ComicRouter from "./controllers/comicController.mjs";
import CharacterRouter from "./controllers/characterController.mjs";
import UserRouter from "./controllers/userController.mjs";
import {} from "dotenv/config";

const app = pkg();
app.use(cors());
app.use(bodyParser.json());
app.use("/favorite", FavoriteRouter);
app.use("/comic", ComicRouter);
app.use("/character", CharacterRouter);
app.use("/user", UserRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));


