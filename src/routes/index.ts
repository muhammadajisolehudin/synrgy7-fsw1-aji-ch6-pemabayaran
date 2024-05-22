import { Router } from 'express';
import carsRoutes from './api/carRouter';

const router = Router();

router.use(carsRoutes);


export default router;
