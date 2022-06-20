import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
console.log('process.env.HOST');
console.log(process.env.USER);
console.log(process.env.DATABASE);
const pool = mysql.createPool({
    host            : process.env.HOST,
    user            : 'sqluser',  // process.env.USER,
    password        : 'Password@123', // process.env.PASSWORD,
    database        : process.env.DATABASE,
    connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
    multipleStatements : true,
    port: 3306
});

export default pool;
