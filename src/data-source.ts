import "reflect-metadata";
import { DataSource } from "typeorm";
import { Course } from "./entity/Course";
import { Modules } from "./entity/Modules";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "mydb",
  synchronize: true,
  logging: false,
  entities: [Modules, Course],
  migrations: [],
  subscribers: [],
});
