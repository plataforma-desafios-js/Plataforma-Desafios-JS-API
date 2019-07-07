import mongoose from 'mongoose';
import { stringConnection } from '../configs';

mongoose.connect(stringConnection, {
  useNewUrlParser: true,
});
