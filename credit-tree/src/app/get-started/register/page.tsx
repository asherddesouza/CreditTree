import Page from "./page.client";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export default async function CreateAccount() {
  const val = await prisma.user_data.findMany({
    take: 10,
  });
  console.log(val);

  return (
    <>
      <Page />
    </>
  );
}
