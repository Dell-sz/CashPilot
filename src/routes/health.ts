import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'API CashPilot está saudável!' });
});

export default router;
