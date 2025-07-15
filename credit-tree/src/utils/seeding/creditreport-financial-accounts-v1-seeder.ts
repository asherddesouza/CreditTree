"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

type ScenarioKey = "noAccounts" | "manyAccounts";

function generateJsonData(uuid: string) {
  const jsonData = {
    noAccounts: {
      bureau: "EQUIFAX",
      market: "GB",
      accounts: null,
      reportId: "45200474",
      userUuid: uuid,
      reportTimestamp: 1752091331696,
    },
    manyAccounts: {
      bureau: "EQUIFAX",
      market: "GB",
      accounts: [
        {
          id: 0,
          loanType: null,
          accountId: "UmbLXgZPBOsVF9eV3TN25EgdPW1aB_FFYx03Z8Ad8Bo",
          addressId: "dvcYwtoAS66BxZzjJ5jq8ROAgdSDfXP1uCyVk5P4kOU=",
          creditType: null,
          accountType: "CurrentAccount",
          creditLimit: null,
          identifiers: [
            {
              type: "Raw",
              value: "teJMAX+zY+WdG4yOhzl534GeEz4NVsR2ah/QqqlmSXA=",
            },
          ],
          providerName: "FIRST DIRECT (I)",
          startBalance: { value: 0, currency: "GBP", decimals: 2 },
          accountStatus: "Normal",
          currentBalance: { value: 0, currency: "GBP", decimals: 2 },
          paymentHistory: [
            {
              limit: null,
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1749859200000,
              paymentAmount: null,
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
            {
              limit: null,
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1747180800000,
              paymentAmount: null,
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
            {
              limit: null,
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1681430400000,
              paymentAmount: null,
              paymentStatus: "Unknown",
              rawPaymentStatus: "U",
            },
          ],
          lastUpdatedDate: 1749859200000,
          accountOpenDates: { startDate: 1678752000000, throughDate: null },
          paymentFrequency: "Monthly",
          rawAccountStatus: null,
          revolvingBalance: null,
          personalDetailsId: "ijiGGF6pZGQFo80bH00u13DNpwJugZaFnRY-iI_Au40",
        },
        {
          id: 1,
          loanType: null,
          accountId: "KWU05gEM02j_9pikQCikbuIC0BrB4GCkr36gJpHb8HU",
          addressId: "dvcYwtoAS66BxZzjJ5jq8ROAgdSDfXP1uCyVk5P4kOU=",
          creditType: null,
          accountType: "CurrentAccount",
          creditLimit: {
            amount: { value: 5000, currency: "GBP", decimals: 2 },
            startDate: 1723161600000,
          },
          identifiers: [
            {
              type: "Raw",
              value: "g5E8ChXuBhZYFoOrXc8kR9+C8Qr8u4QkokAZkajopZc=",
            },
          ],
          providerName: "MONZO BANK LIMITED (I)",
          startBalance: { value: 0, currency: "GBP", decimals: 2 },
          accountStatus: "Normal",
          currentBalance: { value: 0, currency: "GBP", decimals: 2 },
          paymentHistory: [
            {
              limit: { value: 5000, currency: "GBP", decimals: 2 },
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1749686400000,
              paymentAmount: null,
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
            {
              limit: { value: 5000, currency: "GBP", decimals: 2 },
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1747008000000,
              paymentAmount: null,
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
            {
              limit: { value: 5000, currency: "GBP", decimals: 2 },
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1720742400000,
              paymentAmount: null,
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
          ],
          lastUpdatedDate: 1749686400000,
          accountOpenDates: { startDate: 1717200000000, throughDate: null },
          paymentFrequency: "Periodically",
          rawAccountStatus: null,
          revolvingBalance: null,
          personalDetailsId: "HYZyAxtJaNaAqTtSooPMZzdykiTXMwrlKMwMkz74x3g",
        },
        {
          id: 2,
          loanType: null,
          accountId: "Ck4IoP5ZCoBMmKAZXZvsjidXm3Vco5E3ZV7Gjs4dONo",
          addressId: "dvcYwtoAS66BxZzjJ5jq8ROAgdSDfXP1uCyVk5P4kOU=",
          creditType: null,
          accountType: "CreditCard",
          creditLimit: {
            amount: { value: 155000, currency: "GBP", decimals: 2 },
            startDate: 1746748800000,
          },
          identifiers: [
            {
              type: "Raw",
              value: "p0IvUMhRWr6QsBnZw4D3fzvRx2agjMtsDiq3iBL71w4=",
            },
          ],
          providerName: "CAPITAL ONE (EUROPE) PLC (I)",
          startBalance: { value: 0, currency: "GBP", decimals: 2 },
          accountStatus: "Normal",
          currentBalance: { value: 15000, currency: "GBP", decimals: 2 },
          paymentHistory: [
            {
              limit: { value: 155000, currency: "GBP", decimals: 2 },
              balance: { value: 15000, currency: "GBP", decimals: 2 },
              paymentDate: 1748995200000,
              paymentAmount: { value: 22600, currency: "GBP", decimals: 2 },
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
            {
              limit: { value: 20000, currency: "GBP", decimals: 2 },
              balance: { value: 3900, currency: "GBP", decimals: 2 },
              paymentDate: 1675468800000,
              paymentAmount: { value: 0, currency: "GBP", decimals: 2 },
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
          ],
          lastUpdatedDate: 1748995200000,
          accountOpenDates: { startDate: 1673568000000, throughDate: null },
          paymentFrequency: "Monthly",
          rawAccountStatus: null,
          revolvingBalance: null,
          personalDetailsId: "HYoHoTVWIjF1Aur1-E7Hc0Dt0lWqRKTZmCT7ZPA-NP8",
        },
        {
          id: 3,
          loanType: null,
          accountId: "mgPgmvkg0M33lXHSiaag5sGrdEHjoszOfIuXCWryriU",
          addressId: "dvcYwtoAS66BxZzjJ5jq8ROAgdSDfXP1uCyVk5P4kOU=",
          creditType: null,
          accountType: "CreditCard",
          creditLimit: {
            amount: { value: 500000, currency: "GBP", decimals: 2 },
            startDate: 1744156800000,
          },
          identifiers: [
            {
              type: "Raw",
              value: "x9VbOeTXfbVxPjIALZ3TrJ0IZWJXA2RhGuc7cmyj5lw=",
            },
          ],
          providerName: "AMEX GROUP - (I)",
          startBalance: { value: 0, currency: "GBP", decimals: 2 },
          accountStatus: "Normal",
          currentBalance: { value: 33600, currency: "GBP", decimals: 2 },
          paymentHistory: [
            {
              limit: { value: 500000, currency: "GBP", decimals: 2 },
              balance: { value: 33600, currency: "GBP", decimals: 2 },
              paymentDate: 1751328000000,
              paymentAmount: { value: 110200, currency: "GBP", decimals: 2 },
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
            {
              limit: { value: 200000, currency: "GBP", decimals: 2 },
              balance: { value: 14100, currency: "GBP", decimals: 2 },
              paymentDate: 1714521600000,
              paymentAmount: { value: 98700, currency: "GBP", decimals: 2 },
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
          ],
          lastUpdatedDate: 1751328000000,
          accountOpenDates: { startDate: 1711411200000, throughDate: null },
          paymentFrequency: "Monthly",
          rawAccountStatus: null,
          revolvingBalance: null,
          personalDetailsId: "uBOhcUjPBlXni8mdVbZ3qvKITQyTJhzZ8Mt7Fq-mPmc",
        },
        {
          id: 4,
          loanType: null,
          accountId: "qD64v2NyT94VE_JSk6wxQM59qCZKvoC_RSkmItpREo8",
          addressId: "dvcYwtoAS66BxZzjJ5jq8ROAgdSDfXP1uCyVk5P4kOU=",
          creditType: null,
          accountType: "Telecoms",
          creditLimit: null,
          identifiers: [
            {
              type: "Raw",
              value: "P4JZTDXoZE3E4ccOt6p2k9onIOJZ/hYF8xCWQPMmb9s=",
            },
          ],
          providerName: "VODAFONE LTD GEMINI (I)",
          startBalance: { value: 0, currency: "GBP", decimals: 2 },
          accountStatus: "Normal",
          currentBalance: { value: 0, currency: "GBP", decimals: 2 },
          paymentHistory: [
            {
              limit: null,
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1751328000000,
              paymentAmount: null,
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
            {
              limit: null,
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1711929600000,
              paymentAmount: null,
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
            {
              limit: null,
              balance: { value: 0, currency: "GBP", decimals: 2 },
              paymentDate: 1709251200000,
              paymentAmount: null,
              paymentStatus: "UpToDate",
              rawPaymentStatus: "ZERO",
            },
          ],
          lastUpdatedDate: 1751328000000,
          accountOpenDates: { startDate: 1706054400000, throughDate: null },
          paymentFrequency: "Monthly",
          rawAccountStatus: null,
          revolvingBalance: null,
          personalDetailsId: "hHF5pjx9RoccbZjrUhxR-hZJCofUH2RvtQuQmznpyk0",
        },
      ],
      reportId: "45200474",
      userUuid: uuid,
      reportTimestamp: 1752091331420,
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function FinancialAccountsV1Seeder() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log("Error fetching user data:", error);
  } else {
    const user = await prisma.user_data.findUnique({
      where: { id: data.user.id },
    });

    const jsonData = generateJsonData(user?.id || "");

    // console.log("Generated JSON Data:", jsonData);

    const seedingData = await prisma.creditreport_financial_accounts_v1.create({
      data: {
        id: user?.id || "",
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });

    // console.log(JSON.stringify(jsonData));
  }
}

// Mock up some JSON for the specific scenarios, map them to an indexed object, random access of indexes,
// then on sign up trigger off a server action which inserts the JSONs to your DB alongside the newly generated user UUID
