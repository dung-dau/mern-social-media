import express from 'express';
// bodyParser is middleware that parses req.body
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// returns middleware that only parses json and only looks at requests
// where the Content-Type header matches the type option
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// returns middleware that only parses urlencoded bodies and only looks
// at requests where the Content-Type header matches the type option
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// middleware that can be used to enable Cross-origin resource sharing(CORS)
app.use(cors());

app.use('/posts', postRoutes);

// connection URL to the MongoDB cloud database
const CONNECTION_URL = "mongodb+srv://ddau:Ii7I9YdAxKaHWxVi@cluster0.nfatd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connecting to the MongoDB cloud database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);