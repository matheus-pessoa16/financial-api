import { gql } from "apollo-server-core";

const TransactionSchema = gql`

    scalar DateTime

    type Transaction {
        id: String
        accountId: String
        categoryId: String 
        reference: String
        amount: Float
        currency: String 
        date: DateTime
        category: Category
        account: Account
    }

    input TransactionFilters {
        bank: String
        categoryName: String
        accountName: String
        startDate: DateTime
        endDate: DateTime
    }

    type Query {
        getAllTransactions(page: Int = 0, input: TransactionFilters = {}): [Transaction]
        getTransaction(id: String): Transaction
        countTransactions: Int
    }

    type Mutation {
        updateTransactionCategory(id: String, categoryId: String): Transaction
    }
`

export default TransactionSchema; 
