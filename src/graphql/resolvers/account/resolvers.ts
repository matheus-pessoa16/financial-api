export const resolvers = {
    Query: {
        getAllAccounts: () => {
            return [
                { id: "c5f3f93c-bf33-402e-a9f1-c15c148d451b", name: "Anonymous", bank: "iBank" },
                { id: "4d4e9f76-7d97-42a8-b1ec-360a127acb27", name: "Checking Account (EUR)", bank: "Airbank" }
            ]
        },

        getAccount: (_: any, args: any) => {
            console.log(args)
            return { id: "c5f3f93c-bf33-402e-a9f1-c15c148d451b", name: "Anonymous", bank: "iBank" }
        }
    },

    Mutation: {
        updateAccount: (_: any, args: any) => {
            console.log(args)

            return { id: "4d4e9f76-7d97-42a8-b1ec-360a127acb27", name: "Checking Account (EUR)", bank: "Airbank" };
        }
    }
};