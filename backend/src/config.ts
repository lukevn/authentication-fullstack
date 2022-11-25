// Environment Variables
export const APP_PORT = process.env.APP_PORT;
export const APP_ENV = process.env.APP_ENV;
export const APP_DEBUG = process.env.APP_DEBUG;
export const APP_VERSION = process.env.APP_VERSION;

export const DB_TYPE: any = String(process.env.DB_TYPE);
export const DB_USERNAME: string = process.env.DB_USERNAME;
export const DB_PASSWORD: string = process.env.DB_PASSWORD;
export const DB_HOST: string = process.env.DB_HOST;
export const DB_PORT: number = parseInt(process.env.DB_PORT);
export const DB_NAME: string = process.env.DB_NAME;
export const DB_SYNCHRONIZE: boolean = process.env.DB_SYNCHRONIZE === 'true';

// Database connection
// export const DB_CONFIG = {
//   type: process.env.DB_TYPE,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   synchronize: process.env.DB_SYNCHRONIZE,
// };
