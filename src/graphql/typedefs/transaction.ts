import { gql } from "apollo-server-core";


//"id","accountId","categoryId","reference","amount","currency","date"

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
    }

    type Query {
        getAllTransactions: [Transaction]
        getTransction(id: String): Transaction
    }

    type Mutation {
        updateTransaction(id: String, categoryId: String): Transaction
    }
`

export default TransactionSchema; 
