const DB_TYPE: any = process.env.DB_TYPE || 'mysql';

export const DB_CONFIG = {
  type: DB_TYPE,
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'authentication',
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
};
