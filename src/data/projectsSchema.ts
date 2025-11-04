import { z } from "zod";

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  liveUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  featured: z.boolean().optional(),
  highlights: z.array(z.string()).optional(),
  // optional per-project logo/cover
  logo: z.string().optional(),
});

export const ProjectsSchema = z.array(ProjectSchema);

export type Project = z.infer<typeof ProjectSchema>;

export function parseProjects(data: unknown) {
  return ProjectsSchema.parse(data);
}
