import { ScoreData } from "@/utils/insights-generator/src/creditreport-monthly-scores-v1-insights";

export function UnixToMonthAndYear(unixDate: number) {
  const rawDate = new Date(unixDate).toISOString();

  const [year, month] = rawDate.split("T")[0].split("-");

  switch (month) {
    case "01":
      return `Jan ${year}`;
    case "02":
      return `Feb ${year}`;
    case "03":
      return `Mar ${year}`;
    case "04":
      return `Apr ${year}`;
    case "05":
      return `May ${year}`;
    case "06":
      return `Jun ${year}`;
    case "07":
      return `Jul ${year}`;
    case "08":
      return `Aug ${year}`;
    case "09":
      return `Sep ${year}`;
    case "10":
      return `Oct ${year}`;
    case "11":
      return `Nov ${year}`;
    case "12":
      return `Dec ${year}`;
  }
}

export function MonthlyScoresToInsightDate(scoreData: ScoreData) {
  if (!scoreData) {
    return "Date Unavailable";
  }

  const year = scoreData.year;
  const month = scoreData.month;

  switch (month) {
    case 1:
      return `Jan ${year}`;
    case 2:
      return `Feb ${year}`;
    case 3:
      return `Mar ${year}`;
    case 4:
      return `Apr ${year}`;
    case 5:
      return `May ${year}`;
    case 6:
      return `Jun ${year}`;
    case 7:
      return `Jul ${year}`;
    case 8:
      return `Aug ${year}`;
    case 9:
      return `Sep ${year}`;
    case 10:
      return `Oct ${year}`;
    case 11:
      return `Nov ${year}`;
    case 12:
      return `Dec ${year}`;
  }
}

// Converts an Excel-style serial date (days since 1900-01-01) to "MM YYYY"
export function SerialDayToMonthAndYear(serialDay: number) {
  // Excel epoch is Jan 1, 1900, but Excel incorrectly treats 1900 as a leap year, so subtract 2 days
  const excelEpoch = new Date(Date.UTC(1900, 0, 1));
  const msPerDay = 24 * 60 * 60 * 1000;
  const date = new Date(excelEpoch.getTime() + (serialDay - 2) * msPerDay);

  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // getUTCMonth is 0-based
  const year = date.getUTCFullYear();

  switch (month) {
    case "01":
      return `Jan ${year}`;
    case "02":
      return `Feb ${year}`;
    case "03":
      return `Mar ${year}`;
    case "04":
      return `Apr ${year}`;
    case "05":
      return `May ${year}`;
    case "06":
      return `Jun ${year}`;
    case "07":
      return `Jul ${year}`;
    case "08":
      return `Aug ${year}`;
    case "09":
      return `Sep ${year}`;
    case "10":
      return `Oct ${year}`;
    case "11":
      return `Nov ${year}`;
    case "12":
      return `Dec ${year}`;
  }
}
