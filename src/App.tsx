import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (title) {
      setLoading(true);
      const ref = await addDoc(collection(db, "libriary"), { title });
      setBooks([...books, { id: ref.id, title }]);
      setLoading(false);
    }
  };
  useEffect(() => {
    async function getData() {
      let booksArr: any = [];
      const snap = await getDocs(collection(db, "libriary"));
      snap.forEach((doc) => {
        booksArr.push({
          id: doc.id,
          ...doc.data(),
        });
        setBooks(booksArr);
      });
    }

    getData();
  }, []);

  return (
    <>
      <h3>Enter book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="book name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <button disabled={loading}>{loading ? "loading..." : "add"}</button>
      </form>

      <ul>
        {books.map((book: any) => (
          <li key={book.id}>
            {book.title}
            <br />
            <button>Delete</button>
            <button>Update</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
