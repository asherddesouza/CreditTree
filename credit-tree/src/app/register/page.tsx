"use server";

import Page from "./page.client";
import prisma from "@/app/prisma";
import validator from "validator";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import ElectoralRollV1Seeder from "@/utils/seeding/creditreport-electoral-roll-v1-seeder";
import AddressesV1Seeder from "@/utils/seeding/creditreport-addresses-v1-seeder";
import CourtOrdersV1Seeder from "@/utils/seeding/creditreport-court-orders-v1-seeder";
import FinancialAccountsV1Seeder from "@/utils/seeding/creditreport-financial-accounts-v1-seeder";
import FraudWarningsV1Seeder from "@/utils/seeding/creditreport-fraud-warnings-v1-seeder";
import InsolvenciesV1Seeder from "@/utils/seeding/creditreport-insolvencies-v1-seeder";
import MonthlyScoresV1Seeder from "@/utils/seeding/creditreport-monthly-scores-v1-seeder";
import NoticesV1Seeder from "@/utils/seeding/creditreport-notices-v1-seeder";
import PaymentHistoryOverviewV1Seeder from "@/utils/seeding/creditreport-payment-history-overview-seeder-v1";
import RankedInsightsByMonthV1Seeder from "@/utils/seeding/creditreport-ranked-insights-by-month-v1-seeder";
import SeedDatabase from "@/utils/seeding/seed-database";

export async function createUser(prevState: any, formData: FormData) {
  const supabase = await createClient();

  let name = formData.get("name");
  let email = formData.get("email");
  let password = formData.get("password");
  let confirmPassword = formData.get("confirmPassword");

  name = name ? (name as string).trim() : "";
  email = email ? (email as string).trim() : "";
  password = password ? (password as string).trim() : "";
  confirmPassword = confirmPassword ? (confirmPassword as string).trim() : "";

  let pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    return { message: "Error: You can't have any empty fields." };
  }

  if (!validator.isEmail(email as string)) {
    return { message: "Error: Invalid email address." };
  }

  if (!validator.isLength(password, { min: 8 })) {
    return {
      message: "Your password must be at least 8 characters long.",
    };
  }

  if (!validator.equals(password, confirmPassword)) {
    return {
      message: "Your passwords don't match. Please retry.",
    };
  }

  if (!pattern.test(password)) {
    return {
      message:
        "Your password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    };
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { message: "There was an error when signing up." };
  }

  const supabaseUserId = data.user?.id;

  if (!supabaseUserId) {
    return { message: "Couldn't retrieve user ID after signing up." };
  }

  const user = await prisma.user_data.create({
    data: {
      id: supabaseUserId,
      name,
      email,
    },
  });

  SeedDatabase(
    [
      "paymentHistory",
      "notices",
      "addresses",
      "electoralRoll",
      "courtOrders",
      "financialAccounts",
      "fraudWarnings",
      "insolvencies",
      "monthlyScores",
      "rankedInsightsByMonth",
    ],
    user.id
  );

  revalidatePath("/tree");
  redirect("/tree");
}

export default async function CreateAccount() {
  return (
    <>
      <Page />
    </>
  );
}
