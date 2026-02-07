"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import dbConnect from "../db";

import User from "@/models/User"; // Your Mongoose Model

export async function registerProAction(formData: any) {
  try {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    const isAuth = await isAuthenticated();

    if (!isAuth || !user) {
      return {
        success: false,
        message: "Unauthorized. Please sign in via Kinde.",
      };
    }

    await dbConnect();

    // Map the Kinde ID to your Database 'kindeId' or 'authId' field
    // We also use the email from Kinde to ensure data integrity
    const profileData = {
      ...formData,
      role: "pro",
      kindeId: user.id,
      email: user.email,
    };

    // Upsert: Find by kindeId, update if exists, create if not
    const updatedProfile = await User.findOneAndUpdate(
      { kindeId: user.id },
      profileData,
      { new: true, upsert: true, runValidators: true },
    );

    revalidatePath("/pro/register");

    return {
      success: true,
      message: "Professional profile synced with Kinde!",
      data: JSON.parse(JSON.stringify(updatedProfile)),
    };
  } catch (error: any) {
    console.error("Kinde DB Sync Error:", error);
    return {
      success: false,
      message: error.message || "Failed to update your professional profile.",
    };
  }
}
