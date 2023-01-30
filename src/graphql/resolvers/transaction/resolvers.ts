import { PrismaClient, transaction } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {

    Query: {

        getAllTransactions: (_: any, args: any) => {

            const { input: filter } = args;

            const shouldApplyFilters = filter.categoryName !== undefined ||
                filter.bank !== undefined || filter.accountName !== undefined ||
                (filter.startDate !== undefined && filter.endDate !== undefined);

            const PAGE_SIZE = 10

            let skip = (args.page == 0 ? 0 : args.page - 1) * PAGE_SIZE

            let filtersOptions = []

            if (shouldApplyFilters) {

                if (filter.categoryName) {
                    filtersOptions.push({ category: { name: filter.categoryName } })
                }

                if (filter.bank) {
                    filtersOptions.push({ account: { bank: filter.bank } })
                }

                if (filter.accountName) {
                    filtersOptions.push({ account: { name: filter.accountName } })
                }

                if (filter.startDate && filter.endDate) {

                    let startDateString = filter.startDate + '-01'
                    let startDate: Date = new Date(startDateString)

                    let endDate = filter.endDate.split('-')
                    var lastDayOfMonth = new Date(parseInt(endDate[0]), parseInt(endDate[1]) + 1, 0).getDate();
                    endDate = new Date(filter.endDate + '-' + lastDayOfMonth)

                    filtersOptions.push({
                        date: {
                            lte: endDate,
                            gte: startDate,
                        }
                    })
                }
            }


            const where = shouldApplyFilters
                ? {
                    AND: [...filtersOptions],
                }
                : {}


            return prisma.transaction.findMany({
                where,
                take: PAGE_SIZE,
                skip,
                orderBy: {
                    date: 'desc'
                },
                include: {
                    category: true,
                    account: true
                },
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
        updateTransactionCategory: (_: any, args: any) => {

            return prisma.transaction.update({
                where: { id: args.id },
                data: {
                    category: { connect: { id: args.categoryId } }
                },
                include: {
                    category: true,
                    account: true
                }
            })

        }
    }
}