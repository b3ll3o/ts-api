import express from 'express';

import ProductController from './controllers/products';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/v1/products', ProductController);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));