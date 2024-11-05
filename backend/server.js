import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Home route
app.get('/', (req, res) => {
  res.send('server is ready');
});

// Books route
app.get('/books', (req, res) => {
  const books = [
    { bookName: 'Making India Awesome', AuthorName: 'Chetan Bhagat' },
    { bookName: 'One Indian Girl', AuthorName: 'Chetan Bhagat' },
    { bookName: 'A Suitable Boy', AuthorName: 'Vikram Seth' },
    { bookName: 'An Autobiography', AuthorName: 'Jawaharlal Nehru' },
  ];
  res.json(books); // Send the books as a JSON response
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
