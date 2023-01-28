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

    type Query {
        getAllTransactions(page: Int = 0): [Transaction]
        getTransaction(id: String): Transaction
        countTransactions: Int
    }

    type Mutation {
        updateTransaction(id: String, categoryId: String): Transaction
    }
`

export default TransactionSchema; 
