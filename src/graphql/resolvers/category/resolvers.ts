import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {

    Query: {
        getAllCategories: () => {
            return prisma.category.findMany()
        },

        getCategory: (_: any, args: any) => {
            return { id: "0c600155-27a0-40ce-9df5-523f2831ff56", name: "Charges/Fees", color: "ffbf84" }
        }
    },

    Mutation: {
        createCategorie: (_: any, args: any) => {
            return prisma.category.create({
                data: {
                    name: args.name,
                    color: args.color
                }
            })
        }
    }
}