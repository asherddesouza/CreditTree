"use server";

import CourtOrdersV1Insights from "./creditreport-court-orders-v1-insights";
import ElectoralRollV1Insights from "./creditreport-electoral-roll-v1-insights";
import FraudWarningsV1Insights from "./creditreport-fraud-warnings-v1-insights";
import InsolvenciesV1Insights from "./creditreport-insolvencies-v1-insights";
import MonthlyScoresV1Insights from "./creditreport-monthly-scores-v1-insights";
import NoticesV1Insights from "./creditreport-notices-v1-insights";
import RankedInsightsByMonthV1Insights from "./creditreport-ranked-insights-by-month-v1-insights";
import PaymentHistoryV1Insights from "./creditreport-payment-history-overview-v1-insights";

export default async function generateInsights(uuid: string) {
  const generatedInsights = [];

  const insightFunctions = [
    CourtOrdersV1Insights,
    ElectoralRollV1Insights,
    FraudWarningsV1Insights,
    InsolvenciesV1Insights,
    MonthlyScoresV1Insights,
    NoticesV1Insights,
    RankedInsightsByMonthV1Insights,
    PaymentHistoryV1Insights,
  ];

  const results = await Promise.all(
    insightFunctions.map((fn) =>
      fn(uuid).catch((error) => {
        console.error(`Error generating insights from ${fn.name}:`, error);
        return [];
      })
    )
  );

  for (const result of results) {
    if (Array.isArray(result) && result.length > 0) {
      generatedInsights.push(...result);
    }
  }

  return generatedInsights;
}
