"use server";

import Page from "./page.client";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import prisma from "../../../../libs/prisma";

export default async function Edit() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const user = await prisma.user_data.findUnique({
    where: { id: data.user.id },
  });

  return (
    <Page
      email={user?.email || ""}
      profile_image={user?.profile_image || 0}
      uuid={user?.id || ""}
    />
  );
}
