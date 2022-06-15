import { courseRepository } from "../repositories/courseRepository";

export async function findByName(name: string) {
  const course = await courseRepository.findBy({ name: name });
  return console.log(course);
}
