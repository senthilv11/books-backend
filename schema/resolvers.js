import Book from '../models/Book.js';

export const resolvers = {
  Query: {
    books: async () => await Book.find().sort({ createdAt: -1 }),
    book: async (_, { id }) => await Book.findById(id),
  },

  Mutation: {
    addBook: async (_, args) => {
      const book = new Book(args);
      return await book.save();
    },

    updateBook: async (_, { id, ...fields }) => {
      return await Book.findByIdAndUpdate(id, fields, { new: true });
    },

    deleteBook: async (_, { id }) => {
      await Book.findByIdAndDelete(id);
      return `Book with id ${id} deleted successfully`;
    },
  },
};
