import { gql } from "apollo-server-micro";


export const typeDefs = gql`
  type Resource {
    id: String
    name: String
    description: String
    tag: String
    imageUrl: String
    link: String

  }

  type Query {
    resources:[Resource]! 
  }


`;