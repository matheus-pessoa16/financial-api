import { PrismaClient, transaction } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {

    Query: {

        getAllTransactions: (_: any, args: any) => {

            const PAGE_SIZE = 10

            let skip = (args.page == 0 ? 0 : args.page - 1) * PAGE_SIZE

            return prisma.transaction.findMany({
                take: PAGE_SIZE,
                skip,
                orderBy: {
                    date: 'desc'
                },
                include: {
                    category: true,
                    account: true
                }
            })

        },

        getTransaction: (_: any, args: any) => {
            return prisma.transaction.findUnique({
                where: {
                    id: args.id
                },
                include: {
                    category: true,
                    account: true
                }
            })
        },

        countTransactions: () => {
            return prisma.transaction.count()
        }

    },

    Mutation: {
        updateTransaction: (_: any, args: any) => {
            console.log(args)

            return { id: "56b80608-ed28-4182-a509-09ff9deb3ec9", accountId: "a3bbb581-7e91-488e-a416-8ac8f5f6f5be", categoryId: "11bb7aa7-61e6-4753-b3f2-365f83694417", reference: "Underministry Hexeikosane Tisicky", amount: -3.99, currency: "GBP", date: "2017-09-01 23:00:00.000" }

        }
    }
}