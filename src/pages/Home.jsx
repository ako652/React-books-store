import React, { useState } from "react";

export default function Home({ books, addToFavorite }) {

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book) => {
        return (
          <div key={book.id} className="w-96 h-96  border-4 ">
            <p className="text-3xl font-bold">{book.volumeInfo.title}</p>
            <p>{book.searchInfo.textSnippet}</p>
            <button
              type="submit"
              onClick={() => addToFavorite(book)}
              className="bg-sky-500"
            >
              Favorite
            </button>
          </div>
        );
      })}
    </div>
  );
}
