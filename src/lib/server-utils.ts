import "server-only";

import { redirect } from "next/navigation";
import { auth } from "./auth";
import { Pet, User } from "@prisma/client";
import prisma from "./db";

export async function checkAuth() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return session;
}

export async function getPetByID(petID: Pet["id"]) {
  const pet = await prisma?.pet.findUnique({
    where: {
      id: petID,
    },
  });
  return pet;
}

export async function getUserByEmail(email: User["email"]) {
  const user = await prisma?.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

export async function getPetByUserID(userID: User["id"]) {
  const pets = await prisma?.pet.findMany({
    where: {
      userId: userID,
    },
  });
  return pets;
}
