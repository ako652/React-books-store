import React from 'react'

export default function Favorite({ favorite, deleteFavorite }) {
  return (
    <div>
      {favorite.length === 0 ? (
        <p>no data to display yet</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favorite.map((book) => {
            return (
              <div key={book.id} className="w-96 h-96  border-4 ">
                <p className="text-3xl font-bold">{book.volumeInfo.title}</p>
                <p>{book.searchInfo.textSnippet}</p>
                <button
                  type="submit"
                  onClick={() => deleteFavorite(book)}
                  className="bg-sky-500"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
