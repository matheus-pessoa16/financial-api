import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const resolvers = {

    Query: {
        getAllAccounts: () => {
            return prisma.account.findMany()
        },

        getAccount: (_: any, args: any) => {
            return prisma.account.findUnique({
                where: {
                    id: args.id
                }
            })
        }
    },

};