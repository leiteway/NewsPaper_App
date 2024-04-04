import 'dotenv/config';

export const DB_NAME = <string> process.env.DB_NAME;
export const DB_USER= <string> process.env.DB_USER;
export const DB_PASSWORD= <string> process.env.DB_PASSWORD;
export const DB_PORT = <string> process.env.DB_PORT;
export const SECRET_KEY = <string> process.env.SECRET_KEY;