import { gql } from "apollo-server-core";

const CategorySchema = gql`
    
    type Category {
        id: String
        name: String
        color: String
    }

    type Query {
        getAllCategories: [Category]
        getCategory(id: String): Category
    }

    type Mutation {
        updateCategorie(id: String, name: String, color: String): Category
    }
`

export default CategorySchema;