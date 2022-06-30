import { createPool } from "mysql2/promise";

import {} from 'dotenv/config';

const config = {
  host: "us-cdbr-east-03.cleardb.com",
  user: "b9f50d46b81772",
  password: "2e2ae3e5",
  database: "heroku_0250d96296c0c45",
};

const connection = createPool(config);

export default connection;
