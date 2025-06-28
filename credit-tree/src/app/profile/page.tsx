"use server";

import Page from "./page.client";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import prisma from "@/app/prisma";

export default async function Profile() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const user = await prisma.user_data.findUnique({
    where: { id: data.user.id },
  });

  console.log("user:", user);

  // console.log("User data:", data.user);

  return (
    <>
      <Page
        name={user?.name || ""}
        email={user?.email || ""}
        profile_image={user?.profile_image || 0}
      />
    </>
  );
}
