export const typeDefs = `#graphql

  type Book {
    id: ID!
    title: String!
    author: Author!
    genre: BookGenre!
    authorId: ID!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  enum BookGenre {
    Mystery
    Fantasy
    Classic
    Fiction
  }

  type Query {
    books: [Book]
    book(id: ID!):Book
    author(id: ID!):Author
  }

  type Mutation {
    addBook(title: String!, author: String!, genre: BookGenre): Book
}
`;
