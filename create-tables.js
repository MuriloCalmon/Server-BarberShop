import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS datetime`.then(() => {
//     console.log('Table deleted')
// })

// sql`
// CREATE TABLE "user" (
//     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//     login VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL
// );
// `.then(() => {
//     console.log('Table user created')
// })

// sql`
// CREATE TABLE barber (
//     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//     name VARCHAR(100) NOT NULL,
//     src_img VARCHAR(255) NOT NULL,
//     stars BOOLEAN[] NOT NULL
// );
// `.then(() => {
//     console.log('table barber created!')
// })

// sql`
// CREATE TABLE services (
//     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//     barber_id VARCHAR(100) NOT NULL,
//     service_name VARCHAR(100) NOT NULL,
//     price VARCHAR(20) NOT NULL
// );
// `.then(() => {
//     console.log('table services created!')
// })

// sql`
// CREATE TABLE datetime (
//     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//     barber_id VARCHAR(100) NOT NULL,
//     date TEXT NOT NULL,
//     time TEXT NOT NULL
// );
// `.then(() => {
//     console.log('table datetime created!')
// })