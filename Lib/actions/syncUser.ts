// app/actions/sync-user.ts
"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import User from "@/models/User"; // Your Mongoose Model
import dbConnect from "../db";

export async function syncUser() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/");
  }

  const kindeUser = await getUser();
  if (!kindeUser || !kindeUser.id) {
    throw new Error("User not found in Kinde session");
  }

  await dbConnect();

  // Mongoose findOneAndUpdate with upsert: true
  // This finds the user by kindeId, or creates them if missing
  const user = await User.findOneAndUpdate(
    { kindeId: kindeUser.id },
    {
      email: kindeUser.email,
      firstName: kindeUser.given_name,
      lastName: kindeUser.family_name,
    },
    {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    },
  );

  return JSON.parse(JSON.stringify(user)); // Plain object for Client Components
}
