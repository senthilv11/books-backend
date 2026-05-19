export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
    genre: String!
    year: Int!
    createdAt: String
    updatedAt: String
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, genre: String!, year: Int!): Book!
    updateBook(id: ID!, title: String, author: String, genre: String, year: Int): Book!
    deleteBook(id: ID!): String!
  }
`;
