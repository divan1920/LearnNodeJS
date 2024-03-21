import { Router } from 'express';
import { authRoutes } from './authentication';

const router: Router = Router();

router.use('/auth', authRoutes);

export { router as routes };
