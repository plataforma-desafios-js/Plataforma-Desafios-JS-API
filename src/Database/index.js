import { stringConnection } from '../configs';
import mongoose from 'mongoose';

mongoose.connect(stringConnection, {
  useNewUrlParser: true
});