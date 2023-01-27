export const resolvers = {

    Query: {

        getAllTransactions: () => {
            return [
                { id: "4f87e7c0-2831-4a38-9b94-dc94f2e8554d", accountId: "a3bbb581-7e91-488e-a416-8ac8f5f6f5be", categoryId: "0ca2a326-085d-45c8-8a15-9e72f2598104", reference: "", amount: -4.69, currency: "GBP", date: "2017 - 09 - 01 23: 00: 00.000" },
                { id: "56b80608-ed28-4182-a509-09ff9deb3ec9", accountId: "a3bbb581-7e91-488e-a416-8ac8f5f6f5be", categoryId: "11bb7aa7-61e6-4753-b3f2-365f83694417", reference: "", amount: -3.99, currency: "GBP", date: "2017 - 09 - 01 23: 00: 00.000" }

            ]
        },

        getTransction: (_: any, args: any) => {
            return { id: "56b80608-ed28-4182-a509-09ff9deb3ec9", accountId: "a3bbb581-7e91-488e-a416-8ac8f5f6f5be", categoryId: "11bb7aa7-61e6-4753-b3f2-365f83694417", reference: "", amount: -3.99, currency: "GBP", date: "2017 - 09 - 01 23: 00: 00.000" }

        }

    },

    Mutation: {
        updateTransaction: (_: any, args: any) => {
            console.log(args)

            return { id: "56b80608-ed28-4182-a509-09ff9deb3ec9", accountId: "a3bbb581-7e91-488e-a416-8ac8f5f6f5be", categoryId: "11bb7aa7-61e6-4753-b3f2-365f83694417", reference: "", amount: -3.99, currency: "GBP", date: "2017 - 09 - 01 23: 00: 00.000" }

        }
    }
}