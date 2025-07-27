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

export function ISODateToMonthAndYear(isoDate: string) {
  const date = new Date(isoDate);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");

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
