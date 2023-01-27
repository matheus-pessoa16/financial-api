import { makeExecutableSchema } from "@graphql-tools/schema";
import AccountSchema from "./typedefs/account";
import CategorySchema from "./typedefs/category";
import TransactionSchema from "./typedefs/transaction";
import { resolvers as accountResolver } from './resolvers/account/resolvers'
import { resolvers as categoryResolver } from './resolvers/category/resolvers'
import { resolvers as transactionResolver } from './resolvers/transaction/resolvers'

const schema = makeExecutableSchema({
    typeDefs: [AccountSchema, TransactionSchema, CategorySchema],
    resolvers: [accountResolver, categoryResolver, transactionResolver]
})


export default schema;