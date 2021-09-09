import { Sequelize } from 'sequelize'

export const db = new Sequelize(
  process.env.POSTGRES_DATABASE || 'vip_management_system',
  process.env.POSTGRES_USERNAME || 'postgres',
  process.env.POSTGRES_PASSWORD || '',
  {
    host: process.env.POSTGRES_HOST || 'postgres',
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  }
)
