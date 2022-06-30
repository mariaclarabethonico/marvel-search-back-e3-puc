import { Router } from "express";
import { addUserService } from "../services/userService.mjs";
import { getUserByIdService } from "../services/userService.mjs";
import { getUserByEmailService } from "../services/userService.mjs";
import { updateUserService } from "../services/userService.mjs";

import { secret } from "../auth/createToken.mjs";
import { jwtConfig } from "../auth/createToken.mjs";
import { createJWTPayload } from "../auth/createToken.mjs";
import { jwtSign } from "../auth/createToken.mjs";

import { validateLogin } from "../middlewares/loginMid.mjs";
import { validateRegister } from "../middlewares/loginMid.mjs";

import TokenValidator from "../middlewares/TokenValidator.mjs";

const UserRouter = new Router();

UserRouter.post("/register", validateRegister, async (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  const newUser = await addUserService(user);
  return res.status(201).json(newUser);
});

UserRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const User = await getUserByIdService(id);
  return res.status(200).json(User);
});

UserRouter.post("/login", validateLogin, async (req, res, next) => {
  const user = await getUserByEmailService(req.body.email);
  try {
    if (!user.length)
      return res.status(404).json({ message: "Email not found" });
    const payload = createJWTPayload(user);
    const token = jwtSign(payload, secret, jwtConfig);
    return res.status(200).json({
      token,
      name: user[0].name,
      email: user[0].email,
      id: user[0].id,
      password: user[0].password,
    });
  } catch (error) {
    next(error);
  }
});

UserRouter.put("/update", TokenValidator, async (req, res) => {
  const {
    name: newUserName,
    email: newEmail,
    password: newPassord,
    id: userId,
  } = req.body;
  await updateUserService(newUserName, newEmail, newPassord, userId);
  res.status(200).send({ message: "User updated sucessfully" });
});

export default UserRouter;
