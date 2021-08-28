import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host            : process.env.HOST,
    user            : process.env.USER,
    password        : process.env.PASSWORD,
    database        : process.env.DATABASE,
    connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
    multipleStatements : true
});

export default pool;
