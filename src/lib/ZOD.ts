import { z } from "zod";

const ZOD = {
  addTaskForm: z.object({
    title: z.string().min(3, "title must be at least 3 to 20 charcters").max(20, "title must be at least 3 to 20 charcters"),
    description: z.string().min(3, "description must be at least 3 to 256 charcters").max(256, "description must be at least 3 to 256 charcters")
  }),
  updateTaskForm: z.object({
    id: z.string().uuid(),
    title: z.string().min(3, "title must be at least 3 to 20 charcters").max(20, "title must be at least 3 to 20 charcters"),
    description: z.string().min(3, "description must be at least 3 to 256 charcters").max(256, "description must be at least 3 to 256 charcters")
  }),
  ...z
}
export default ZOD