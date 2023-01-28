import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const resolvers = {

    Query: {
        getAllAccounts: () => {
            return prisma.account.findMany()
        },

        getAccount: (_: any, args: any) => {
            console.log(args)
            return prisma.account.findUnique({
                where: {
                    id: args.id
                }
            })
        }
    },

    Mutation: {
        updateAccount: (_: any, args: any) => {
            console.log(args)

            return { id: "4d4e9f76-7d97-42a8-b1ec-360a127acb27", name: "Checking Account (EUR)", bank: "Airbank" };
        }
    }
};