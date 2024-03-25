import { Sequelize } from "sequelize";
import { stand } from "./stand.js";

const dbStand = stand().db;

export const db = new Sequelize(

  dbStand.name,
  dbStand.username,
  dbStand.password,
  {
    host: dbStand.host,
    port: dbStand.port,
    dialect: 'postgres'
  }
);