import { login, signup } from '../controller';
import { Router } from 'express';

const router: Router = Router();

router.post('/login', login);
router.post('/signup', signup);

export { router as authRoutes };
