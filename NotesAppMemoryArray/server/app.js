import express from 'express';
import cors from 'cors';
import noteRoutes from './routes/notes.router.js';

const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5174', credentials: true }));

app.get('/', (req, res) => {
    res.send('Restful server');
});

app.use('/notes', noteRoutes);

app.listen(5000, () => {
    console.log('Listening on port 5000');
});
