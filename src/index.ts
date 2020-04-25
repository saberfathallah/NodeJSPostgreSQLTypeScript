import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => res.json({ msg: 'dssdddd' }));

app.listen(port, () => console.log(`server running... ${port}`));
