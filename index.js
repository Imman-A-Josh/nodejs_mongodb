import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Hello Everyone" })
})

const PORT = 2000;

app.listen(PORT, () => {
    console.log("The Server Started at http://localhost:" + PORT + "");
})