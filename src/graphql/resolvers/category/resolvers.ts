export const resolvers = {

    Query: {
        getAllCategories: () => {
            return [
                { id: "6ad0e563-7f94-417d-8370-7eca2e52b2cc", name: "Advertising", color: "7048a3" },
                { id: "0c600155-27a0-40ce-9df5-523f2831ff56", name: "Charges/Fees", color: "ffbf84" }
            ]
        },

        getCategorie: (_: any, args: any) => {
            return { id: "0c600155-27a0-40ce-9df5-523f2831ff56", name: "Charges/Fees", color: "ffbf84" }
        }
    },

    Mutation: {
        updateCategorie: (_: any, args: any) => {
            console.log(args)

            return { id: "0c600155-27a0-40ce-9df5-523f2831ff56", name: "Charges/Fees", color: "ffbf84" }
        }
    }
}