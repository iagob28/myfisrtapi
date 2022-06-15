import { AppDataSource } from "./data-source";
import { addNewCourse } from "./methods/addNewCourse";
import { courseRepository } from "./repositories/courseRepository";

export const express = require("express");
export const routes = express();

AppDataSource.initialize()
  .then(async () => {
    routes.post("/courses", async (req, res) => {
      const { name, description, duration } = req.body;
      
      await addNewCourse({
        name,
        duration,
        description,
      });
      return res.status(201).send("Course added");
    });

    routes.get("/courses", async (req, res) => {
      const courses = await courseRepository.find();
      return res.status(201).send(courses);
    });
  })
  .catch((error) => console.log(error));
