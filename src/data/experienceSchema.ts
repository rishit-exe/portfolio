import { z } from "zod";

export const CertificationSchema = z.object({
  title: z.string(),
  link: z.string().url().optional(),
  company: z.string(),
  location: z.string().optional(),
  period: z.string().optional(),
  description: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  achievements: z.array(z.string()).optional(),
  // optional per-entry logo path
  logo: z.string().optional(),
  // optional Tailwind classes to control logo size, e.g. "w-15 h-15 sm:w-12 sm:h-12"
  logoSize: z.string().optional(),
});

export const CertificationsSchema = z.array(CertificationSchema);

export const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  location: z.string().optional(),
  period: z.string().optional(),
  description: z.string().optional(),
  achievements: z.array(z.string()).optional(),
  logo: z.string().optional(),
  logoSize: z.string().optional(),
});

export const EducationsSchema = z.array(EducationSchema);

export type Certification = z.infer<typeof CertificationSchema>;
export type Education = z.infer<typeof EducationSchema>;

export function parseCertifications(data: unknown) {
  return CertificationsSchema.parse(data);
}

export function parseEducations(data: unknown) {
  return EducationsSchema.parse(data);
}
