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
  let generatedInsights = [];

  generatedInsights.push(
    await CourtOrdersV1Insights(uuid),
    await ElectoralRollV1Insights(uuid),
    await FraudWarningsV1Insights(uuid),
    await InsolvenciesV1Insights(uuid),
    await MonthlyScoresV1Insights(uuid),
    await NoticesV1Insights(uuid),
    await RankedInsightsByMonthV1Insights(uuid),
    await PaymentHistoryV1Insights(uuid)
  );

  return generatedInsights;
}
