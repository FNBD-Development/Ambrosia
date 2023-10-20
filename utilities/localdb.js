// init local DB
// must have mysql installed
// please only invoke once for now
require('child_process').execSync('mysql ../sql/init_database.sql')
