import { gql } from "apollo-server-core";

const AccountSchema = gql`

    type Account {
        id: String
        name: String
        bank: String
    }

    type Query {
        getAllAccounts: [Account]
        getAccount(id: String): Account
    }

    type Mutation {
        updateAccount(id: String, name: String, bank: String): Account
    }
`

export default AccountSchema; 
