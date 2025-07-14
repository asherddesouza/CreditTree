function generateJsonData() {
  return {
    bureau: "EQUIFAX",
    reportId: "40557458",
    userUuid: "8adc6c73-8ab1-472e-b64d-59e493045d55",
    reportTimestamp: 1675743385917,
    electoralRollData: {
      futureChanges: [
        {
          addressId: "12345220",
          changeType: "CREATE",
          supplyDate: "2016-03",
          personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
        },
        {
          addressId: "12345220",
          changeType: "DELETE",
          supplyDate: "2006-03",
          personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
        },
      ],
      electoralRollData: [
        {
          addressId: "12345220",
          personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
          annualRegisterPeriod: {
            end: 2017,
            start: 2015,
          },
        },
        {
          addressId: "12345214",
          personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
          annualRegisterPeriod: {
            end: 2010,
            start: 2006,
          },
        },
      ],
    },
  };
}

export default function PersonalDetailsV1Seeder() {
  // use auth to get the newly generated user by their UUID
  // call the generateJsonData function to create some data
  // build a response JSON object with the whole schema filled
  // use prisma to update the supabase db with the user's electoral roll data
}

// how will I determine how users should be seeded?
