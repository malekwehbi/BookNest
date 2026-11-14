import { useState } from "react";

function Books() {
  const [books] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 15
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 12
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: 25
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 20
    },
    {
      id: 5,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 18
    },
    {
      id: 6,
      title: "Deep Work",
      author: "Cal Newport",
      price: 22
    }
  ]);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Our Books</h1>
      <p>Explore our collection of books.</p>

      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;