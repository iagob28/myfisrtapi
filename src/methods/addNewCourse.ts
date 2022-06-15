import { Course } from "../entity/Course";
import { courseRepository } from "../repositories/courseRepository";

interface newCourseProps {
  name: string;
  duration: number;
  description?: string;
}

export async function addNewCourse({
  name,
  duration,
  description,
}: newCourseProps) {
  console.log("Adding new course on database");
  const isOnDb = await courseRepository.findBy({ name: name });

  if (isOnDb.length === 0) {
    const course = new Course();
    course.name = name;
    course.duration = duration;
    course.description = description;
    await courseRepository.save(course);
    return console.log("New course saved");
  } else return console.log("Course with same name of a previous one");
}
