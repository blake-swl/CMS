import express from 'express';
import path from 'path';
import parser from 'body-parser';
import db from '../db/index'

const app = express();
const PORT = process.env.PORT || 2018;

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
})