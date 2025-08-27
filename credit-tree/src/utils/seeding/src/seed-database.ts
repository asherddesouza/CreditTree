import { generateJsonData as PaymentHistoryData } from "./creditreport-payment-history-overview-seeder-v1";
import PaymentHistoryOverviewV1Seeder from "./creditreport-payment-history-overview-seeder-v1";

import { generateJsonData as NoticesData } from "./creditreport-notices-v1-seeder";
import NoticesV1Seeder from "./creditreport-notices-v1-seeder";

import { generateJsonData as AddressesData } from "./creditreport-addresses-v1-seeder";
import AddressesV1Seeder from "./creditreport-addresses-v1-seeder";

import { generateJsonData as CourtOrdersData } from "./creditreport-court-orders-v1-seeder";
import CourtOrdersV1Seeder from "./creditreport-court-orders-v1-seeder";

import { generateJsonData as ElectoralRollData } from "./creditreport-electoral-roll-v1-seeder";
import ElectoralRollV1Seeder from "./creditreport-electoral-roll-v1-seeder";

import { generateJsonData as FinancialAccountsData } from "./creditreport-financial-accounts-v1-seeder";
import FinancialAccountsV1Seeder from "./creditreport-financial-accounts-v1-seeder";

import { generateJsonData as FraudWarningsData } from "./creditreport-fraud-warnings-v1-seeder";
import FraudWarningsV1Seeder from "./creditreport-fraud-warnings-v1-seeder";

import { generateJsonData as InsolvenciesData } from "./creditreport-insolvencies-v1-seeder";
import InsolvenciesV1Seeder from "./creditreport-insolvencies-v1-seeder";

import { generateJsonData as MonthlyScoresData } from "./creditreport-monthly-scores-v1-seeder";
import MonthlyScoresV1Seeder from "./creditreport-monthly-scores-v1-seeder";

import { generateJsonData as RankedInsightsByMonthData } from "./creditreport-ranked-insights-by-month-v1-seeder";
import RankedInsightsByMonthV1Seeder from "./creditreport-ranked-insights-by-month-v1-seeder";

export type SeedScenarios =
  | "paymentHistory"
  | "notices"
  | "addresses"
  | "courtOrders"
  | "financialAccounts"
  | "fraudWarnings"
  | "insolvencies"
  | "monthlyScores"
  | "rankedInsightsByMonth"
  | "electoralRoll";

export const scenarios = {
  paymentHistory: PaymentHistoryData,
  notices: NoticesData,
  addresses: AddressesData,
  courtOrders: CourtOrdersData,
  electoralRoll: ElectoralRollData,
  financialAccounts: FinancialAccountsData,
  fraudWarnings: FraudWarningsData,
  insolvencies: InsolvenciesData,
  monthlyScores: MonthlyScoresData,
  rankedInsightsByMonth: RankedInsightsByMonthData,
} satisfies Record<SeedScenarios, any>;

export function createSeeder(scenario: SeedScenarios, uuid: string) {
  const seeder = scenarios[scenario];

  if (!seeder) {
    throw new Error(`Seeder for scenario "${scenario}" not found.`);
  }

  return seeder(uuid);
}

export const scenarioMap: Record<
  SeedScenarios,
  (uuid: string, jsonData?: Record<string, any>) => Promise<string>
> = {
  paymentHistory: PaymentHistoryOverviewV1Seeder,
  notices: NoticesV1Seeder,
  addresses: AddressesV1Seeder,
  courtOrders: CourtOrdersV1Seeder,
  electoralRoll: ElectoralRollV1Seeder,
  financialAccounts: FinancialAccountsV1Seeder,
  fraudWarnings: FraudWarningsV1Seeder,
  insolvencies: InsolvenciesV1Seeder,
  monthlyScores: MonthlyScoresV1Seeder,
  rankedInsightsByMonth: RankedInsightsByMonthV1Seeder,
};

export default async function SeedDatabase(
  scenarios: SeedScenarios[],
  uuid: string
) {
  for await (const scenario of scenarios) {
    if (!scenarioMap[scenario]) {
      throw new Error(`Scenario "${scenario}" is not defined in scenarioMap.`);
    }

    const seeder = await createSeeder(scenario, uuid);

    await scenarioMap[scenario](uuid, seeder)
      .then((result) => {
        console.log(`Seeding completed for scenario: ${scenario}`);
        return result;
      })
      .catch((error) => {
        console.error(
          `Error during seeding for scenario "${scenario}":`,
          error
        );
        throw error;
      });
  }
}
