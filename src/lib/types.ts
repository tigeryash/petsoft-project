import { Pet } from "@prisma/client";

export type PetEssentials = Omit<
  Pet,
  "id" | "createdAt" | "updatedAt" | "createAt" | "userId"
>;