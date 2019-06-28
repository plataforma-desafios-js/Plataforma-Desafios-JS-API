import { config } from 'dotenv';
config();

export const port = process.env.PORT || 9000;
export const stringConnection = process.env.CONNECTION_STRING;