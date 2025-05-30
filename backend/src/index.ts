import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota Health Check
app.get('/health', (_req: Request, res: Response) => {
  return res.status(200).json({ status: 'OK' });
});

// (AQUI você poderá adicionar outras rotas, ex: auth, transactions, etc.)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
