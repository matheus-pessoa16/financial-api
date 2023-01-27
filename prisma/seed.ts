import { Prisma, PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';


const prisma = new PrismaClient();

type transactionType = {
    id: string,
    account_id: string,
    category_id: string,
    reference: string,
    amount: number,
    currency: string,
    date: Date
};

async function main() {
    const accountSeedFile = "/tmp/accounts.csv";
    const categorySeedFile = "/tmp/categories.csv";

    const accountSeedPromise = prisma.$executeRawUnsafe(`
        \copy public.account(id, name, bank) FROM '${accountSeedFile}' DELIMITER ',' CSV HEADER`);

    const categoriesSeedPromise = prisma.$executeRawUnsafe(`
        \copy public.category(id, name, color) FROM '${categorySeedFile}' DELIMITER ',' CSV HEADER`);


    const [accountsResult] = await Promise.all([accountSeedPromise]);
    const [categoriesResult] = await Promise.all([categoriesSeedPromise]);


    const csvFilePath = path.resolve(__dirname, 'seeds/transactions.csv');

    const headers = ["id", "account_id", "category_id", "reference", "amount", "currency", "date"];

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    let transactions: transactionType[] = []

    parse(fileContent, {
        delimiter: ',',
        columns: headers,
        quote: '"',
        relax_quotes: true,
        cast: (column, ctx) => {
            if (ctx.column === 'amount') {
                return parseFloat(column);
            }
            if (ctx.column === 'reference' && !column) {
                return ''
            }

            return column;
        }
    }, async (error, result: transactionType[]) => {
        if (error) {
            console.error(error);
        }

        result.shift()
        transactions = result

        const transactionsSeedPromise = await prisma.transaction.createMany({
            data: transactions.filter(t => t.category_id !== '' && t.account_id !== '').map(t => {
                return { ...t, date: t.date ? new Date(t.date) : null }
            })
        }).catch(e => console.error(e))

    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
