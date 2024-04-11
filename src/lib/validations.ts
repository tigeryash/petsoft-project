import { z } from "zod";
import { DEFAULT_PET_IMAGE } from "./constant";

export const petIdSchema = z.string().cuid();

export const petFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Name is required" })
      .max(100, { message: "Name is too long" }),
    ownerName: z
      .string()
      .trim()
      .min(1, { message: "Owner name is required" })
      .max(100, { message: "Owner name is too long" }),
    imageUrl: z.union([
      z.literal(""),
      z.string().url({ message: "Image URL should be a valid URL" }),
    ]),
    age: z.coerce.number().int().positive().max(9999),
    notes: z.union([
      z.literal(""),
      z.string().trim().max(1000, { message: "Notes is too long" }),
    ]),
  })
  .transform((data) => ({
    ...data,
    imageUrl: data.imageUrl || DEFAULT_PET_IMAGE,
  }));

export type TPetForm = z.infer<typeof petFormSchema>;

export const authSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().max(100),
});

export type TAuth = z.infer<typeof authSchema>;
