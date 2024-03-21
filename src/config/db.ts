import { logger } from '../utils';
import mongoose from 'mongoose';
export const run = async () => {
  try {
    const uri = process.env.DATABASE_URL!;
    await mongoose.connect(uri);
    console.log('connected');
  } catch (err) {
    logger.error('error while connecting the database', err);
  }
};
