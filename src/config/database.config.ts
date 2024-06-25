import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 27017,
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  connectionString:
    'mongodb://' +
    process.env.DATABASE_HOST +
    ':' +
    process.env.DATABASE_PORT +
    '/' +
    process.env.DATABASE_NAME,
}));
