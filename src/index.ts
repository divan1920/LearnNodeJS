import 'module-alias/register';
import dotenv from 'dotenv';
import { server } from './config/server';
dotenv.config();
const port = process.env.PORT || 8080;
server().listen(port, () => console.log(`Server running on port ${port}`));
