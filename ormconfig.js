module.exports = {
  type: "postgres",
  "host": "ec2-107-20-153-39.compute-1.amazonaws.com",
  "port": 5432,
  "username": "eoteltogucmwtx",
  "password": "8d85ad6167ef3c23348ed20384a99f049d9fe2faf16a01bb27cce799a7829de8",
  database: "d5sj5ks3pca70j",
  entities: [
  "dist/src/models/*.js"
  ],
  migrations: [
    "dist/src/database/migrations/*.js"
  ],
  cli: {
    "migrationsDir": "./src/database/migrations"
  }
}
