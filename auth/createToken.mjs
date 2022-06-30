import jwt from "jsonwebtoken";
const secret = "Thor is the strongest Avenger";

const jwtSign = (payload, jwtSecret, jwtConfig) =>
  jwt.sign(payload, jwtSecret, jwtConfig);

const jwtConfig = {
  expiresIn: "150m",
  algorithm: "HS256",
};

const createJWTPayload = (user) => ({
  iss: "MarvelApp",
  aud: "indentity",
  userData: user,
});

export {
  secret,
  jwtConfig,
  createJWTPayload,
  jwtSign,
};


