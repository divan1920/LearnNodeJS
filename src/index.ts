import 'module-alias/register';
import dotenv from 'dotenv';
import { server } from './config/server';
import { run } from './config/db';
dotenv.config();
const port = process.env.PORT || 8080;
run();
server().listen(port, () => console.log(`Server running on port ${port}`));
