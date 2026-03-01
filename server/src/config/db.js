import pkg from "pg";
const { Pool } = pkg; //take Pool property from pkg object

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: Number(process.env.DB_POOL_MAX),
  idleTimeoutMillis: Number(process.env.DB_IDLE_TIMEOUT),
  connectionTimeoutMillis: Number(process.env.DB_CONNECTION_TIMEOUT),
});

export const testDbConnection = async () => {
  try {
    const result = await pool.query("SELECT NOW( )");
    console.log("Database connected at:", result.rows[0].now);
  } catch (error) {
    console.log("Database connection failed:", error);
    process.exit(1); //stop the backend server as something went wrong
  }
};

export default pool;
