import { gql } from "apollo-server-core";

const CategorySchema = gql`
    
    type Categorie {
        id: String
        name: String
        color: String
    }

    type Query {
        getAllCategories: [Categorie]
        getCategorie(id: String): Categorie
    }

    type Mutation {
        updateCategorie(id: String, name: String, color: String): Categorie
    }
`

export default CategorySchema;