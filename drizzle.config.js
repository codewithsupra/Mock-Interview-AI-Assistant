/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:7e2PfCxtSTBv@ep-falling-firefly-a5bjyhbr.us-east-2.aws.neon.tech/ai-interview?sslmode=require',
    }
  };