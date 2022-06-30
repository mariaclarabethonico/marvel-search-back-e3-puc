import pkg from "jsonwebtoken";
const { jwt } = pkg;
import { secret } from "../auth/createToken.mjs";
import { getUserByEmail } from "../models/userModel.mjs";

const TokenValidator = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) return res.status(401).json({ message: "Please Log in" });
    const { userData } = jwt.verify(token, secret);
    const tokenUserEmail = userData[0].email;
    const user = await getUserByEmail(tokenUserEmail);
    if (!user.length)
      return res
        .status(404)
        .json({ message: "Email not found. Please register yourself" });
    next();
  } catch (error) {
    next(error);
  }
};

export default TokenValidator;
