import { useState } from "react";
import "../Pages.css";

function Books() {
  const [search, setSearch] = useState("");

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 15,
      image: "/images/atomic-habits.jpg"
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 12,
      image: "/images/the-alchemist.jpg"
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: 25,
      image: "/images/clean-code.jpg"
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 20,
      image: "/images/rich-dad-poor-dad.jpg"
    },
    {
      id: 5,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 18,
      image: "/images/psychology-of-money.jpg"
    },
    {
      id: 6,
      title: "Deep Work",
      author: "Cal Newport",
      price: 22,
      image: "/images/deep-work.jpg"
    }
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="books-page">
      <h1>Explore Our Books</h1>
      <p>Discover your next favorite book!</p>

      <input
        type="text"
        className="search-input"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />

            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p className="book-price">
              ${book.price}
            </p>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default Books;