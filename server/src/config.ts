import dotenv from 'dotenv';

dotenv.config();

export const API_URI = process.env.API_URI;
export const PORT = process.env.PORT;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
