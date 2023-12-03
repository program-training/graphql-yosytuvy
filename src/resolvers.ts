import { log } from "console";
import { authors, books } from "./data.js";

export const resolvers = {
  Query: {
    books: () => books,

    book: (_, args) => {
      return books.find((b) => b.id === args.id);
    },
    author: (_, args) => {
      return authors.find((a) => a.id === args.id);
    },
  },

  Book: {
    author(parent) {
      return authors.find((author) => author.id === parent.authorId);
    },
  },

  Author: {
    books(parent, _args, _context, {variableValues}) {
      const requestedBookId = variableValues.bookId;
      return books.filter(
        (book) => book.authorId === parent.id && book.id !== requestedBookId
      );
    },
  },

  Mutation: {
    addBook: (_, args) => {
      const newBook = {
        id: (books.length + 1) as unknown as string,
        title: args.title,
        author: args.author,
        genre: args.genre,
        authorId: args.authorId,
      };
      books.push(newBook);
      return newBook;
    },
  },
};
